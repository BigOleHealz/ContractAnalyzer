'use client'

import { AppHeader } from '@/designSystem/ui/AppHeader'
import { Flex, Typography } from 'antd'
import { getProviders, signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || '/upload-contract'

  const { enqueueSnackbar } = useSnackbar()

  const [providers, setProviders] = useState<string[]>([])

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }[errorKey ?? 'default']

  useEffect(() => {
    fetchProviders()
  }, [])

  const fetchProviders = async () => {
    try {
      const providers = await getProviders()

      setProviders(Object.keys(providers))
    } catch {
      console.log('error fetching providers')
      enqueueSnackbar('Error fetching providers', { variant: 'error' })
    }
  }

  const handleProviderSignIn = async provider => {
    await signIn(provider, { callbackUrl: redirectUrl })
  }

  const ProviderButton = ({ provider }) => {
    switch (provider) {
      case 'google':
        return <GoogleButton onClick={() => handleProviderSignIn(provider)} />
      default:
        return null
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '100px',
          paddingTop: '100px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {errorKey && (
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        )}
        {providers.length > 1 && (
          <>
            <Flex
              gap={'small'}
              justify="center"
              style={{ marginBottom: '20px' }}
            >
              {providers.map(provider => (
                <ProviderButton
                  key={`button-${provider}`}
                  provider={provider}
                />
              ))}
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  )
}
