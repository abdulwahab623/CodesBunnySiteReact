import React from "react";
import image7 from "../Assets/Images/CodesBunny/image7.png";
import image11 from "../Assets/Images/CodesBunny/image11.png";
import "../Assets/Style/abouthome.css";
import App from "../Assets/Images/CodesBunny/mobV.png";
import Web from "../Assets/Images/CodesBunny/WebV.png";
import Media from "../Assets/Images/CodesBunny/Media.png";
import { NavLink } from "react-router-dom";
import image10 from '../Assets/Images/CodesBunny/image10.png'
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Image9 from "../Assets/Images/CodesBunny/image9.png";

const Abouthome = () => {
  return (
    <>
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 abouthome">
              <h1> 4 Reasons to Choose Codesbunny</h1>
              <p>Get to Know About us</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-one__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <img src={image7} alt="" />
                  </div>
                  <div className="about-one__small-img">
                    <img src={image11} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <p className="about-one__text">
                  <strong style={{ color: "#13abd4" }}>
                    Customized Solutions:{" "}
                  </strong>
                  <br></br>
                  We provide tailored software and web development services to
                  meet the unique needs of your business, ensuring optimal
                  results and satisfaction.
                </p>
                <p className="about-one__text">
                  <strong style={{ color: "#13abd4" }}>Expert Team: </strong>
                  <br></br>
                  Our team of experienced professionals is dedicated to
                  delivering high-quality, innovative solutions that drive
                  growth and success for your business.
                </p>
                <p className="about-one__text">
                  <strong style={{ color: "#13abd4" }}>
                    Cutting-Edge Technology:{" "}
                  </strong>
                  <br></br>
                  Our team of experienced professionals is dedicated to
                  delivering high-quality, innovative solutions that drive
                  growth and success for your business.
                </p>
                <p className="about-one__text">
                  <strong style={{ color: "#13abd4" }}>
                    Comprehensive Support:{" "}
                  </strong>
                  <br></br>
                  We provide full support from initial consultation to
                  post-launch maintenance to ensure your project runs smoothly
                  and performs optimally.
                </p>

                <NavLink href="about.html" className="aboutHome__btn">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="sersection-title__title">
              Tailored Solutions for Your Business
            </h2>
            <span className="sersection-title__tagline">
              Designed to Elevate Your Success
            </span>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__icon">
                  <img className="im" src={Web} alt="App" />
                </div>
                <h3 className="services-one__title">
                  <a href="web.html">Web Development</a>
                </h3>
                <p className="services-one__text">
                  Web Development Enhance your online presence with custom
                  solutions. We build responsive, user-friendly websites that
                  drive engagement and conversions.
                </p>
                <div className="services-one__arrow">
                  <NavLink to="/about" className="SerBtn">
                    Learn More
                  </NavLink>
                  {/* <a href="web.html"><span className="icon-right-arrow"></span></a> */}
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="services-one__single">
                <div className="services-one__icon">
                  <img className="im" src={App} alt="App" />
                </div>
                <h3 className="services-one__title">
                  <a href="App.html">App Development</a>
                </h3>
                <p className="services-one__text">
                  Transform your ideas into powerful Android applications. Our
                  expert developers create feature-rich, high-performance apps
                  tailored to your business needs.
                </p>
                <div className="services-one__arrow">
                  <NavLink to="/about" className="SerBtn">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__icon">
                  <img className="im" src={Media} alt="App" />
                </div>
                <h3 className="services-one__title">
                  <a href="Digital.html">Digital Marketing</a>
                </h3>
                <p className="services-one__text">
                  Boost your brand's visibility and reach with our digital
                  marketing services. We offer SEO, social media marketing, and
                  PPC strategies to grow your business.
                </p>
                <div className="services-one__arrow">
                  <NavLink to="/about" className="SerBtn">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sharejoy">
        <div className="sharejoyinner">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                {/* <div className="share-the-joy__right"> */}
                <div className="sharejoyimgbox">
                  <div className="sharejoyimg wow fadeInRight">
                    <img src={Image9} alt="" className="float-bob-2" />
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="sharejoyleft">
                  <h2 className="sharejoytitle">
                    Custom IT Software Development
                  </h2>
                  <p className="sharejoypra">
                    Transforming Ideas into Tailored Solutions In today's
                    fast-paced digital landscape, businesses require unique
                    solutions to stand out and stay competitive.
                  </p>
                  <ul>
                    <li>
                      <img src={Tick} alt="tick" /> We specialize in
                      transforming your unique ideas into tailored solutions
                    </li>
                    <li>
                      <img src={Tick} alt="tick" /> Our services are designed to
                      help your business stand out
                    </li>
                    <li>
                      <img src={Tick} alt="tick" /> We offer customized
                      strategies to keep your business competitive and
                      adaptable.
                    </li>
                  </ul>
                  <NavLink to="details.html" className="sharejoybtn">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section class="improve-one">
<div class="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <h2 style={{color:'white', textAlign:'center', paddingTop:'40px'}}>What Your Business Needs</h2>
      <h4 style={{color:'#00C9FF', textAlign:'center', paddingTop:'20px'}}>strategies for Success</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-6">
      <div class="improve-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
        <div class="improve-one__img-box">
          <div class="improve-one__img">
            <img src={image10} alt="" />
          </div>
          <div class="improve-one__project-complete">
            <p>Grow business With <span>CodesBunny</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="improve-one__right">
        <ul class="list-unstyled improve-one__points">
          <li>
            <div class="icon">
              
            </div>
            <div class="text">
              <h3>For Small Businesses</h3>
              <p>
                Streamline productivity with custom software solutions that automate tasks, manage customer
                relationships, and provide data insights.
              </p>
            </div>
          </li>
          <li>
            <div class="icon">
              
            </div>
            <div class="text">
              <h3>For Medium-Sized Enterprises</h3>
              <p>

                Enhance efficiency with tailored software solutions that integrate seamlessly, supporting your
                business growth and flexibility.
              </p>
            </div>
          </li>
          <li>
            <div class="icon">
              
            </div>
            <div class="text">
              <h3>For Large Corporations</h3>
              <p>
                Leverage advanced technologies for competitive edge with custom software handling complex processes
                and ensuring security.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>


    </>
  );
};

export default Abouthome;
