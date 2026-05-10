import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  let[showMenu,setShowMenu]=useState(false)
  let [settingData,SetSettingData]=useState({
    siteName:import.meta.env.VITE_APP_SITE_NAME,
    Facebook: import.meta.env.VITE_APP_FACEBOOK,
    Instagram: import.meta.env.VITE_APP_INSTAGRAM,
    Youtube: import.meta.env.VITE_APP_YOUTUBE,
    Linkedin: import.meta.env.VITE_APP_LINKEDIN,
    Whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    Address: import.meta.env.VITE_APP_ADDRESS,
    Email: import.meta.env.VITE_APP_EMAIL,
    Map1:import.meta.env.VITE_APP_MAP1,
    Phone: import.meta.env.VITE_APP_PHONE,
    Youtube:import.meta.env.VITE_APP_YOUTUBE
  })
    return(
<header id="header" className={`header fixed-top ${showMenu?'mobile-nav-active':''}`}>

    <div className="topbar d-flex align-items-center dark-background ">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="   ms-0 bi-envelope d-flex align-items-center">
            <Link to={`mailto:${settingData.Email}`} target='_blank'>{settingData.Email}</Link></i>
             <i className="   ms-5 bi-geo-alt d-flex align-items-center">
            <Link to={`${settingData.Map1}`} target='_blank'>{settingData.Address}</Link></i>
             <i className="   ms-5 bi-telephone d-flex align-items-center">
            <Link to={`${settingData.Phone}`} target='_blank'>{settingData.Phone}</Link></i>
             <i className="  ms-5 bi-whatsapp d-flex align-items-center">
            <Link to={`https://wa.me/${settingData.Whatsapp}`} target='_blank'>{settingData.Whatsapp}</Link></i>
             
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <Link to={settingData.Twitter} target= "_blank" className="text-light"><i className=" ms-2 bi  ms-2 bi-twitter-x"></i></Link>
          <Link to={settingData.Facebook} className="text-light"><i className=" ms-2 bi  ms-2 bi-facebook"></i></Link>
          <Link to={settingData.Instagram} className="text-light"><i className=" ms-2 bi  ms-2 bi-instagram"></i></Link>
          <Link to={settingData.Linkedin} className="text-light"><i className=" ms-2 bi  ms-2 bi-linkedin"></i></Link>
          <Link to={settingData.Youtube} className="text-light"><i className=" ms-2 bi  ms-2 bi-youtube"></i></Link>
          
        </div>
      </div>
    </div>

    <div className="branding d-flex align-items-center">

      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
         
          {/* <!-- <img src="assets/img/logo.webp" alt=""> --> */}
          <h1 className="sitename">{settingData.siteName}</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" className="active">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/features">Features</NavLink></li>
               <li><NavLink to="/faq">Faq</NavLink></li>
                <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                <li><NavLink to="/contactUs">ContactUs</NavLink></li>
                
            
            <li className="dropdown"><a href="#"><span>Rachit Mishra</span> <i className=" ms-2 bi  ms-2 bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><Link to="/profile?option=Profile">Profile</Link></li>
              <li><Link to="/profile?option=Wishlist">Wishlist</Link></li>
              <li><Link to="/profile?option=Orders">Orders</Link></li>
             <li><Link to="/profile?option=Address">Address</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
         
              <li><button className="btn ms-2">Logout</button></li>
              
            </ul>
            </li>
           
           
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${showMenu?'bi-x':'bi-list'}`}onClick={()=>setShowMenu(!showMenu)}></i>
        </nav>

      </div>

    </div>

  </header>
    )
}