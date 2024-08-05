 import React, { useState } from "react";
import OfficialLogo from '../Assets/Images/CodesBunny/Officiallogo.png';
import { NavLink } from "react-router-dom";
import emailpic from '../Assets/Images/CodesBunny/mail.png';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

  };

  return (
    <>
      <header className="main-header clearfix">
       
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-right">
              <div className="main-header__top-right-text">
                <p>
                  <span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?
                </p>
              </div>
            </div>
          </div>
        <nav className="main-menu clearfix">
          <div className="main-menu-wrapper clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <NavLink to="/"><img src={OfficialLogo} alt="CodesBunny" /></NavLink>
                </div>
              </div>
              <div className="main-menu-wrapper__center">
                <div className="main-menu-wrapper__main-menu">
                  <NavLink to="#" className="mobile-nav__toggler" onClick={handleToggle}>
                    <i className="fa fa-bars"></i>
                  </NavLink>
                  <ul className="main-menu__list">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/about">ABOUT US</NavLink></li>
                    <li className="dropdown">
                      <NavLink to="/service">SERVICES</NavLink>
                      <ul>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/hms">Our Products</NavLink></li>
                        <li><NavLink to="/web">Web Development</NavLink></li>
                        <li><NavLink to="/web">App Development</NavLink></li>
                        <li><NavLink to="/Content">Digital Marketing</NavLink></li>
                        <li><NavLink to="/SeoAso">SEO / ASP Optimization</NavLink></li>
                        <li><NavLink to="/Content">Content Writing</NavLink></li>
                      
                      </ul>
                    </li>
                    <li className="dropdown "><NavLink to="/blog">BLOG</NavLink></li>
                    <li><NavLink to="/contact">CONTACT US</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <NavLink to="/contact" className="nav__btn nav-btn">Get Free Quote Now</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`mobile-nav__wrapper ${isMobileMenuOpen ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay" onClick={handleToggle}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleToggle}>
            <i className="fa fa-times"></i>
          </span>
          <div className="logo-box">
            <NavLink to="/" aria-label="logo image"><img src={OfficialLogo}  alt="" /></NavLink>
            {/* <h3 style={{ color: 'white', marginTop: '32px', fontStyle: 'initial' }}>CodesBunny</h3> */}
          </div>
          <ul className="main-menu__list">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/about">ABOUT US</NavLink></li>
                    <li className="dropdown current">
                      <NavLink to="/service">SERVICES</NavLink>
                      <ul>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="">Our Products</NavLink></li>
                        <li><NavLink to="">Web Development</NavLink></li>
                        <li><NavLink to="">App Development</NavLink></li>
                        <li><NavLink to="">Digital Marketing</NavLink></li>
                        <li><NavLink to="">SEO / ASP Optimization</NavLink></li>
                        <li><NavLink to="">Content Writing</NavLink></li>
                        <li><NavLink to="">Custom Software</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown current"><NavLink to="/blog">BLOG</NavLink></li>
                    <li><NavLink to="/contact">CONTACT US</NavLink></li>
                  </ul>
          <ul className="mobile-nav__contact list-unstyled">
            <li><i className="fa fa-envelope"></i><a href="mailto:needhelp@packageName__.com">needhelp@izeetak.com</a></li>
            <li><i className="fa fa-phone-alt"></i><a href="tel:+92 308 0044190">+92 308 0044190</a></li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="mailto:your-email@example.com" className="mail">
                <img src={emailpic} style={{ width: '30px' }} alt="" />
              </a>
              <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
