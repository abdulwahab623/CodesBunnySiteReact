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
      <h1>Our amazing people</h1>
<div class="container">
  <div class="faders">
    <div class="left"></div>
    <div class="right"></div>
  </div>

  <div class="items">
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
    </div>
    <div class="entry">
      <p class="name">John Doe</p>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Smiling person" />
      <p class="quote">"Man, I think this app freaking rocks and stuff. Dude."</p>
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
