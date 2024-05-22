import Head from 'next/head'
import React from 'react'

import { FileListPage } from '@/components/fileListPage'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-chakra-ui)</title>
      </Head>
      <FileListPage />
    </React.Fragment>
  )
}
