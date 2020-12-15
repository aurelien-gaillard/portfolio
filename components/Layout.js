import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Aurelien Gaillard Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  )
}

export default Layout
