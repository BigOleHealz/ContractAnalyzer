'use client'

import { Typography, Spin, Card, Space, Tooltip } from 'antd'
import { InfoCircleOutlined, WarningOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AnalysisResultsPage() {
  const router = useRouter()
  const params = useParams<{ contractId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedClause, setSelectedClause] = useState<Prisma.ClauseGetPayload<{
    include: { contract: true }
  }> | null>(null)

  const { data: contract, isLoading } = Api.contract.findUnique.useQuery({
    where: { id: params.contractId },
    include: { clauses: { include: { contract: true } } },
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
                    style={{ backgroundColor: 'yellow', cursor: 'pointer' }}
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

        {selectedClause && (
          <Card
            title={
              <Space>
                <InfoCircleOutlined />
                <Text strong>Clause Analysis</Text>
              </Space>
            }
          >
            <Paragraph>{selectedClause.content}</Paragraph>
            <Paragraph>
              <Text strong>AI Analysis:</Text> {selectedClause.aiAnalysis}
            </Paragraph>
          </Card>
        )}
      </Space>
    </PageLayout>
  )
}
