'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { FileTextOutlined, UploadOutlined } from '@ant-design/icons'
import { Clause, Contract } from '@prisma/client'
import { Button, Input, Modal, Space, Typography, Upload, Progress } from 'antd'
import { useSnackbar } from 'notistack'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const { Title, Paragraph } = Typography
const { TextArea } = Input

type ContractInput = {
  userId: string
  fileUrl: string
  content?: string | null
  status: string
}

export default function UploadContractPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [file, setFile] = useState<File | null>(null)
  const [rawText, setRawText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const isFreeUsageUsed = user?.freeUsageUsed || false

  const [transactionState, setTransactionState] = useState({
    creatingContract: false,
    waitingForApiResponse: false,
    creatingClauses: false,
    updatingContract: false,
    updatingUser: false,
  });

  const currentDate = useMemo(() => new Date(), [])

  const { mutateAsync: createContract } = Api.contract.create.useMutation()
  const { mutateAsync: updateContract } = Api.contract.update.useMutation()
  const { mutateAsync: createManyClauses } = Api.clause.createMany.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

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
    if (!subscriptions.length || !products.length) {
      return null
    }

    const subscribedProducts = products.filter(product =>
      subscriptions.some(sub => sub.productId === product.id)
    )

    if (!subscribedProducts.length) {
      return null
    }

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
    { enabled: !!productSubscription }
  )

  // Compute remaining monthly uploads
  const monthlyUploadsLeft = useMemo(() => {
    const freeUsage = isFreeUsageUsed ? 0 : 1
    if (!productSubscription) {
      return freeUsage
    }
    return parseInt(productSubscription.product.metadata.monthly_uploads, 10) + freeUsage - contractsList.length
  }, [productSubscription, contractsList, isFreeUsageUsed])

  const isProcessing = useMemo(() => {
    return Object.values(transactionState).some(state => state);
  }, [transactionState]);


  const handleFileChange = async (file: File) => {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      enqueueSnackbar('File size must be less than 5MB', { variant: 'error' });
      return false;
    }
    setFile(file)
    enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    return true;
  }

  async function withTransactionState<T>(
    stateKey: keyof typeof transactionState,
    asyncOperation: () => Promise<T>
  ): Promise<T | null> {
    setTransactionState(prev => ({ ...prev, [stateKey]: true }));
    try {
      return await asyncOperation();
    } finally {
      setTransactionState(prev => ({ ...prev, [stateKey]: false }));
    } 
  }

  async function createContractWithState(contract: ContractInput) {
    return withTransactionState('creatingContract', async () => {
      const contractInfo = await createContract({ data: contract });
      enqueueSnackbar('Contract submitted for analysis', { variant: 'success' });
      return contractInfo;
    });
  }

  async function submitApiRequestWithState(prompt: string, file?: File) {
    setTransactionState(prevState => ({ ...prevState, waitingForApiResponse: true }));
    enqueueSnackbar('Analyzing contract...', { variant: 'info' })

    const formData = new FormData()
    formData.append('prompt', prompt)

    let apiEndpoint;
    if (file) {
      formData.append('file', file)
      apiEndpoint = '/api/gemini/file'
    } else {
      apiEndpoint = '/api/gemini/text'
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Data: ", data);
      return { success: true, payload: data.clauses };
    } catch (error) {
      console.error("Error submitting contract", error);
      return { success: false, payload: error.message };
    } finally {
      setTransactionState(prevState => ({ ...prevState, waitingForApiResponse: false }));
    }
  }

  // Function to create clauses and update state
  async function createClausesWithState(contractId: string, clauses: Clause[]) {
    return withTransactionState('creatingClauses', async () => {
      await createManyClauses({
        data: clauses.map((clause: Clause) => ({ ...clause, contractId: contractId }))
      });
    });
  }

  // Function to update contract and update state
  async function updateContractWithState(contractId: string) {
    return withTransactionState('updatingContract', async () => {
      await updateContract({ where: { id: contractId }, data: { status: 'completed' } });
    });
  }

  // Function to update user and update state
  async function updateUserWithState(userId: string) {
    return withTransactionState('updatingUser', async () => {
      await updateUser({ where: { id: userId }, data: { freeUsageUsed: true } });
    });
  }

  const calculateProgress = () => {
    const states = Object.values(transactionState);
    const activeStates = states.filter(state => state).length;
    return (activeStates / states.length) * 100;
  };

  const uploadRawText = async (text: string) => {
    try {
      // **Step 1: Create contract entry in DB**
      const contract = await createContractWithState({
        userId: user.id,
        fileUrl: undefined,
        content: rawText,
        status: 'pending'
      });

      // **Step 2: Submit the contract for AI processing**
      const prompt = `
        Analyze the following contract and return the result as a JSON array.
        
        Each object in the array should represent a clause with the following fields:
        - content
        - isImportant
        - aiAnalysis
        
        Highlight the notable clauses and risks: \`${text}\`.
      
        Translate the legal jargon into verbiage that a regular person can understand.
      `
      const response = await submitApiRequestWithState(prompt, undefined);

      if (!response.success) {
        enqueueSnackbar(`Error processing contract with AI: ${response.payload}`, { variant: 'error' })
        return null
      }
      const clauses = response.payload

      // **Step 3: Create clauses in DB**
      await createClausesWithState(contract.id, clauses)

      // **Step 4: Update contract status in DB**
      await updateContractWithState(contract.id)

      // **Step 5: Update user's free usage limit in DB**
      await updateUserWithState(user.id)

      router.push(`/analysis-results?contractId=${contract.id}`);

    } catch (error) {
      console.error('Error processing contract with AI:', error)
      enqueueSnackbar('Error processing contract with AI', { variant: 'error' })
      return null
    }
  }

  const uploadFile = async (file: File) => {
    try {
      // **Step 1: Create contract entry in DB**
      const contract = await createContractWithState({
        userId: user.id,
        fileUrl: file?.name || undefined,
        status: 'pending'
      });

      // **Step 2: Submit the file for AI processing**
      const prompt = `Analyze the attached contract and return the result as a JSON array. 
        Each object in the array should represent a clause with:
        - **content**
        - **isImportant**
        - **aiAnalysis**
        
        Highlight notable clauses and risks.

        Keep the clauses to a maximum of 3 sentences each.
        
        Translate legal jargon into easy-to-understand language.
      `
      const response = await submitApiRequestWithState(prompt, file);

      console.log("Response: ", response);

      if (!response.success) {
        enqueueSnackbar(`Error processing contract with AI: ${response.payload}`, { variant: 'error' })
        return null
      }
      const clauses = response.payload

      // **Step 3: Create clauses in DB**
      await createClausesWithState(contract.id, clauses)

      // **Step 4: Update contract status in DB**
      await updateContractWithState(contract.id)

      // **Step 5: Update user's free usage limit in DB**
      await updateUserWithState(user.id)

      router.push(`/analysis-results?contractId=${contract.id}`);
    } catch (error) {
      console.error('Error processing file with Gemini:', error)
      enqueueSnackbar('Error processing contract with AI', { variant: 'error' })
      return null
    }
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }


  function handleContractUpload() {
    if (!user?.id) {
      return enqueueSnackbar('User not authenticated', { variant: 'error' });
    }
    if (monthlyUploadsLeft <= 0 && user?.globalRole !== 'ADMIN') {
      setIsModalVisible(true)
      return enqueueSnackbar('You have used your monthly usage limit. Upgrade your plan.', { variant: 'error' });
    }

    if (file) {
      uploadFile(file)
    } else if (rawText) {
      uploadRawText(rawText)
    }
  }


  return (
    <PageLayout layout="narrow">
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

        {isProcessing && (
          <Progress
            percent={calculateProgress()}
            status='active'
            strokeColor={{
              from: '#108ee9',
              to: '#87d068',
            }}
          />
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

          <Button
            type="primary"
            icon={<FileTextOutlined />}
            onClick={handleContractUpload}
            disabled={!file && !rawText}
          >
            Submit for Analysis
          </Button>
        </Space>
      </Space>
      <Modal
        title="Subscription Required"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={500}
        centered
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="upgrade" type="primary" href="/pricing">
            Upgrade Plan
          </Button>
        ]}
      >
        <Space direction="vertical" size="middle">
          <Typography.Title level={5} style={{ margin: '1rem 0 0 0' }}>
            You've reached your monthly limit
          </Typography.Title>
          <Paragraph style={{ margin: 0 }}>
          <Link href="/pricing">Upgrade your plan</Link> to analyze more contracts and unlock additional features.
          </Paragraph>
        </Space>
      </Modal>
    </PageLayout>
  )
}
