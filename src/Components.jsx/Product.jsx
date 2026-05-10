import React from 'react'

export default function Product() {
  return (
   <>
   <section id="featured-services" className="featured-services section">

  
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-0">

          <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
            <div className="featured-service-main">
              <div className="service-image-wrapper">
                <img src="assets/img/health/consultation-4.webp" alt="Premier Healthcare Services" className="img-fluid/"
                  loading="lazy"/>
                <div className="service-overlay">
                  <div className="service-badge">
                    <i className="bi bi-heart-pulse"></i>
                    <span>Emergency Care</span>
                  </div>
                </div>
              </div>
              <div className="service-details">
                <h2>Comprehensive Healthcare Excellence</h2>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae donec velit neque.</p>
                <a href="#!" className="main-cta">Explore Our Services</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
            <div className="services-sidebar">

              <div className="service-item" data-aos="fade-up" data-aos-delay="400">
                <div className="service-icon-wrapper">
                  <i className="bi bi-capsule"></i>
                </div>
                <div className="service-info">
                  <h4>Dermatology Clinic</h4>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <a href="#!" className="service-link">Learn More</a>
                </div>
              </div>

              <div className="service-item" data-aos="fade-up" data-aos-delay="500">
                <div className="service-icon-wrapper">
                  <i className="bi bi-bandaid"></i>
                </div>
                <div className="service-info">
                  <h4>Surgery Center</h4>
                  <p>Donec rutrum congue leo eget malesuada curabitur arcu erat accumsan id imperdiet et porttitor at
                    sem.</p>
                  <a href="#!" className="service-link">Learn More</a>
                </div>
              </div>

              <div className="service-item" data-aos="fade-up" data-aos-delay="600">
                <div className="service-icon-wrapper">
                  <i className="bi bi-activity"></i>
                </div>
                <div className="service-info">
                  <h4>Diagnostics Lab</h4>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui cras ultricies ligula sed
                    magna.</p>
                  <a href="#!" className="service-link">Learn More</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="specialties-grid" data-aos="fade-up" data-aos-delay="300">
          <div className="row align-items-center">

            <div className="col-lg-3 col-md-6">
              <div className="specialty-card">
                <div className="specialty-image">
                  <img src="assets/img/health/maternal-2.webp" alt="Maternal Care" className="img-fluid" loading="lazy"/>
                </div>
                <div className="specialty-content">
                  <h5>Maternal Care</h5>
                  <span>Expert pregnancy &amp; delivery support</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="specialty-card">
                <div className="specialty-image">
                  <img src="assets/img/health/vaccination-3.webp" alt="Vaccination" className="img-fluid" loading="lazy"/>
                </div>
                <div className="specialty-content">
                  <h5>Vaccination</h5>
                  <span>Complete immunization programs</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="specialty-card">
                <div className="specialty-image">
                  <img src="assets/img/health/emergency-1.webp" alt="Emergency Care" className="img-fluid" loading="lazy"/>
                </div>
                <div className="specialty-content">
                  <h5>Emergency Care</h5>
                  <span>24/7 critical care services</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="specialty-card">
                <div className="specialty-image">
                  <img src="assets/img/health/facilities-6.webp" alt="Advanced Tech" className="img-fluid" loading="lazy"/>
                </div>
                <div className="specialty-content">
                  <h5>Advanced Technology</h5>
                  <span>State-of-the-art medical equipment</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
   
   
   
   </>
  )
}
