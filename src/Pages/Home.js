import React from "react";
import Homehero from "../component/Homehero";
import Abouthome from "../component/Abouthome";

import '../Assets/Style/Home.css'
import Servicerow from "../component/Servicerow";
// import Testimonal from "../component/Testimonal";




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
                                  <span className="section-title__tagline">Customers Feedbacks</span>
                                  <h2 className="section-title__title">What They’re Talking About Company</h2>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-8 col-lg-7">
                          <div className="testimonial-one__right">
                              <div className="testimonial-one__carousel owl-theme owl-carousel">
                                  
                                  <div className="testimonial-one__single">
                                      <div className="testimonial-one__client-info">
                                          <div className="testimonial-one__client-img">
                                              <img src="assets/images/testimonial/testimonial-one-img-1.png" alt=""/>
                                          </div>
                                          <div className="testimonial-one__client-details">
                                              <h5 className="testimonial-one__client-name">Kevin Martin</h5>
                                              <p className="testimonial-one__client-title">Customer</p>
                                          </div>
                                      </div>
                                      <p className="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet,
                                          consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore
                                          et dolore text.</p>
                                      <div className="testimonial-one__quote">
                                          <span className="icon-right-quote"></span>
                                      </div>
                                  </div>

                                  <div className="testimonial-one__single">
                                      <div className="testimonial-one__client-info">
                                          <div className="testimonial-one__client-img">
                                              <img src="assets/images/testimonial/testimonial-one-img-2.png" alt=""/>
                                          </div>
                                          <div className="testimonial-one__client-details">
                                              <h5 className="testimonial-one__client-name">Christine Eve</h5>
                                              <p className="testimonial-one__client-title">Customer</p>
                                          </div>
                                      </div>
                                      <p className="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet,
                                          consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore
                                          et dolore text.</p>
                                      <div className="testimonial-one__quote">
                                          <span className="icon-right-quote"></span>
                                      </div>
                                  </div>

                                  <div class="testimonial-one__single">
                                      <div class="testimonial-one__client-info">
                                          <div class="testimonial-one__client-img">
                                              <img src="assets/images/testimonial/testimonial-one-img-3.png" alt=""/>
                                          </div>
                                          <div class="testimonial-one__client-details">
                                              <h5 class="testimonial-one__client-name">Jon Smith</h5>
                                              <p class="testimonial-one__client-title">Customer</p>
                                          </div>
                                      </div>
                                      <p class="testimonial-one__text">Lorem ipsum is simply free text dolor sit amet,
                                          consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore
                                          et dolore text.</p>
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
          <div className="section-title text-center">
            <span className="section-title__tagline">Direct from the Blog</span>
            <h2 className="section-title__title">News & Articles</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">

              <div className="news-one__single">
                <div className="news-one__img">
                  <img src="assets/images/blog/news-one-img-1.jpg" alt="" />
                  <a href="blogone.html">
                    <span className="news-one__plus"></span>
                  </a>
                  <div className="news-one__date-box">
                    <p>
                      06 <br />
                      Feb
                    </p>
                  </div>
                </div>
                <div className="news-one__content">

                  <h3 className="news-one__title">
                    <a href="blogone.html">The Role of Innovation in Driving Business Success?</a>
                  </h3>
                  <div className="news-one__read-more">
                    <a href="blogone.html" className="news-one__read-more-btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

              <div className="news-one__single">
                <div className="news-one__img">
                  <img src="assets/images/blog/news-one-img-2.jpg" alt="" />
                  <a href="blogtwo.html">
                    <span className="news-one__plus"></span>
                  </a>
                  <div className="news-one__date-box">
                    <p>
                      19 <br />
                      Feb
                    </p>
                  </div>
                </div>
                <div className="news-one__content">

                  <h3 className="news-one__title">
                    <a href="blogtwo.html">The Impact of Artificial Intelligence on Business</a>
                  </h3>

                  <div className="news-one__read-more">
                    <a href="blogtwo.html" className="news-one__read-more-btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">

              <div className="news-one__single">
                <div className="news-one__img">
                  <img src="assets/images/blog/news-one-img-3.jpg" alt="" />
                  <a href="blogthree.html">
                    <span className="news-one__plus"></span>
                  </a>
                  <div className="news-one__date-box">
                    <p>
                      01 <br />
                      March
                    </p>
                  </div>
                </div>
                <div className="news-one__content">

                  <h3 className="news-one__title">
                    <a href="blogthree.html">Embracing Digital Transform in Business
                    </a>
                  </h3>
                  <div className="news-one__read-more">
                    <a href="blogthree.html" className="news-one__read-more-btn">Read More</a>
                  </div>
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
              <a href="contact.html" className="ctabtn">Get Free Quote Now</a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Home;
