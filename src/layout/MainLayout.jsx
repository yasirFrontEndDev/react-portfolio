import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../skeleton/Header';
import Footer from '../skeleton/Footer';
const MainLayout = () => {
  return (
    <>
    <div className='mainLayoutDiv'>
    <Header/>
      <div className='home-section'>
        <Outlet />
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default MainLayout;