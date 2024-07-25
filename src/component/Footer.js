
import React from "react";
import '../Assets/Style/footer.css';
// import '../style/navbar.css';
// import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {


    return (
        <>
               <footer class="site-footer">
    <div class="site-footer__top">
      <div class="container">
        <div class="site-footer__top-inner">
 
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col=sm-6 col-xs-12 wow fadeInUp" data-wow-delay="100ms">
              <div class="footer-widget__column footer-widget__about">
                <div class="footer-widget__about-logo"   >
                {/* style={{display:flex}}  */}
                  <a href="index.html"><img src="assets/images/loader.png" width="90px" alt="" /></a>
                  <h4 style={{color:"azure"}} >CodesBunny</h4>
                  {/* style="color:azure; margin-top: 30px;" */}
                </div>
                <p class="footer-widget__about-text">Welcome to thw world of Bunnies.
                </p>

              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col=sm-6 col-xs-12 wow fadeInUp" data-wow-delay="200ms">
              <div class="footer-widget__column footer-widget__links clearfix">
                <h3 class="footer-widget__title">Services</h3>
                <ul class="footer-widget__links-list list-unstyled clearfix">
                  <li><a href="hms.html">(HMS)</a></li>
                  <li><a href="web.html">Web Development</a></li>
                  <li><a href="App.html">App Development</a></li>
                  <li><a href="Digital.html">Digital Marketing</a></li>
                  <li><a href="content.html">Content Writing</a></li>
                  <li>
                    <a href="SeoAso.html">(SEO) / (ASO)</a>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col=sm-6 col-xs-12 wow fadeInUp" data-wow-delay="200ms">
              <div class="footer-widget__column footer-widget__links clearfix">
                <h3 class="footer-widget__title">Quick Links</h3>
                <ul class="footer-widget__links-list list-unstyled clearfix">
                  <li><a href="">Home</a></li>
                  <li><a href="">Who are we?</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact Us</a></li>
                </ul>
               
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 col=sm-6 col-xs-12 wow fadeInUp" data-wow-delay="300ms">
              <div class="footer-widget__column footer-widget__contact">
                <h3 class="footer-widget__title">Contact</h3>
                <p class="footer-widget__contact-text">
                  Gulshan e Madina p-46 B<br />
                  Faisalabad, Punjab Pakistan
                </p>
                <ul class="list-unstyled footer-widget__contact-list">
                  <li>
                    <div class="icon">
                      <span class="icon-email"></span>
                    </div>
                    <div class="text">
                      <p>
                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="icon-telephone"></span>
                    </div>
                    <div class="text">
                      <p>
                        <a href="tel:923080044190">+92 308 0044190</a>
                      </p>
                    </div>
                  </li>
                </ul>

              </div>
                 {/* <div class="footer-widget__about-social">
                <a href="mailto:your-email@example.com" class="mail">
                 <img src="assets/images/CodesBunny/Gmailicon.png"
                    style="width: 30px;" alt="">

                    </a>

                <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
               
                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
             
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="site-footer__bottom">
      <div class="site-footer__bottom-container">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="site-footer__bottom-inner">
                <div class="site-footer__bottom-left">
                  <p class="site-footer__bottom-text">
                    © All Copyright <span class="dynamic-year"> </span>
                    by <a href="#">Layerdrops.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

        </>
    )
}
export default Footer;