import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Footer(){
  
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
        
  <footer id="footer" className="footer-16 footer position-relative bg-dark  ">

    <div className="container">

      <div className="footer-main" data-aos="fade-up" data-aos-delay="100" >
        <div className="row align-items-start">

          <div className="col-lg-4">
            <div className="brand-section">
              <Link to="/" className="logo d-flex align-items-center mb-2">
                <span className="sitename text-light">{settingData.siteName}</span>
              </Link>
              <p className="brand-description text-light">At Heritage Ally, we bring timeless tradition and modern elegance together through a carefully curated collection of ethnic wear, handcrafted accessories, and lifestyle essentials. Our mission is to celebrate cultural heritage while offering quality, comfort, and style for everyday living.</p>

              <div className="contact-info mt-4 ">
                <div className="contact-item">
                  <Link to={settingData.Map1} target='_blank'>
                  <i className="bi bi-geo-alt"></i>
                  <span className='text-light' >{settingData.Address}</span>
                  </Link>
                </div>
                <div className="contact-item">
                  <Link to={`mailto:${settingData.Email}`}>
                  <i className="bi bi-envelope"></i>
                  <span className='text-light'>{settingData.Email}</span>
                  </Link>
                </div>
                <div className="contact-item ">
                  <Link to={`tel:${settingData.Phone}`}>
                  <i className="bi bi-telephone"></i>
                  <span className="text-light">{settingData.Phone}</span>
                  </Link>
                </div>
                 <div className="contact-item ">
                  <Link to={`http://wa.me/${settingData.Whatsapp}`}>
                  <i className="bi bi-whatsapp"></i>
                  <span className="text-light">{settingData.Whatsapp}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8" >
            <div className="footer-nav-wrapper">
              <div className="row">

                <div className="col-md-3 col-12 ">
                  <div className="nav-column">
                    <h6 className='text-light'>Quick Links</h6>
                    <nav className="footer-nav" >
                      <Link to="/ " className='text-light' >Home</Link>
                      <Link to="/about"className='text-light'>About</Link>
                       <Link to="/shop"className='text-light'>Shop</Link>
                       <Link to="/features"className='text-light'>Features</Link>
                        <Link to="/faq"className='text-light'>Faq</Link>
                        
                    </nav>
                  </div>
                </div>
                <div className="col-md-3 col-12 ">
                  <div className="nav-column">
                    <h6 className='text-light'>Important Links</h6>
                    <nav className="footer-nav">
                      
                         <Link to="/testimonial"className='text-light'>Testimonial</Link>
                          <Link to="/contactUs"className='text-light'>ContactUs</Link>
                           <Link to="/privacy policy"className='text-light'>Privacy-Policy</Link>
                            <Link to="/about"className='text-light'>Terms and Condition</Link>
                    </nav>
                  </div>
                </div>

                <div className="col-md-6 col-12 " >
                  <div className="nav-column">
                    <h6 className='text-light'>Subscribe Our NewsLetter Service</h6>
                    <p className="text-light">Subscribe to the Heritage Ally newsletter to get the latest updates on new arrivals, exclusive offers, festive collections, and special discounts delivered straight to your inbox. Stay connected with trending styles, traditional inspirations, and exciting launches before anyone else.</p>
              
                    <div>
                      <form>
                        <div className="btn-group w-100">
                          <input type="email" name="email" placeholder="Enter your Email Address to subscribe our newsletter service" className='form-control rounded-0 rounded-start'/>
                         <button className='btn btn-dark border'>Subscribe</button>
                        </div>
                       </form>
                    </div>
                    <div className='mt-3'>
                     <div className="social-links d-none d-md-flex align-items-center">
                              <Link to={settingData.Twitter} target= "_blank" className="text-light me-3"><i className=" ms-2 bi  ms-2 bi-twitter-x"></i></Link>
                              <Link to={settingData.Facebook} className="text-light me-3"><i className=" ms-2 bi  ms-2 bi-facebook"></i></Link>
                              <Link to={settingData.Instagram} className="text-light me-3"><i className=" ms-2 bi  ms-2 bi-instagram"></i></Link>
                              <Link to={settingData.Linkedin} className="text-light me-3"><i className=" ms-2 bi  ms-2 bi-linkedin"></i></Link>
                              <Link to={settingData.Youtube} className="text-light me-3" ><i className=" ms-2 bi  ms-2 bi-youtube"></i></Link>
                              
                            </div>
                     </div>       
                  </div>
                </div>

             

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div className="footer-bottom border-top" style={{marginTop:-80}}>
      <div className="container">
        <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="copyright">
                <p className='text-light'>© <span className="sitename text-light" >{settingData.siteName}</span>. All rights reserved.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="legal-links">
                <Link to="/"className='text-light'>Home</Link>
                <Link to="/about"className='text-light'>About</Link>
                <Link to="/Shop"className='text-light'>Shop</Link>
                <Link to="/features"className='text-light'>Features</Link>
                <Link to="/privacy policy"className='text-light'>Privacy Policy</Link>
                <Link to="/terms and condition"className='text-light'>Terms of Service</Link>
               
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </footer>
    )
}