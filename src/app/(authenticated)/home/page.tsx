'use client'

import { Typography, Button, Space, Card, Row, Col } from 'antd'
import {
  UploadOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const handleUploadContract = () => {
    router.push('/upload-contract')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Contract Analysis Service</Title>
        <Paragraph>
          Welcome to our Contract Analysis Service. This powerful tool helps you
          understand and evaluate your contracts quickly and efficiently.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Title level={4}>Service Overview</Title>
            <Paragraph>
              <InfoCircleOutlined /> Our AI-powered analysis provides:
            </Paragraph>
            <ul>
              <li>Identification of key clauses</li>
              <li>Risk assessment</li>
              <li>Compliance check</li>
              <li>Summary of important terms</li>
            </ul>
            <Paragraph>
              <strong>Note:</strong> While our service is highly accurate, it's
              recommended to use it as a supplementary tool and not as a
              replacement for professional legal advice.
            </Paragraph>
          </Space>
        </Card>

        <Title level={4}>Start Your Analysis</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card
              hoverable
              onClick={handleUploadContract}
              style={{ height: '100%' }}
            >
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%' }}
              >
                <UploadOutlined style={{ fontSize: '24px' }} />
                <Title level={5}>Upload Contract</Title>
                <Paragraph>Upload a PDF or Word document</Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card
              hoverable
              onClick={handleUploadContract}
              style={{ height: '100%' }}
            >
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%' }}
              >
                <FileTextOutlined style={{ fontSize: '24px' }} />
                <Title level={5}>Input Raw Text</Title>
                <Paragraph>Paste or type contract text</Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </Space>
    </PageLayout>
  )
}
