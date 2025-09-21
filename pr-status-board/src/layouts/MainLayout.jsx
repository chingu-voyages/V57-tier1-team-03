import {Outlet} from 'react-router-dom'
import Header from '../components/Navigation/Header'
import Footer from '../components/Navigation/Footer'
import React from 'react'

const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}

export default MainLayout