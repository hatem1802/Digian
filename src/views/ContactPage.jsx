import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <Header />
        </div>
        <br /><br />
        <Contact />
        <br /><br />
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ContactPage
