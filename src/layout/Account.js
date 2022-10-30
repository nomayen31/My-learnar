import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Menubar from '../components/common/Menubar'

const Account = () => {
    return (
        <>
            <Menubar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Account