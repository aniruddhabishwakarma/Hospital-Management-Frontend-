import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/navbar/Header'
import Footer from '../components/footer/Footer'
import './layout.css'

const Layout = () => {
  return (
    <>
        <Header/>
        <div className = "outlet">
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout