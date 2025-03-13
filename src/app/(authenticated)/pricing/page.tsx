'use client'

import { useUserContext } from '@/core/context'
import { Button, Card, Col, Empty, Flex, Row, Spin, Tag, Typography } from 'antd'

import { Api } from '@/core/trpc/internal/trpc.client'
import { PageLayout } from '@/designSystem'
import { Product, Subscription } from '@/server/libraries/payment/payment.type'
import { CheckCircleFilled } from '@ant-design/icons'
import { enqueueSnackbar } from 'notistack'
import { useMemo } from 'react'

export default function PricingPage() {
  const { user } = useUserContext()

  

  const currentDate = useMemo(() => new Date(), [])

  const { data: products = [], isLoading: isLoadingProducts } = Api.billing.findManyProducts.useQuery({}, { initialData: [] })
  const { mutateAsync: createPaymentLink } = Api.billing.createPaymentLink.useMutation()
  const { mutateAsync: cancelSubscription } = Api.billing.cancelSubscriptionAtPeriodEnd.useMutation()
  const { data: subscriptions = [] } = Api.billing.findManySubscriptions.useQuery({
    where: {
      userId: user?.id,
      dateExpired: { gt: currentDate },
      status: 'active'
    },
  }, { initialData: [] })

  // Check if the user is subscribed to a product
  const isSubscribed = (product: Product) => subscriptions.some(sub => sub.productId === product.id)

  // Handle new subscription
  const handleSubscribe = async (product: Product) => {
    if (isSubscribed(product)) {
      enqueueSnackbar('You are already subscribed to this product', { variant: 'warning' })
      return
    }

    try {
      const { url } = await createPaymentLink({ productId: product.id })
      window.open(url, '_blank')
    } catch (error) {
      enqueueSnackbar('Failed to create payment link', { variant: 'error' })
    }
  }

  // Handle cancel subscription
  const handleCancelSubscription = async (subscription: Subscription) => {
    try {
      if (subscription.cancelAtPeriodEnd) {
        enqueueSnackbar('Subscription already canceled', { variant: 'warning' })
        return
      }

      await cancelSubscription({ subscriptionId: subscription.subscriptionId })
      enqueueSnackbar('Subscription canceled', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error canceling subscription', { variant: 'error' })
    }
  }

  return (
    <PageLayout isCentered layout="mid-narrow">
      <Row gutter={[16, 16]} justify="center">
        {isLoadingProducts ? <Spin /> : products.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No products found on Stripe" />
        ) : (
          products.map((product) => (
            <Col key={product.id} xs={24} sm={24} md={8} lg={8} xl={8} style={{ display: 'flex' }}>
              <Card className="product-card" hoverable onClick={() => handleSubscribe(product)} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Flex className="product-image-container">
                  <img className="product-image" src={product.coverUrl} alt={product.name} />
                </Flex>

                <Flex vertical gap={10} className="flex-1" style={{ marginTop: '1rem' }}>
                  <Flex justify="space-between" align="center" wrap="wrap">
                    <Typography.Title level={3} style={{ margin: 0, color: '#8BA5B6' }}>
                      {product.name}
                    </Typography.Title>
                    {isSubscribed(product) && (
                      <Tag color={subscriptions.find(sub => sub.productId === product.id)?.cancelAtPeriodEnd ? "warning" : "success"}>
                        {subscriptions.find(sub => sub.productId === product.id)?.cancelAtPeriodEnd ?
                          "Will cancel on: " + new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(subscriptions.find(sub => sub.productId === product.id)?.cancelAt))
                          : "Active"}
                      </Tag>
                    )}
                  </Flex>
                </Flex>

                <Flex align="center">
                  <Typography.Title level={1} style={{ margin: 0 }}>
                    ${product.price}
                  </Typography.Title>
                  <Typography.Text className="ml-1 text-slate-400" >/ {product.interval}</Typography.Text>
                </Flex>

                <Typography.Text className="text-muted text-slate-400">{product.description}</Typography.Text>

                <ul className="feature-list" style={{ marginTop: '0.5rem' }}>
                  {product.metadata.features.split(',').map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 dark:text-slate-400">
                      <CheckCircleFilled className="w-6 h-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {isSubscribed(product) && !subscriptions.find(sub => sub.productId === product.id)?.cancelAtPeriodEnd && (
                  <Flex justify="center" align="center" className="mt-4" style={{ zIndex: 1000 }}>
                    <Button className="cancel-button" onClick={(event) => {
                      event.stopPropagation()
                      handleCancelSubscription(subscriptions.find(sub => sub.productId === product.id)!)
                    }
                    }>
                      Cancel my subscription
                    </Button>
                  </Flex>
                )}
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
