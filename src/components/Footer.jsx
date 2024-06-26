import React from "react";

const Footer = () => {
  return (
    <>
      <section class="info_section ">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 ">
              <div class="info_detail">
                <h4>Digian</h4>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mx-auto">
              <div class="info_link_box">
                <h4>Links</h4>
                <div class="info_links">
                  <a class="" href="index.html">
                    Home
                  </a>
                  <a class="" href="about.html">
                    About
                  </a>
                  <a class="" href="service.html">
                    Services
                  </a>
                  <a class="" href="contact.html">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div class="col-md-6 col-lg-3 mb-0 ml-auto">
              <div class="info_contact">
                <h4>Address</h4>
                <div class="contact_link_box">
                  <a href="">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="info_social">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
