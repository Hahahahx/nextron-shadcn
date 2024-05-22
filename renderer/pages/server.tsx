import React from 'react'
import Head from 'next/head' 

import { ServerPage } from '../components/serverPage'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-chakra-ui)</title>
      </Head>
      <ServerPage />
    </React.Fragment>
  )
}
