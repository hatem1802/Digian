import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <Header />
        </div>
        <br /><br />
        <About />
        <br /><br />
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
