import React from "react";
import '../Assets/Style/footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
         <div className="page-wrapper">
            <footer className="site-footer">
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="footer-widget__column footer-widget__about">
                                        <div className="footer-widget__about-logo" style={{ display: 'flex' }}>
                                            <NavLink href="index.html"><img src="assets/images/loader.png" width="90px" alt="" /></NavLink>
                                            <h4 style={{ color: "azure", marginTop: '30px' }}>CodesBunny</h4>
                                        </div>
                                        <p className="footer-widget__about-text">Welcome to the world of Bunnies.</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__links clearfix">
                                        <h3 className="footer-widget__title">Services</h3>
                                        <ul className="footer-widget__links-list list-unstyled clearfix">
                                            <li><NavLink href="hms.html">(HMS)</NavLink></li>
                                            <li><NavLink href="web.html">Web Development</NavLink></li>
                                            <li><NavLink href="App.html">App Development</NavLink></li>
                                            <li><NavLink href="Digital.html">Digital Marketing</NavLink></li>
                                            <li><NavLink href="content.html">Content Writing</NavLink></li>
                                            <li><NavLink href="SeoAso.html">(SEO) / (ASO)</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__links clearfix">
                                        <h3 className="footer-widget__title">Quick Links</h3>
                                        <ul className="footer-widget__links-list list-unstyled clearfix">
                                            <li><NavLink href="">Home</NavLink></li>
                                            <li><NavLink href="">Who are we?</NavLink></li>
                                            <li><NavLink href="">Services</NavLink></li>
                                            <li><NavLink href="">Blog</NavLink></li>
                                            <li><NavLink href="">Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="footer-widget__column footer-widget__contact">
                                        <h3 className="footer-widget__title">Contact</h3>
                                        <p className="footer-widget__contact-text">
                                            Gulshan e Madina p-46 B<br />
                                            Faisalabad, Punjab Pakistan
                                        </p>
                                        <ul className="list-unstyled footer-widget__contact-list">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="text">
                                                    <p><NavLink href="mailto:needhelp@company.com">needhelp@company.com</NavLink></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-telephone"></span>
                                                </div>
                                                <div className="text">
                                                    <p><NavLink href="tel:923080044190">+92 308 0044190</NavLink></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-widget__about-social">
                                        <NavLink href="mailto:your-email@example.com" className="mail">
                                            <img src="assets/images/CodesBunny/Gmailicon.png" style={{ width: '30px' }} alt="" />
                                        </NavLink>
                                        <NavLink href="#" className="linkedin"><i className="fab fa-linkedin"></i></NavLink>
                                        <NavLink href="#" className="facebook"><i className="fab fa-facebook"></i></NavLink>
                                        <NavLink href="#" className="instagram"><i className="fab fa-instagram"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="site-footer__bottom-container">
                        <div className="container">
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
                </div>
            </footer>
            </div>
        </>
    )
}

export default Footer;
