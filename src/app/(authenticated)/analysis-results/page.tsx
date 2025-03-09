'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { CloseOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import { Button, Card, Space, Spin, Tooltip, Typography } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const { Title, Text, Paragraph } = Typography

export default function AnalysisResultsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const contractId = searchParams.get('contractId')
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedClause, setSelectedClause] = useState<Prisma.ClauseGetPayload<{
    include: { contract: true }
  }> | null>(null)

  const { data: contract, isLoading } = Api.contract.findUnique.useQuery({
    where: { id: contractId },
    include: {
      clauses: {
        include: { contract: true },
      },
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!contract) {
    enqueueSnackbar('Contract not found', { variant: 'error' })
    router.push('/contract-history')
    return null
  }

  const handleClauseClick = (
    clause: Prisma.ClauseGetPayload<{ include: { contract: true } }>,
  ) => {
    setSelectedClause(clause)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Contract Analysis Results</Title>
        <Paragraph>
          Review the analysis of your contract below. Important clauses are
          highlighted for your attention.
        </Paragraph>

        <Card title="Contract Content">
          {contract.clauses?.map(clause => (
            <Paragraph key={clause.id}>
              {clause.isImportant ? (
                <Tooltip title="Click for more details">
                  <Text
                    strong
                    style={{ backgroundColor: 'rgba(255, 205, 0, 0.4)', cursor: 'pointer' }}
                    onClick={() => handleClauseClick(clause)}
                  >
                    {clause.content}{' '}
                    <WarningOutlined style={{ color: 'red' }} />
                  </Text>
                </Tooltip>
              ) : (
                <Text>{clause.content}</Text>
              )}
            </Paragraph>
          ))}
        </Card>
      </Space>

      <AnimatePresence>
        {selectedClause && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '350px',
              boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              overflowY: 'auto',
            }}
          >
            <Card
              title={
                <Space>
                  <InfoCircleOutlined />
                  <Text strong>Clause Analysis</Text>
                </Space>
              }
            >
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setSelectedClause(null)}
                style={{ position: 'absolute', top: 10, right: 10 }}
              />
              <Paragraph>{selectedClause.content}</Paragraph>
              <Paragraph>
                <Text strong>AI Analysis:</Text> {selectedClause.aiAnalysis}
              </Paragraph>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  )
}
