import { HTMLAttributes } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircleFilled } from '@ant-design/icons'
import { Card, Col, Flex, Row, Typography } from 'antd'
import { DesignSystemUtility } from '../helpers/utility'
import LandingButton from './LandingButton'

import { Api } from '@/core/trpc/internal/trpc.client'
import { Product } from '@/server/libraries/payment/payment.type'

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle: string
}

export const LandingPricing: React.FC<Props> = ({
  title,
  subtitle,
  className,
  ...props
}) => {
  const router = useRouter()

  const { data: products = [], isLoading: isLoadingProducts } = Api.billing.findManyProducts.useQuery({}, { initialData: [] })

  const handlePricingCardClick = () => {
    router.push('/pricing')
  }

  return (
    <section
      className={DesignSystemUtility.buildClassNames('py-16 px-5', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto relative group overflow-hidden text-center">
        <div className="mt-16 md:mt-0">
          <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            {title}
          </h2>
          <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
          {products.map((product, idx) => (
            <PricingCard key={idx + 'pricingcard'} product={product} handleClick={handlePricingCardClick} />
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingCard = ({ product, handleClick }: { product: Product, handleClick : () => void }) => {
  const { id, name, price, interval, description, metadata, coverUrl } = product

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col key={id} xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: 'flex' }}>
        <Card className={`flex flex-col w-full order-first lg:order-none border relative rounded-lg ${name === 'Pro' ? 'border-orange-500 ' : 'border-slate-400 '
          }`} hoverable style={{ flex: 1, display: 'flex', flexDirection: 'column' }} onClick={handleClick}>
          {name === 'Pro' && (
            <span className="inline-flex absolute px-3 py-1 text-xs -top-3 left-1/2 -translate-x-1/2 font-medium rounded-full bg-orange-500 text-white ">
              Popular
            </span>
          )}
          <Flex className="product-image-container">
            <img className="product-image rounded-lg" src={coverUrl} alt={name} />
          </Flex>

          <Flex vertical gap={10} className="flex-1" style={{ marginTop: '1rem' }}>
            <Flex justify="space-between" align="center" wrap="wrap">
              <Typography.Title level={3} style={{ margin: 0, color: '#8BA5B6' }}>
                {name}
              </Typography.Title>
            </Flex>
          </Flex>

          <Flex align="center">
            <Typography.Title level={1} style={{ margin: 0 }}>
              ${price}
            </Typography.Title>
            <Typography.Text className="ml-1 text-slate-400" >/ {interval}</Typography.Text>
          </Flex>

          <Typography.Text className="text-muted text-slate-400">{description}</Typography.Text>

          <ul className="feature-list" style={{ marginTop: '0.5rem' }}>
            {metadata.features.split(',').map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-400 dark:text-slate-400" style={{ margin: '0.2rem 0.2rem 0 0' }}>
                <CheckCircleFilled className="w-6 h-6" />
                <span style={{ textAlign: 'left' }}>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex mt-8">
            <LandingButton
              href={'/pricing'}
              block
              type={name === 'Pro' ? 'primary' : 'outline'}
            >
              {'Get Started'}
            </LandingButton>
          </div>
        </Card>
      </Col>
    </Row>
  )
}
