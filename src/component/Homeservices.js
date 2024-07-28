import React from "react";

import '../Assets/Style/homeser.css';

const Homeservices = () => {
  return (
    <section class="services-one">
      <div class="container">
        <div class="section-title text-center">
          <span class="sersection-title__tagline">Wide Range of Services</span>
          <h2 class="sersection-title__title">What We’re Offering</h2>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">
                <span class="icon-"></span>
                <img class="im" src="assets/images/CodesBunny/Vector1.png" alt="" />
              </div>
              <h3 class="services-one__title">
                <a href="web.html">Web Development
                </a>
              </h3>
              <p class="services-one__text">
                Web Development Enhance your online presence with custom solutions. We build responsive, user-friendly websites that drive engagement and conversions.
              </p>
              <div class="services-one__arrow">
                <a href="web.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

            <div class="services-one__single">
              <div class="services-one__icon">
                <span class="icon-app-development"></span>
                <img class="im" src="assets/images/CodesBunny/mblapp.png" alt="" />
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
                <a href="App.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">


                <img class="im" src="assets/images/CodesBunny/Vector2.png" alt="" />
              </div>
              <h3 class="services-one__title">
                <a href="Digital.html">Digital Marketing</a>
              </h3>
              <p class="services-one__text">
                Boost your brand's visibility and reach with our digital marketing services. We offer SEO, social media marketing, and PPC strategies to grow your business.
              </p>
              <div class="services-one__arrow">
                <a href="Digital.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeservices;
