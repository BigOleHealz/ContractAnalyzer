'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { FileTextOutlined, UploadOutlined } from '@ant-design/icons'
import { Clause } from '@prisma/client'
import { Button, Input, Space, Spin, Typography, Upload } from 'antd'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

import { Utility } from '@/core/helpers/utility'
import { useRouter } from 'next/navigation'

const { Title, Paragraph } = Typography
const { TextArea } = Input


export default function UploadContractPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)
  const [rawText, setRawText] = useState<string>('')

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()
  const { mutateAsync: createContract } = Api.contract.create.useMutation()
  const { mutateAsync: updateContract } = Api.contract.update.useMutation()
  const { mutateAsync: createManyClauses } = Api.clause.createMany.useMutation()

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

    setIsProcessing(true)

    try {
      const contract = await createContract({
        data: {
          userId: user.id,
          fileUrl: file?.name || undefined,
          content: rawText || undefined,
          status: 'pending',
        },
      })
      enqueueSnackbar('Contract submitted for analysis', { variant: 'success' })

      // Send the rawText to OpenAI API
      if (rawText) {
        const prompt = `Analyze the following contract and return the result as a JSON array. Each object in the array should represent a clause with the following fields: content, isImportant, and aiAnalysis. Highlight the notable clauses and risks: \`${rawText}\`.
                        Translate the legal jargon into verbiage that a regular person can understand.`
        const { analysis } = await generateText({
          prompt: prompt,
        })
        const formattedAnalysisResult = Utility.removeJsonTags(analysis);
        const clauses = JSON.parse(formattedAnalysisResult)

        // Insert clauses into the database
        await createManyClauses({
          data: (clauses as Clause[]).map((clause: Clause) => ({
            ...clause,
            contractId: contract.id,
          })),
        })

        // Update the contract status to completed
        await updateContract({
          where: { id: contract.id },
          data: {
            status: 'completed',
          },
        })

        setIsProcessing(false)
        router.push(`/analysis-results?contractId=${contract.id}`)
      }

    } catch (error) {
      console.error('Error submitting contract', error)
      setIsProcessing(false)
      enqueueSnackbar('Error submitting contract', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      {isProcessing && (
        <Spin size="large" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }} />
      )}
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

          <TextArea rows={6} placeholder="Enter raw contract text here" value={rawText} onChange={e => setRawText(e.target.value)} disabled={file !== null} />

          <Button type="primary" icon={<FileTextOutlined />} onClick={handleSubmit} disabled={(!file && !rawText)}>
            Submit for Analysis
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}
