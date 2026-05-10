import React from 'react'
import Navbar from './Components.jsx/Navbar.jsx'
import Footer from './Components.jsx/Footer.jsx'
import HomePage from './Pages.jsx/HomePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './Components.jsx/AboutPage.jsx'
import ShopPage from './Pages.jsx/ShopPage.jsx'
import FeaturePage from './Pages.jsx/FeaturePage.jsx'
import FaqPage from './Pages.jsx/FaqPage.jsx'
import ContactUsPage from './Pages.jsx/ContactUsPage.jsx'
import ErrorPage from './Pages.jsx/ErrorPage.jsx'
import PrivacyPolicy from './Pages.jsx/PrivacyPolicy.jsx'
import TestimonialPage from './Pages.jsx/TestimonialPage.jsx'

export default function App(){

    return(
        <>
        <BrowserRouter>
           <Navbar />
         <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/features' element={<FeaturePage/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
           <Route path='/testimonial'element={<TestimonialPage />}/>
          <Route path='/contactUs'element={<ContactUsPage />}/>
         <Route path='/privacy policy' element={<PrivacyPolicy />}/>

          <Route path='/*' element={<ErrorPage/>}/>
          
         </Routes>
         <Footer />
           </BrowserRouter>
       
        </>
    )
}
