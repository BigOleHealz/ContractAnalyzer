import dotenv from 'dotenv';
dotenv.config();

console.log('NODE_ENV:', process.env.NODE_ENV);

const isDevelopment = () => process.env.NODE_ENV === 'development'
const isProduction = () => process.env.NODE_ENV === 'production'


const getBaseUrl = () => {
  const isServer = typeof window !== 'undefined'
  const baseUrl = process.env.NEXTAUTH_URL
  const port = process.env.PORT ?? 3000


  if (isServer) {
    return ''
  }

  if (baseUrl) {
    if (baseUrl.startsWith('http')) {
      return baseUrl
    } else {
      return `https://${baseUrl}`
    }
  }

  return `http://localhost:${port}`
}

const getAuthenticationSecret = () => {
  return process.env.NEXTAUTH_SECRET
}

export const Configuration = {
  isDevelopment,
  isProduction,
  getBaseUrl,
  getAuthenticationSecret,
}
