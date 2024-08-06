import React from "react";
import "../Assets/Style/footer.css";
import { NavLink } from "react-router-dom";
import EmailVector from "../Assets/Images/CodesBunny/emailvector.png";
import Instagram from "../Assets/Images/CodesBunny/instavector.png";
import TelePhone from "../Assets/Images/CodesBunny/telephonevector.png";
import FaceBook from "../Assets/Images/CodesBunny/Facabookvec.png";
import Linkedin from "../Assets/Images/CodesBunny/LinkedInvector.png";
import Mail from "../Assets/Images/CodesBunny/mailvector.png";
import Officiallogo from "../Assets/Images/CodesBunny/Officiallogo.png";
const Footer = () => {
  return (
    <>
 <footer className="site-footer">
        <div className="Footerbackground"></div>
        <div className="Footercontainer">
        <div className="site-footer__top">
          <div className="site-footer__top-inner">
            <div className="row">
              
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div
                    className="footer-widget__about-logo"
                    style={{ display: "flex" }}
                  >
                    <NavLink to="/">
                      <img src={Officiallogo} alt="" />
                    </NavLink>
                    
                  </div>
                  <p className="footer-widget__about-text">

                    Welcome to CodesBunny. We specialize in App Development, Web Development, WordPress Development, UI/UX Design, and SEO to help businesses build a strong online presence and achieve their goals.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 ">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <NavLink to="/Hms">Our Products</NavLink>
                    </li>
                    <li>
                      <NavLink to="/web">Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/web">App Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Content">Digital Marketing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Content">Content Writing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/SeoAso">(SEO) / (ASO)</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Quick Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">Who are we?</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  <p className="footer-widget__contact-text">
                    Gulshan e Madina p-46 B Sargodha Road near Kia Moters 
                    Faisalabad, Punjab Pakistan
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">

                        <img src={EmailVector} alt="email" />
                      </div>
                      <div className="text">
                        <p>
                          <NavLink to="mailto:needhelp@company.com">
                            needhelp@company.com
                          </NavLink>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src={TelePhone} alt="email" />
                      </div>
                      <div className="text">
                        <p>
                          <NavLink to="tel:923080044190">
                            +92 308 0044190
                          </NavLink>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp"
                >
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Social Links</h3>
                  <div className="footer-widget__about-social">
                    <NavLink to="mailto:your-email@example.com" >
                      <img src={Mail} alt="email" />
                    </NavLink>
                    <NavLink to="#" >
                      <img src={Linkedin} alt="Linkedin" /> 
                    </NavLink>
                    <NavLink to="#" >
                      <img src={FaceBook} alt="Facebook" /> 
                    </NavLink>
                    <NavLink to="#" >
                      <img src={Instagram} alt="Insta" /> 
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="site-footer__bottom">
          <div className="site-footer__bottom-container">

            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer__bottom-inner">
                  <div className="site-footer__bottom-left">
                    <p className="site-footer__bottom-text">
                      © All Copyright <span className="dynamic-year"> </span>
                      by <NavLink href="#">Layerdrops.com</NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> 

    </>
  );
};

export default Footer;
