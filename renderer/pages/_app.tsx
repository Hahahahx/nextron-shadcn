import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/lib/theme'
import { AppProps } from 'next/app'
import { AppLayout } from '@/components/appLayout'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  )
}

export default MyApp
