import React from "react";
import "../Assets/Style/footer.css";
import { NavLink } from "react-router-dom";
import EmailVector from '../Assets/Images/CodesBunny/emailvector.png'
import Instagram from '../Assets/Images/CodesBunny/instavector.png'
import TelePhone from '../Assets/Images/CodesBunny/telephonevector.png'
import FaceBook from '../Assets/Images/CodesBunny/Facabookvec.png'
import Linkedin from '../Assets/Images/CodesBunny/LinkedInvector.png'
import Mail from '../Assets/Images/CodesBunny/mailvector.png'
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
      <div className="Footerbackground"></div>
        <div className="site-footer__top">
          {/* <div className="container"> */}
          <div className="site-footer__top-inner">
            <div className="row">
              <div
                className="col-lg-1"></div>
              <div
                className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div
                    className="footer-widget__about-logo"
                    style={{ display: "flex" }}
                  >
                    <NavLink href="index.html">
                      <img src="assets/images/loader.png" width="90px" alt="" />
                    </NavLink>
                    <h4 style={{ color: "azure", marginTop: "30px" }}>
                      CodesBunny
                    </h4>
                  </div>
                  <p className="footer-widget__about-text">
                    Welcome to the world of Bunnies.
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Services</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <NavLink href="hms.html">(HMS)</NavLink>
                    </li>
                    <li>
                      <NavLink href="web.html">Web Development</NavLink>
                    </li>
                    <li>
                      <NavLink href="App.html">App Development</NavLink>
                    </li>
                    <li>
                      <NavLink href="Digital.html">Digital Marketing</NavLink>
                    </li>
                    <li>
                      <NavLink href="content.html">Content Writing</NavLink>
                    </li>
                    <li>
                      <NavLink href="SeoAso.html">(SEO) / (ASO)</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 wow fadeInUp">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Quick Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    <li>
                      <NavLink href="">Home</NavLink>
                    </li>
                    <li>
                      <NavLink href="">Who are we?</NavLink>
                    </li>
                    <li>
                      <NavLink href="">Services</NavLink>
                    </li>
                    <li>
                      <NavLink href="">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink href="">Contact Us</NavLink>
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
                    Gulshan e Madina p-46 B<br />
                    Faisalabad, Punjab Pakistan
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">
                        
                        <img src={EmailVector} alt="email"/>
                      </div>
                      <div className="text">
                        <p>
                          <NavLink href="mailto:needhelp@company.com">
                            needhelp@company.com
                          </NavLink>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                      <img src={TelePhone} alt="email"/>
                      </div>
                      <div className="text">
                        <p>
                          <NavLink href="tel:923080044190">
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
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Social Links</h3>
                  <div className="footer-widget__about-social">
                    <NavLink
                      href="mailto:your-email@example.com"
                      
                    >
                      <img src={Mail} alt="email"/>

                      {/* <img
                        src="assets/images/CodesBunny/Gmailicon.png"
                        style={{ width: "30px" }}
                        alt=""
                      /> */}
                    </NavLink>
                    <NavLink href="#" >
                    <img src={Linkedin} alt="Linkedin"/>
                    </NavLink>
                    <NavLink href="#" >
                    <img src={FaceBook} alt="Facebook"/>
                    </NavLink>
                    <NavLink href="#" >
                    <img src={Instagram} alt="Insta"/>
                    </NavLink>
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
