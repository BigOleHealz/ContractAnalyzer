'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { FileTextOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Input, Space, Typography, Upload } from 'antd'
import { useSnackbar } from 'notistack'
import { useState } from 'react'


const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function UploadContractPage() {
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [file, setFile] = useState<File | null>(null)
  const [rawText, setRawText] = useState<string>('')

  const { mutateAsync: createContract } = Api.contract.create.useMutation()

  const handleFileUpload = async (file: File) => {
    try {
      setFile(file)

      enqueueSnackbar('File uploaded and text extracted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error extracting text from PDF', { variant: 'error' })
    }
  }

  const handleSubmit = async () => {
    if (!user?.id) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      return
    }

    if (!file && !rawText) {
      enqueueSnackbar('Please upload a file or enter raw text', { variant: 'error' })
      return
    }

    try {
      await createContract({
        data: {
          userId: user.id,
          fileUrl: file?.name || undefined,
          content: rawText || undefined,
          status: 'pending',
        },
      })
      enqueueSnackbar('Contract submitted for analysis', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error submitting contract', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Upload Contract for Analysis</Title>
        <Paragraph>Upload a PDF contract file or input raw text to have it analyzed for important clauses.</Paragraph>

        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Upload
            accept=".pdf"
            beforeUpload={file => {
              handleFileUpload(file)
              return false
            }}
            fileList={file ? [{ uid: '-1', name: file.name, status: 'done', url: file.name }] : []}
          >
            <Button icon={<UploadOutlined />}>
              Click to Upload PDF
            </Button>
          </Upload>

          <Paragraph>Or</Paragraph>

          <TextArea rows={6} placeholder="Enter raw contract text here" value={rawText} onChange={e => setRawText(e.target.value)} disabled={!file} />

          <Button type="primary" icon={<FileTextOutlined />} onClick={handleSubmit} disabled={(!file && !rawText)}>
            Submit for Analysis
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}