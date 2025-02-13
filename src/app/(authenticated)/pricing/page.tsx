'use client'

import { Button, Card, Col, Empty, Flex, Row, Spin, Tag, Typography } from 'antd'

import { Api } from '@/core/trpc/internal/trpc.client'
import { PageLayout } from '@/designSystem'
import { Product, Subscription } from '@/server/libraries/payment/payment.type'
import { useEffect, useState } from 'react'

export default function PricingPage() {
  const [subscriptionsFiltered, setSubscriptionsFiltered] = useState<Subscription[]>([])

  const { data: products = [], isLoading: isLoadingProducts } = Api.billing.findManyProducts.useQuery({}, { initialData: [] })
  const { mutateAsync: createPaymentLink } = Api.billing.createPaymentLink.useMutation()
  const { data: subscriptions = [] } = Api.billing.findManySubscriptions.useQuery({}, { initialData: [] })

  const handleClick = async (product: Product) => {
    const { url } = await createPaymentLink({ productId: product.id })
    window.open(url, '_blank')
  }

  const handleCancelSubscription = async () => {
    // Logic to cancel the subscription
    console.log('Cancel subscription logic goes here')
  }

  const getPrice = (product: Product) => {
    if (product.price === 0) {
      return 'Free'
    }

    const mapping = {
      usd: '${{price}}',
    }

    const pattern = mapping[product.currency]

    if (pattern) {
      return pattern.replace('{{price}}', product.price)
    }

    return `${product.currency.toUpperCase()} ${product.price}`
  }

  const isSubscribed = (product: Product) => {
    return subscriptions.some(
      (subscription) => subscription.productId === product.id
    )
  }

  useEffect(() => {
    const currentDate = new Date()
    const subscriptionsFiltered = subscriptions.filter(subscription => new Date(subscription.dateExpired) > currentDate)
    setSubscriptionsFiltered(subscriptionsFiltered)
  }, [subscriptions])

  return (
    <PageLayout isCentered>
      <Row gutter={[16, 16]} justify="center">
        {products.length === 0 && isLoadingProducts && <Spin />}

        {products.length === 0 && !isLoadingProducts && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No products found on Stripe"
          />
        )}

        {products.length > 0 && products.map((product) => (
          <Col key={product.id} xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card
              style={{ height: '100%', overflow: 'hidden' }}
              hoverable
              onClick={() => handleClick(product)}
              cover={
                <Flex
                  style={{
                    position: 'relative',
                    height: '40vh',
                    width: '100%',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                >
                  <img
                    src={product.coverUrl}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Flex>
              }
            >
              <Flex vertical gap={10}>
                <Typography.Title level={3} style={{ margin: 0 }}>
                  {product.name}
                </Typography.Title>
              </Flex>

              <Flex align="center">
                <Typography.Title level={1} style={{ margin: 0 }}>
                  {getPrice(product)}
                </Typography.Title>
                {product.interval && (
                  <Typography.Text className="ml-1">
                    / {product.interval}
                  </Typography.Text>
                )}
              </Flex>

              {isSubscribed(product) && (
                <div>
                  <Tag color="success">Active</Tag>
                </div>
              )}

              <Typography.Text type="secondary">
                {product.description}
              </Typography.Text>

              {/* <ul className="grid mt-8 text-left gap-y-4">
                {product.features.map((item, idx) => (
                  <li
                    key={idx + 'pricingfeature'}
                    className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircleFilled className="w-6 h-6" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul> */}
            </Card>
          </Col>
        ))}
        {subscriptionsFiltered.length > 0 && (
          <Flex justify="start">
            <Button
              type="primary"
              onClick={handleCancelSubscription}
              style={{
                backgroundColor: 'transparent',
                color: 'red',
                borderColor: 'red',
              }}
            >
              Cancel my subscription
            </Button>
          </Flex>
        )}
      </Row>
    </PageLayout>
  )
}
