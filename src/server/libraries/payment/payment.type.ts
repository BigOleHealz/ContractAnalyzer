import { Stripe as StripeSDK } from 'stripe'

export type Subscription = {
  subscriptionId: string
  productId: string
  cancelAt: string
  cancelAtPeriodEnd: boolean
  currentPeriodStart: number
  dateExpired: string
  status: string
}

export type Payment = {
  productId: string
  amount: number
  currency: string
  date: string
}

export enum ProductType {
  SUBSCRIPTION = 'SUBSCRIPTION',
  ONE_TIME = 'ONE_TIME',
}

export type Product = {
  id: string
  type: ProductType
  name: string
  price: number
  description: string
  interval?: string
  coverUrl?: string
  currency: string
  metadata: Record<string, string>
}

export type ProductFormatted = Product & {
  features: string[],
  highlight?: boolean
}

export type StripeWebhookResponse = {
  userId: string

  stripeCustomerId: string
  metadata: Record<string, string>
  customerDetails?: StripeSDK.Checkout.Session.CustomerDetails
}
