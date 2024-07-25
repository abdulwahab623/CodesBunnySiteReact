
import React from "react";
import Logo from '../Images/CodesBunny/Artboardd.png'
import '../Assets/Style/navbar.css'
import { NavLink } from "react-router-dom";




const Navbar = () => {

  

    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     // Clear the session data or authentication tokens
    //     localStorage.removeItem('user');
    //     // Navigate the user back to the login page   
    //     navigate("/login");
    // };
    return (
        <>
             <header className="main-header clearfix">
      <div className="main-header__top clearfix">
        <div className="main-header__top-inner clearfix">
          <div className="main-header__top-right">
            <div className="main-header__top-right-text">
              <p>
                <span>Now Hiring:</span> Are you a driven and motivated 1st
                Line IT Support Engineer?
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-menu clearfix">
        <div className="main-menu-wrapper clearfix">
          <div className="main-menu-wrapper-inner clearfix">
            <div className="main-menu-wrapper__left clearfix">  
              <div className="main-menu-wrapper__logo">
             <NavLink to="/"><img src={Logo}  style={{ width: '170px' }}
                    alt="CodesBunny" /></NavLink>
              </div>      
            </div>
            <div className="main-menu-wrapper__center">
              <div className="main-menu-wrapper__main-menu">
                <NavLink to="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></NavLink>
                <ul className="main-menu__list">
                  <li className="">
                    <NavLink to="/">HOME</NavLink>
                  </li>
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
                  <li className="dropdown current">
                    <NavLink to="/blog">BLOG</NavLink>
                    {/* <ul>
                      <li><NavLink to="blogone.html">Blog One</NavLink></li>
                      <li><NavLink to="blogtwo.html">Blog Two</NavLink></li>
                      <li><NavLink to="blogthree.html">Blog Three</NavLink></li>
                      <li><NavLink to="blogfour.html">Blog Four</NavLink></li>
                      <li><NavLink to="blogfive.html">Blog Five</NavLink></li>
                      <li><NavLink to="blogsix.html">Blog Six</NavLink></li>
                    </ul> */}
                  </li>
                  <li><NavLink to="/contact">CONTACT US</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <NavLink to="/contact" className ="nav__btn nav-btn">Get Free Quote Now</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
        </>
    )
}
export default Navbar;