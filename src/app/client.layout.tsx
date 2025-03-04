'use client'

import { WorkspaceProvider } from '@/.marblism/workspace'
import { Analytics as AnalyticsVercel } from '@vercel/analytics/next';
import { UserProvider } from '@/core/context'
import { TRPCProvider } from '@/core/trpc'
import { DesignSystemProvider } from '@/designSystem'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

import { NotificationProvider } from '@/core/hooks/pushNotification'

type Props = { children: ReactNode }

export function ClientLayout({ children }: Props) {
  return (
    <DesignSystemProvider>
      <SessionProvider>
        <TRPCProvider>
          <WorkspaceProvider>
            <UserProvider>
              <NotificationProvider>
                {children}
                <AnalyticsVercel />
              </NotificationProvider>
            </UserProvider>
          </WorkspaceProvider>
        </TRPCProvider>
      </SessionProvider>
    </DesignSystemProvider>
  )
}
