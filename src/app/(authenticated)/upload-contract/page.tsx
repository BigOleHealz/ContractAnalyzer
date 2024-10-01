'use client'

import { useState } from 'react'
import { Typography, Upload, Input, Button, Space, Spin } from 'antd'
import { UploadOutlined, FileTextOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function UploadContractPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [rawText, setRawText] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createContract } = Api.contract.create.useMutation()

  const handleFileUpload = async (file: File) => {
    try {
      setIsLoading(true)
      const { url } = await uploadFile({ file })
      setFileUrl(url)
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error uploading file', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async () => {
    if (!user?.id) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      return
    }

    if (!fileUrl && !rawText) {
      enqueueSnackbar('Please upload a file or enter raw text', {
        variant: 'error',
      })
      return
    }

    try {
      setIsLoading(true)
      const newContract = await createContract({
        data: {
          userId: user.id,
          fileUrl: fileUrl || undefined,
          content: rawText || undefined,
          status: 'PENDING_ANALYSIS',
        },
      })
      enqueueSnackbar('Contract submitted for analysis', { variant: 'success' })
      router.push(`/analysis-results?contractId=${newContract.id}`)
    } catch (error) {
      enqueueSnackbar('Error submitting contract', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Upload Contract for Analysis</Title>
        <Paragraph>
          Upload a PDF contract file or input raw text to have it analyzed for
          important clauses.
        </Paragraph>

        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Upload
            accept=".pdf"
            beforeUpload={file => {
              handleFileUpload(file)
              return false
            }}
            fileList={
              fileUrl
                ? [
                    {
                      uid: '-1',
                      name: 'Contract.pdf',
                      status: 'done',
                      url: fileUrl,
                    },
                  ]
                : []
            }
          >
            <Button icon={<UploadOutlined />} disabled={isLoading}>
              Click to Upload PDF
            </Button>
          </Upload>

          <Paragraph>Or</Paragraph>

          <TextArea
            rows={6}
            placeholder="Enter raw contract text here"
            value={rawText}
            onChange={e => setRawText(e.target.value)}
            disabled={isLoading}
          />

          <Button
            type="primary"
            icon={<FileTextOutlined />}
            onClick={handleSubmit}
            disabled={isLoading || (!fileUrl && !rawText)}
          >
            {isLoading ? <Spin size="small" /> : 'Submit for Analysis'}
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}
