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
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-row">
        <div className="footer-col">
          <NavLink to="/">
            <img src={Officiallogo} alt="logo" className="footer-logo" />
          </NavLink>
          <p className="footer-about-text">
            Welcome to CodesBunny, We specialize in App Development, Web Development, WordPress Development, UI/UX Design, and SEO to help businesses build a strong online presence and achieve their goals.
          </p>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><NavLink to="/Hms">Our Products</NavLink></li>
            <li><NavLink to="/web">Web Development</NavLink></li>
            <li><NavLink to="/web">App Development</NavLink></li>
            <li><NavLink to="/Content">Digital Marketing</NavLink></li>
            <li><NavLink to="/Content">Content Writing</NavLink></li>
            <li><NavLink to="/SeoAso">(SEO) / (ASO)</NavLink></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">Who are we?</NavLink></li>
            <li><NavLink to="/service">Services</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact-text">
            Gulshan e Madina p-46 B Sargodha Road near Kia Moters
            Faisalabad, Punjab Pakistan
          </p>
          <ul className="footer-contact-info">
            <li>
              <img src={EmailVector} alt="email" />
              <NavLink to="mailto:needhelp@company.com"> needhelp@company.com</NavLink>
            </li>
            <li>
              <img src={TelePhone} alt="phone" />
              <NavLink to="tel:923080044190">  +92 308 0044190</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">Social Links</h3>
          <div className="footer-social">
            <NavLink to="#"><img src={Mail} alt="email" /></NavLink>
            <NavLink to="#"><img src={Linkedin} alt="Linkedin" /></NavLink>
            <NavLink to="#"><img src={FaceBook} alt="Facebook" /></NavLink>
            <NavLink to="#"><img src={Instagram} alt="Instagram" /></NavLink>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2024 CodesBunny. All rights reserved.</p>
    </div>
  </div>
</footer>


    </>
  );
};

export default Footer;
