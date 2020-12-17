import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Head>
        <title>Aurelien Gaillard Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
    </div>
  )
}

export default Layout
