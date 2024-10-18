'use client'
import TestComponent from '@/components/TestComponent';

import { Skeleton } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
      <TestComponent />
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])
  return <Skeleton />
}
