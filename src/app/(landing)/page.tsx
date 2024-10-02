'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  ClockCircleOutlined,
  DollarOutlined,
  EditOutlined,
  FileSearchOutlined,
  SafetyOutlined,
  TeamOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Contract Analysis`,
      description: `Our advanced AI technology scans and interprets complex legal jargon, highlighting crucial clauses you need to be aware of.`,
      icon: <FileSearchOutlined />,
    },
    {
      heading: `User-Friendly Interface`,
      description: `Upload PDFs or paste text effortlessly. Get clear, concise summaries of important contract points in seconds.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Protection Against Hidden Clauses`,
      description: `Never miss a hidden fee or unfair term again. Our app flags potential issues, keeping you informed and protected.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Time-Saving Efficiency`,
      description: `Reduce contract review time from hours to minutes. Make informed decisions quickly and confidently.`,
      icon: <ClockCircleOutlined />,
    },
    {
      heading: `Cost-Effective Legal Aid`,
      description: `Get professional-level contract insights without the hefty lawyer fees. Perfect for individuals and small businesses.`,
      icon: <DollarOutlined />,
    },
    {
      heading: `Empowering Consumers and Freelancers`,
      description: `Level the playing field in negotiations. Understand your rights and obligations clearly before signing any agreement.`,
      icon: <TeamOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Freelance Graphic Designer`,
      content: `Contract Clarity App has been a game-changer for my freelance business. I used to spend hours deciphering client contracts, often missing important details. Now, I feel confident and protected with every agreement I sign.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Small Business Owner`,
      content: `As a small business owner, legal fees were always a concern. This app has saved me thousands in lawyer consultations. It's like having a legal advisor in my pocket!`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Recent College Graduate`,
      content: `When I got my first job offer, the contract was overwhelming. Contract Clarity App helped me understand my rights and even negotiate better terms. I'm so glad I found this before signing!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Real Estate Agent`,
      content: `In real estate, we deal with contracts daily. This app has streamlined my workflow and given me an edge in protecting my clients' interests. It's an essential tool in my business now.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Tech Startup Founder`,
      content: `As a startup founder, I've signed countless agreements with investors and partners. Contract Clarity App has been invaluable in helping me navigate complex terms and avoid potential pitfalls.`,
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      name: `John Doe`,
      designation: `Consumer Rights Advocate`,
      content: `I've recommended Contract Clarity App to countless individuals. It's empowering to see people take control of their legal agreements and make informed decisions. This is the future of consumer protection.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for individuals and freelancers`,
      monthly: 9,
      yearly: 99,
      features: [
        `10 contract analyses per month`,
        `Basic clause highlighting`,
        `24/7 customer support`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for small businesses and frequent users`,
      monthly: 29,
      yearly: 299,
      features: [
        `Unlimited contract analyses`,
        `Advanced clause interpretation`,
        `Custom alert settings`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for large organizations`,
      monthly: 99,
      yearly: 999,
      features: [
        `Unlimited analyses across teams`,
        `API access for integration`,
        `Dedicated account manager`,
        `Custom AI training`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How accurate is the AI in interpreting legal language?`,
      answer: `Our AI is trained on millions of legal documents and is constantly updated. While it's highly accurate, we always recommend consulting with a legal professional for critical decisions.`,
    },
    {
      question: `Is my data secure when I upload contracts?`,
      answer: `Absolutely. We use bank-level encryption to protect your data. Your documents are never stored permanently and are deleted after analysis.`,
    },
    {
      question: `Can I use this for any type of contract?`,
      answer: `Yes, our AI is trained on a wide variety of contract types, from employment agreements to real estate leases. However, for highly specialized contracts, additional review may be beneficial.`,
    },
    {
      question: `How does the pricing work for different plans?`,
      answer: `Our pricing is based on the number of contract analyses and additional features. You can choose between monthly or yearly billing, with significant savings on annual plans.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Upload Your Contract`,
      description: `Simply drag and drop your PDF or paste the contract text into our secure platform.`,
    },
    {
      heading: `AI Analysis`,
      description: `Our advanced AI scans the document, identifying key clauses and potential issues.`,
    },
    {
      heading: `Review Highlights`,
      description: `Receive a clear, easy-to-understand summary of important points and areas of concern.`,
    },
    {
      heading: `Make Informed Decisions`,
      description: `Use the insights to negotiate better terms or sign with confidence.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😕`,
      title: `Confusion: Faced with pages of legal jargon`,
    },
    {
      emoji: `😰`,
      title: `Anxiety: Unsure if you're missing important details`,
    },
    {
      emoji: `💸`,
      title: `Frustration: Unexpected fees or unfair terms after signing`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Demystify Legal Jargon, Empower Your Decisions`}
        subtitle={`Don't let complex contracts intimidate you. Our AI-powered app simplifies legal language, highlights key clauses, and gives you the confidence to sign or negotiate smarter.`}
        buttonText={`Start Analyzing for Free`}
        pictureurl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/lsB8Jc-contractanalyzer-VuOT`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`users protected from unfair terms`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Companies`}
      />
      <LandingPainPoints
        title={`91% of consumers don't read terms before agreeing. Don't be one of them.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Confusion to Clarity in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unlock the Power of Informed Decision-Making`}
        subtitle={`Our AI-driven features empower you to understand, negotiate, and sign contracts with confidence.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real People, Real Protection`}
        subtitle={`See how Contract Clarity App is changing the way people approach legal agreements.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Affordable Legal Protection for Everyone`}
        subtitle={`Choose the plan that fits your needs and budget. Start safeguarding your interests today.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how Contract Clarity App can protect you and your business.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Take Control of Your Contracts?`}
        subtitle={`Join thousands of empowered individuals and businesses. Start analyzing your first contract for free!`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
