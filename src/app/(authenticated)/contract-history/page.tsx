'use client'

import { Typography, List, Space, Card } from 'antd'
import { FileTextOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContractHistoryPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: contracts, isLoading } = Api.contract.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
    include: { clauses: true },
  })

  const handleViewContract = (contractId: string) => {
    router.push(`/analysis-results?contractId=${contractId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Contract History</Title>
        <Text>View and access your previously analyzed contracts.</Text>

        {isLoading ? (
          <Text>Loading contracts...</Text>
        ) : (
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
            dataSource={contracts}
            renderItem={contract => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => handleViewContract(contract.id)}
                  actions={[
                    <Space
                      key="view"
                      onClick={() => handleViewContract(contract.id)}
                    >
                      <EyeOutlined /> View Results
                    </Space>,
                  ]}
                >
                  <Card.Meta
                    avatar={<FileTextOutlined style={{ fontSize: '24px' }} />}
                    title={`Contract ${contract.id.slice(0, 8)}`}
                    description={
                      <Space direction="vertical">
                        <Text>
                          Date:{' '}
                          {dayjs(contract.dateCreated).format('MMMM D, YYYY')}
                        </Text>
                        <Text>Clauses: {contract.clauses?.length || 0}</Text>
                      </Space>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
