import React from 'react';
import { NavLink } from 'react-router-dom';
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/Bunnie.png";
import Servicerow from "../component/Servicerow";
import data from '../Assets/Images/CodesBunny/DataScience.png';
import Cyber from '../Assets/Images/CodesBunny/CyberSecurity.png';


const Datacyber = () => {
  return (
    <>
      <section className="aboutMainHero">
        <div className="aboutHeroContainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="aboutHeroContent">
                <h2>Crafting Digital Solutions at CodesBunny</h2>
                <p>
                  We specialize in creating exceptional online experiences through our comprehensive range of services.
                </p>
                <ul>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Wide range of digital services
                  </li>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Exceptional online experiences
                  </li>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Expertise with user understanding
                  </li>
                </ul>
                <NavLink to="/about" className="aboutHeroBtn">
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={Bunny} alt="Animated bunny" decoding="async" style={{ height: '450px' }} className="aboutAnimatedImage" />
            </div>
          </div>
        </div>
      </section>

      <Servicerow />

      <section className="serWeb">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="serWebimg" data-aos="zoom-in">
                <img src={data} alt="Web Development" decoding="async" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="serWebcontent">
                  <h3 className="serWebcontenttitle">Data Sciences</h3>
                  <p className="serWebtext1">
                    Our SEO services are designed to improve your website's visibility and ranking on search engines. We employ various techniques, including:
                    <br /><br />
                    <img src={Tick} alt="Tick icon" decoding="async" /> Identifying the most relevant and high-performing keywords for your business.
                    <br></br>
                    <img src={Tick} alt="Tick icon" decoding="async" /> Optimizing website content, meta tags, and HTML code for search engines.
                    <br></br>
                    <img src={Tick} alt="Tick icon" decoding="async" /> Building high-quality backlinks and improving your website's domain authority.
                    <br></br>
                    <img src={Tick} alt="Tick icon" decoding="async" /> Enhancing website speed, mobile-friendliness, and overall user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="news-details__content">
                  <h3 className="serWebcontenttitle">Cyber Security</h3>
                  <p className="serWebtext1">
                    Our ASO services help improve your app's visibility and ranking in app stores. We focus on:
                    <br /><br />
                    <img src={Tick} alt="Tick icon" decoding="async" /> Identifying and incorporating relevant keywords in your app's title and description.
                    <br />
                    <img src={Tick} alt="Tick icon" decoding="async" /> Encouraging positive reviews and ratings to boost your app's credibility.
                    <br />
                    <img src={Tick} alt="Tick icon" decoding="async" /> Creating compelling icons, screenshots, and videos to attract users.
                    <br />
                    <img src={Tick} alt="Tick icon" decoding="async" /> Seamlessly deploying the App and providing ongoing support to address any issues.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="news-details__img" data-aos="zoom-in">
                <img src={Cyber} alt="Web Development" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Datacyber;
