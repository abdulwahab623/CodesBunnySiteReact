import React from 'react';
import { NavLink } from 'react-router-dom';
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/Bunnie.png";
import Servicerow from "../component/Servicerow";
import Marketing from '../Assets/Images/CodesBunny/DigitalMar.png';
import content from '../Assets/Images/CodesBunny/ContentWri.png';


const Content = () => {
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
              <img src={Bunny} decoding="async" alt="Animated bunny" style={{ height: '450px' }} className="aboutAnimatedImage" />
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
                <img src={Marketing} alt="Web Development" decoding="async" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="serWebcontent">
                  <h3 className="serWebcontenttitle">Digital Marketing</h3>
                  <p className="serWebtext1">
                    Our digital marketing services aim to boost your brand's visibility and reach through various online channels. Our comprehensive approach includes:
                    <br /><br />
                    <img src={Tick} decoding="async" alt="Tick icon" /> Improving your website's ranking on search engines to attract organic traffic.
                    <br></br>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Creating targeted ad campaigns to drive immediate traffic and conversions.
                    <br></br>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Developing high-quality, engaging content to attract and retain your audience.
                    <br></br>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Leveraging social media platforms to build brand awareness and engage with your audience.
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
                  <h3 className="serWebcontenttitle">Content Writing</h3>
                  <p className="serWebtext1">
                    Our content writing services focus on creating compelling, SEO-optimized content that resonates with your audience. We provide:
                    <br /><br />
                    <img src={Tick} decoding="async" alt="Tick icon" /> Engaging and informative articles that drive organic traffic.
                    <br />
                    <img src={Tick} decoding="async" alt="Tick icon" /> Clear and persuasive content that communicates your brand message.
                    <br />
                    <img src={Tick} decoding="async" alt="Tick icon" /> Detailed and appealing descriptions that highlight your products' features and benefits.
                    <br />
                    <img src={Tick} decoding="async" alt="Tick icon" /> Creative and engaging posts that foster audience interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="news-details__img" data-aos="zoom-in">
                <img src={content} alt="Web Development" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Content;
