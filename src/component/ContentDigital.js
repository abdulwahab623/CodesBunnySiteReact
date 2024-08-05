import React from 'react';
import { NavLink } from 'react-router-dom';
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/herobunny.png";
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
                    <img src={Tick} alt="Tick icon" /> Wide range of digital services
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Exceptional online experiences
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Expertise with user understanding
                  </li>
                </ul>
                <NavLink to="/about" className="aboutHeroBtn">
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={Bunny} alt="Animated bunny" className="aboutAnimatedImage" />
            </div>
          </div>
        </div>
      </section>

      <Servicerow />

      <section className="custom-news-section">
        <div className="container">
          <div className="custom-news-row">
            <div className="col-xl-5 col-lg-6 custom-img-col-left" id="img1">
              <div className="custom-news-img">
                <img src={Marketing} alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 custom-text-col-right" id="text1">
              <div className="custom-news-text-wrapper">
                <div className="custom-news-text-content">
                  <h3 className="custom-news-title">Digital Marketing</h3>
                  <p className="custom-news-description">
                    Our digital marketing services aim to boost your brand's visibility and reach through various online channels. Our comprehensive approach includes:
                  </p>
                  <ul>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Improving your website's ranking on search engines to attract organic traffic.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Creating targeted ad campaigns to drive immediate traffic and conversions.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Developing high-quality, engaging content to attract and retain your audience.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Leveraging social media platforms to build brand awareness and engage with your audience.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-news-row">
            <div className="col-xl-7 col-lg-6 custom-text-col-left" id="text2">
              <div className="custom-news-text-wrapper">
                <div className="custom-news-text-content">
                  <h3 className="custom-news-title">Content Writing</h3>
                  <p className="custom-news-description">
                    Our content writing services focus on creating compelling, SEO-optimized content that resonates with your audience. We provide:            </p>
                  <ul>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Engaging and informative articles that drive organic traffic.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Clear and persuasive content that communicates your brand message.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Detailed and appealing descriptions that highlight your products' features and benefits.
                    </li>
                    <li>
                      <img src={Tick} alt="Tick icon" /> Creative and engaging posts that foster audience interaction.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 custom-img-col-right" id="img2">
              <div className="custom-news-img">
                <img src={content} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
