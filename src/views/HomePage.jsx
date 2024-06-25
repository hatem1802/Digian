import React from "react";
import Header from "../components/Header";
import Head from "../components/Head";
import Services from "../components/Services";
import About from "../components/About";
import Cases from "../components/Cases";
import CLient from "../components/CLient";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="hero_area">
        <Header />
        <Head />
      </div>
      <Services />
      <About />
      <Cases />
      <CLient />
      <Contact />
      <div className="footer_container">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
