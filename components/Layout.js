import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Aurelien Gaillard Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
