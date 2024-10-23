'use client'

import { Skeleton } from 'antd'
import TestComponent from '../TestComponent';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()
      <TestComponent />

  useEffect(() => {
    router.push('/home')
  }, [])
  return <Skeleton />
}
