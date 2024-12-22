//this is the file which is basically the root file which is used when we want that 
import React from 'react'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'//this is a facility given by react-router  jo use karte hai ki agar hume koi 
//component as its rakhna hai aur middle part change karna to usse outlet use karte hai
import Footer from './components/Footer/Footer'
function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
