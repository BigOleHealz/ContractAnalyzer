'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { FileTextOutlined, UploadOutlined } from '@ant-design/icons'
import { Clause } from '@prisma/client'
import { Button, Input, Space, Spin, Typography, Upload } from 'antd'
import { useSnackbar } from 'notistack'
import { useMemo, useState } from 'react'
import { Utility } from '@/core/helpers/utility'
import { useRouter } from 'next/navigation'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function UploadContractPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [isProcessing, setIsProcessing] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [rawText, setRawText] = useState('')
  const isFreeUsageUsed = user?.freeUsageUsed || false

  const currentDate = useMemo(() => new Date(), [])

  const { mutateAsync: createContract } = Api.contract.create.useMutation()
  const { mutateAsync: updateContract } = Api.contract.update.useMutation()
  const { mutateAsync: createManyClauses } = Api.clause.createMany.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  // Fetch active subscriptions
  const { data: subscriptions = [] } = Api.billing.findManySubscriptions.useQuery(
    {
      where: {
        userId: user?.id,
        dateExpired: { gt: currentDate },
        status: 'active'
      }
    },
    { initialData: [] }
  )

  // Fetch products tied to active subscriptions
  const { data: products = [] } = Api.billing.findManyProducts.useQuery(
    {
      where: { id: { in: subscriptions.map(sub => sub.productId) } }
    },
    { initialData: [] }
  )

  // Derive the product with the most monthly uploads
  const productSubscription = useMemo(() => {
    if (!subscriptions.length || !products.length) return null

    const subscribedProducts = products.filter(product =>
      subscriptions.some(sub => sub.productId === product.id)
    )

    if (!subscribedProducts.length) return null

    // Find product with the highest `monthly_uploads`
    const productWithMaxUploads = subscribedProducts.reduce((maxProduct, currentProduct) =>
      currentProduct.metadata.monthly_uploads > maxProduct.metadata.monthly_uploads
        ? currentProduct
        : maxProduct
    )

    const matchingSubscription = subscriptions.find(sub => sub.productId === productWithMaxUploads.id)

    return {
      product: productWithMaxUploads,
      subscription: matchingSubscription
    }
  }, [products, subscriptions])

  // Fetch the number of contracts created in the current subscription period
  const { data: contractsList = [] } = Api.contract.findMany.useQuery(
    productSubscription
      ? {
        where: {
          userId: user?.id,
          dateCreated: { gte: new Date(productSubscription.subscription.currentPeriodStart) },
          status: 'completed'
        }
      }
      : undefined,
    { enabled: true }
  )

  // Compute remaining monthly uploads
  const monthlyUploadsLeft = useMemo(() => {
    if (!productSubscription) return 0
    const freeUsage = isFreeUsageUsed ? 0 : 1
    return parseInt(productSubscription.product.metadata.monthly_uploads) + freeUsage - contractsList.length
  }, [productSubscription, contractsList, isFreeUsageUsed])


  const extractTextFromPdf = async (file: File) => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${process.env.NEXT_PUBLIC_MICROSERVICE_URL}/extract-text`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Failed to extract text')

      const data = await response.json()
      return data.text
    } catch (error) {
      console.error('Error extracting text from PDF:', error)
      enqueueSnackbar('Error extracting text from PDF', { variant: 'error' })
      return null
    }
  }

  const analyzeText = async (text: string) => {
    try {
      const { analysis } = await generateText({
        prompt: `Analyze the following contract and return the result as a JSON array. 
          Each object in the array should represent a clause with the following fields: 
          - **content**
          - **isImportant**
          - **aiAnalysis**
          
          Highlight the notable clauses and risks:
          \`${text}\`.

          Translate the legal jargon into verbiage that a regular person can understand.`
      })

      return JSON.parse(Utility.removeJsonTags(analysis))
    } catch (error) {
      console.error('Error analyzing contract:', error)
      enqueueSnackbar('Error analyzing contract', { variant: 'error' })
      return null
    }
  }

  const handleFileChange = async (file: File) => {
    setFile(file)
    enqueueSnackbar('File uploaded successfully', { variant: 'success' })
  }

  const handleSubmit = async () => {
    if (!user?.id) return enqueueSnackbar('User not authenticated', { variant: 'error' })
    if (!file && !rawText) return enqueueSnackbar('Please upload a file or enter text', { variant: 'error' })
    if (monthlyUploadsLeft <= 0 && user?.globalRole !== 'ADMIN') {
      return enqueueSnackbar('You have used your monthly usage limit. Upgrade your plan.', { variant: 'error' })
    }

    setIsProcessing(true)

    try {
      let contentToAnalyze = rawText
      if (file) {
        contentToAnalyze = await extractTextFromPdf(file)
        if (!contentToAnalyze) throw new Error('Text extraction failed')
      }

      // Create contract entry in DB
      const contract = await createContract({
        data: {
          userId: user.id,
          fileUrl: file?.name || undefined,
          content: contentToAnalyze || undefined,
          status: 'pending'
        }
      })
      enqueueSnackbar('Contract submitted for analysis', { variant: 'success' })

      const clauses = await analyzeText(contentToAnalyze)
      if (!clauses) throw new Error('Analysis failed')

      await createManyClauses({
        data: clauses.map((clause: Clause) => ({ ...clause, contractId: contract.id }))
      })

      // Update contract status
      await updateContract({ where: { id: contract.id }, data: { status: 'completed' } })
      await updateUser({ where: { id: user.id }, data: { freeUsageUsed: true } })

      router.push(`/analysis-results?contractId=${contract.id}`)
    } catch (error) {
      console.error('Error submitting contract', error)
      enqueueSnackbar('Error submitting contract', { variant: 'error' })
    } finally {
      setIsProcessing(false)
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

        <Paragraph>
          You have {monthlyUploadsLeft} uploads left this month.
        </Paragraph>

        {isFreeUsageUsed && !productSubscription && (
          <Paragraph className='text-red-500 font-bold'>
            You have used your free usage limit. Please upgrade your plan to continue.
          </Paragraph>
        )}

        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Upload
            accept=".pdf"
            beforeUpload={file => {
              handleFileChange(file)
              return false
            }}
            fileList={file ? [{ uid: '-1', name: file.name, status: 'done', url: file.name }] : []}
          >
            <Button icon={<UploadOutlined />}>Click to Upload PDF</Button>
          </Upload>

          <Paragraph>Or</Paragraph>

          <TextArea
            rows={6}
            placeholder="Enter raw contract text here"
            value={rawText}
            onChange={e => setRawText(e.target.value)}
            disabled={!!file}
          />

          <Button type="primary" icon={<FileTextOutlined />} onClick={handleSubmit} disabled={!file && !rawText}>
            Submit for Analysis
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}