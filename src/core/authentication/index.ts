import { RegistrationService } from '@/server/libraries/registration'
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { PrismaClient, PushNotification } from '@prisma/client'
import * as Bcrypt from 'bcryptjs'
import {
  CookiesOptions,
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth'
import { type Adapter } from 'next-auth/adapters'
import type { Provider } from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { DatabaseUnprotected } from '../database/internal/unprotected'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      globalRole: string
      stripeCustomerId?: string
      freeUsageUsed?: boolean
      pushNotifications?: PushNotification[]
    } & DefaultSession['user']
  }

  interface Profile {
    picture?: string;
  }
}

const providers: Provider[] = [
  CredentialsProvider({
    credentials: {
      email: { type: 'email' },
      password: { type: 'password' },
    },
    authorize: authorize(DatabaseUnprotected),
  }),
  /**
   * ...add more providers here.
   *
   * Most other providers require a bit more work than the Discord provider. For example, the
   * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
   * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
   *
   * @see https://next-auth.js.org/providers/github
   */
]

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      /**
       * Allow Next Auth to reconcile an existing user with their Google login.
       */
      allowDangerousEmailAccountLinking: true,
    }),
  )
}

const providerMap = providers.map(provider => {
  const isActive =
    provider?.options?.clientId || provider?.options?.clientSecret

  return { id: provider?.id, name: provider?.name, active: isActive }
})

const cookiePrefix = '__Secure-'

const isWorkspace = process.env.PUBLIC_MARBLISM_ENV === 'workspace'

const cookiesForWorkspace: Partial<CookiesOptions> = {
  sessionToken: {
    name: `__Secure-next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
  callbackUrl: {
    name: `__Secure-next-auth.callback-url`,
    options: {
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
  csrfToken: {
    name: `__Host-next-auth.csrf-token`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
  pkceCodeVerifier: {
    name: `${cookiePrefix}next-auth.pkce.code_verifier`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
      maxAge: 900,
    },
  },
  state: {
    name: `${cookiePrefix}next-auth.state`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
      maxAge: 900,
    },
  },
  nonce: {
    name: `${cookiePrefix}next-auth.nonce`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      secure: true,
    },
  },
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!

        const user = await DatabaseUnprotected.user.findUnique({
          where: { id: token.sub },
        })

        if (user) {
          session.user.globalRole = user.globalRole
          session.user.stripeCustomerId = user.stripeCustomerId
          session.user.freeUsageUsed = user.freeUsageUsed

          // Retrieve subscriptions for the user
          const pushNotifications = await DatabaseUnprotected.pushNotification.findMany({
            where: { userId: user.id },
          })

          session.user.pushNotifications = pushNotifications
        }
      }
      return session
    },
    async jwt({ token, trigger, user }) {
      if (trigger === 'signUp') {
        await RegistrationService.onRegistration(user?.id)
      }

      return token
    },
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        const email = profile.email;
        const existingUser = await DatabaseUnprotected.user.findUnique({
          where: { email },
        });

        if (!existingUser) {
          await DatabaseUnprotected.user.create({
            data: {
              email,
              name: profile.name,
              pictureurl: profile.picture,
              globalRole: 'USER', // or any default role you want to assign
            },
          });
        }
      }
      return true;
    },
  },
  adapter: PrismaAdapter(DatabaseUnprotected) as Adapter,
  providers: providers,
  pages: {
    signIn: '/login',
    signOut: '/profile',
  },
  cookies: isWorkspace ? cookiesForWorkspace : undefined,
}

function authorize(prisma: PrismaClient) {
  return async (
    credentials: Record<'email' | 'password', string> | undefined,
  ) => {
    if (!credentials) {
      throw new Error('Missing credentials')
    }

    if (!credentials.email) {
      throw new Error('"email" is required in credentials')
    }

    if (!credentials.password) {
      throw new Error('"password" is required in credentials')
    }

    const user = await prisma.user.findFirst({
      where: { email: credentials.email },
      select: { id: true, email: true, password: true },
    })

    if (!user?.password) {
      return null
    }

    // verify the input password with stored hash
    const isValid = await Bcrypt.compare(credentials.password, user.password)

    if (!isValid) {
      return null
    }

    return { id: user.id, email: user.email }
  }
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
const getServerAuthSession = () => getServerSession(options)

export const Authentication = {
  providers: providerMap,
  getSession: getServerAuthSession,
  options,
}
