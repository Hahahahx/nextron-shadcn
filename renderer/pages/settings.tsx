import React from 'react'
import Head from 'next/head' 
import { SettingsPage } from '@/components/settingsPage'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-chakra-ui)</title>
      </Head>
      <SettingsPage />
    </React.Fragment>
  )
}
