import React from "react";
import { NavLink } from "react-router-dom";
import '../Assets/Style/About.css';
import image7 from '../Images/CodesBunny/abouttwo.png';

import Bunny from '../Images/CodesBunny/herobunny.png';
import Servicerow from "../component/Servicerow";
import Team from '../Images/CodesBunny/Team.jpg';
import Tick from '../Images/CodesBunny/tick.png';
// import App from '../Images/CodesBunny/mobV.png'
// import Web from '../Images/CodesBunny/WebV.png'
// import Media from '../Images/CodesBunny/Media.png'

const About = () => {
  return (
    <>
      <section className="aboutMainHero">
        <div className="aboutHeroContainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="aboutHeroContent">
                <h2>Crafting Digital Solutions at CodesBunny</h2>
                <p>
                  At CodesBunny, we craft digital solutions by innovating technology to drive your success.
                </p>
                <ul>
                  <li><img src={Tick} alt="tick" /> Work with latest technologies</li>
                  <li><img src={Tick} alt="tick" /> Unique and effective results</li>
                  <li><img src={Tick} alt="tick" /> Provides full-spectrum support</li>
                </ul>
                <NavLink to="/about" className="aboutHeroBtn">Learn More</NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={Bunny} alt="" className="aboutAnimatedImage" />
            </div>
          </div>
        </div>
      </section>
      <Servicerow />

      <section className="aboutSectionOne">
        <div className="aboutSecondContainer">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 aboutHome">
              <h1>4 Reasons to Choose Codesbunny</h1>
              <p>Get to Know About Us</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="aboutOneLeft wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="aboutOneImgBox">
                  <div className="aboutOneImg">
                    <img src={Team} style={{ height: '500px' }} alt="" />
                  </div>
                  {/* <div className="aboutOneSmallImg">
                  <img src={image11} alt="" />
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              {/* <div className="aboutOneRight"> */}

              <div className="row">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                  <p className="aboutOneText">
                    <strong style={{ color: '#13abd4' }}>Customized Solutions: </strong>
                    <br />
                    We provide tailored software and web development services to
                    meet the unique needs of your business, ensuring optimal
                    results and satisfaction.
                  </p>
                  <ul className="aboutList">
                    <li><img src={Tick} alt="tick" /> Customize your business </li>
                    <li><img src={Tick} alt="tick" /> Address the unique challenges</li>
                    <li><img src={Tick} alt="tick" /> Aim to deliver optimal results</li>
                  </ul>
                </div>
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                  <p className="aboutOneText">
                    <strong style={{ color: '#13abd4' }}>Expert Team: </strong>
                    <br />
                    Our team of experienced professionals is dedicated to delivering high-quality, innovative solutions that drive growth and success for your business.
                  </p>
                  <ul className="aboutList">
                    <li><img src={Tick} alt="tick" /> Customize your business</li>
                    <li><img src={Tick} alt="tick" /> Address the unique challenges</li>
                    <li><img src={Tick} alt="tick" /> Aim to deliver optimal results</li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="aboutSectionTwo">
        <div className="aboutSecondContainer">
          {/* <div className="row">
          <div className="col-lg-12 aboutHome">
            <h1>4 Reasons to Choose Codesbunny</h1>
            <p>Get to Know About Us</p>
          </div>
        </div> */}
          <div className="row">
            <div className="col-xl-6">
              <div className="aboutOneRight">
                <div className="row">
                  <div className="col-lg-12">
                    <p className="aboutOneText" style={{ color: '#ffffff' }}>
                      <strong style={{ color: '#13abd4' }}>Customized Solutions: </strong>
                      <br />
                      We provide tailored software and web development services to
                      meet the unique needs of your business, ensuring optimal
                      results and satisfaction.
                    </p>
                    <ul className="aboutList">
                      <li><img src={Tick} alt="tick" /> Customize your business</li>
                      <li><img src={Tick} alt="tick" /> Address the unique challenges</li>
                      <li><img src={Tick} alt="tick" /> Aim to deliver optimal results</li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <p className="aboutOneText">
                      <strong style={{ color: '#13abd4' }}>Expert Team: </strong>
                      <br />
                      Our team of experienced professionals is dedicated to delivering high-quality, innovative solutions that drive growth and success for your business.
                    </p>
                    <ul className="aboutList">
                      <li><img src={Tick} alt="tick" /> Customize your business</li>
                      <li><img src={Tick} alt="tick" /> Address the unique challenges</li>
                      <li><img src={Tick} alt="tick" /> Aim to deliver optimal results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="aboutOneLeft wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <div className="aboutOneImgBox">
                  <div className="aboutOneImg">
                    <img src={image7} style={{ height: '500px' }} alt="" />
                  </div>
                  {/* <div className="aboutOneSmallImg">
                  <img src={image11} alt="" />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="services-one">
        <div class="container">
          <div class="section-title text-center">
            <h2 class="sersection-title__title">Tailored Solutions for Your Business</h2>
            <span class="sersection-title__tagline">Designed to Elevate Your Success</span>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              <div class="services-one__single">
                <div class="services-one__icon">
                  <img class="im" src={Web} alt="App" />
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
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
              <div class="services-one__single">
                <div class="services-one__icon">
                  <img class="im" src={App} alt="App" />
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
                  <img class="im" src={Media} alt="App" />
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
      </section> */}
    </>
  );
}

export default About;
