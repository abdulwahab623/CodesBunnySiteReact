import React from "react";
import Homehero from "../component/Homehero";
import Abouthome from "../component/Abouthome";

import "../Assets/Style/Home.css";
import Servicerow from "../component/Servicerow";
// import Testimonal from "../component/Testimonal";
import Innovation from "../Images/CodesBunny/Innovation.jpg";
import AI from "../Images/CodesBunny/AI.jpg";
import Digital from "../Images/CodesBunny/Digital Transformation.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Homehero />
      <Servicerow />
      <Abouthome />
      {/* <Testimonal /> */}
      <section className="testimonial-one">
        <div id="particles-js"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="testimonial-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">
                    Customers Feedbacks
                  </span>
                  <h2 className="section-title__title">
                    What They’re Talking About Company
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="testimonial-one__right">
                <div className="testimonial-one__carousel owl-theme owl-carousel">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-one-img-1.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__client-details">
                        <h5 className="testimonial-one__client-name">
                          Kevin Martin
                        </h5>
                        <p className="testimonial-one__client-title">
                          Customer
                        </p>
                      </div>
                    </div>
                    <p className="testimonial-one__text">
                      Lorem ipsum is simply free text dolor sit amet,
                      consectetur notted adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore text.
                    </p>
                    <div className="testimonial-one__quote">
                      <span className="icon-right-quote"></span>
                    </div>
                  </div>

                  <div className="testimonial-one__single">
                    <div className="testimonial-one__client-info">
                      <div className="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-one-img-2.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-one__client-details">
                        <h5 className="testimonial-one__client-name">
                          Christine Eve
                        </h5>
                        <p className="testimonial-one__client-title">
                          Customer
                        </p>
                      </div>
                    </div>
                    <p className="testimonial-one__text">
                      Lorem ipsum is simply free text dolor sit amet,
                      consectetur notted adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore text.
                    </p>
                    <div className="testimonial-one__quote">
                      <span className="icon-right-quote"></span>
                    </div>
                  </div>

                  <div class="testimonial-one__single">
                    <div class="testimonial-one__client-info">
                      <div class="testimonial-one__client-img">
                        <img
                          src="assets/images/testimonial/testimonial-one-img-3.png"
                          alt=""
                        />
                      </div>
                      <div class="testimonial-one__client-details">
                        <h5 class="testimonial-one__client-name">Jon Smith</h5>
                        <p class="testimonial-one__client-title">Customer</p>
                      </div>
                    </div>
                    <p class="testimonial-one__text">
                      Lorem ipsum is simply free text dolor sit amet,
                      consectetur notted adipisicing elit sed do eiusmod tempor
                      incididunt ut labore et dolore text.
                    </p>
                    <div class="testimonial-one__quote">
                      <span class="icon-right-quote"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2>Dive Into Our Thoughtfull Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft">
              <div className="news-one__single">
                <div className="news-one__img">
                  <img
                    src={Innovation}
                   
                    alt=""
                  />
                </div>
                <div className="news-one__content">
                  <h3 className="news-one__title">
                    The Role of Innovation in Driving Business Success.
                  </h3>
                  <p>Jun 25 2025</p>
                  <NavLink
                    href="blogone.html"
                    className="news-one__read-more-btn"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInLeft">
              <div className="news-one__single">
                <div className="news-one__img">
                  <img
                    src={AI}
                   
                    alt=""
                  />
                </div>
                <div className="news-one__content">
                  <h3 className="news-one__title">
                    Impact of Artificial Intelligence On Business.
                  </h3>
                  <p>Jun 25 2025</p>
                  <NavLink
                    href="blogone.html"
                    className="news-one__read-more-btn"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 wow fadeInLeft">
              <div className="news-one__single">
                <div className="news-one__img">
                  <img
                    src={Digital}
                   
                    alt=""
                  />{" "}
                </div>
                <div className="news-one__content">
                  <h3 className="news-one__title">
                    Embracing Digital Transform In Business
                  </h3>
                  <p>Jun 25 2025</p>
                  <NavLink
                    href="blogone.html"
                    className="news-one__read-more-btn"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-one">
        <div className="cta-one__container">
          {/* <div className="cta-one-bg"></div> */}
          {/* <div className="cta-one-overly"></div> */}
          {/* <div className="container"> */}
          <div className="col-lg-12">
            <div className="cta-one__inner">
              <h2 className="cta-one__title">
                We’ll Help You Overcome Your <br />
                Technology Challenges
              </h2>
              <p className="ctaOneSubTitle">Let’s Get Started Now</p>
              <a href="contact.html" className="ctabtn">
                Get Free Quote Now
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
