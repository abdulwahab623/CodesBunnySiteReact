import React from "react";
import '../Assets/Style/homeser.css';
import App from '../Images/CodesBunny/mobV.png'
import { NavLink } from "react-router-dom";
import Web from '../Images/CodesBunny/WebV.png'
import Media from '../Images/CodesBunny/Media.png'

const Homeservices = () => {
  return (
    <section class="services-one">
      <div class="container">
        <div class="section-title text-center">
          <h2 class="sersection-title__title">Tailored Solutions for Your Business</h2>
          <span class="sersection-title__tagline">Designed to Elevate Your Success</span>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">
                <img class="im" src={Web} decoding="async" alt="App" />
              </div>
              <h3 class="services-one__title">
                <a href="web.html">Web Development
                </a>
              </h3>
              <p class="services-one__text">
                Web Development Enhance your online presence with custom solutions. We build responsive, user-friendly websites that drive engagement and conversions.
              </p>
              <div class="services-one__arrow">
                <NavLink to="/about" className="SerBtn">Learn More</NavLink>
                {/* <a href="web.html"><span class="icon-right-arrow"></span></a> */}
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

            <div class="services-one__single">
              <div class="services-one__icon">

                <img class="im" src={App} decoding="async" alt="App" />
              </div>
              <h3 class="services-one__title">
                <a href="App.html">App Development</a>
              </h3>
              <p class="services-one__text">
                Transform your ideas into powerful Android applications. Our
                expert developers create feature-rich, high-performance apps
                tailored to your business needs.
              </p>
              <div class="services-one__arrow">
                <NavLink to="/about" className="SerBtn">Learn More</NavLink>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">


                <img class="im" decoding="async" src={Media} alt="App" />
              </div>
              <h3 class="services-one__title">
                <a href="Digital.html">Digital Marketing</a>
              </h3>
              <p class="services-one__text">
                Boost your brand's visibility and reach with our digital marketing services. We offer SEO, social media marketing, and PPC strategies to grow your business.
              </p>
              <div class="services-one__arrow">
                <NavLink to="/about" className="SerBtn">Learn More</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
