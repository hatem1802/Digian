import React from 'react'

import Header from '../components/Header'
import Services from '../components/Services'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <Header />
        </div>
        <br /><br />
        <Services />
        <br /><br />
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ServicesPage
