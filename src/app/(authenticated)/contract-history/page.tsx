'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { EyeOutlined, FileTextOutlined } from '@ant-design/icons'
import { Card, List, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
const { Title, Text } = Typography

export default function ContractHistoryPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: contracts, isLoading } = Api.contract.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
    select: {
      id: true,
      fileUrl: true,
      clauses: true,
      dateCreated: true,
    },
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
                    title={`Contract ${contract.fileUrl}`}
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
