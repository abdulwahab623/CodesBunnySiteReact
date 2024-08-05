import React from 'react';
import { NavLink } from 'react-router-dom';
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/herobunny.png";
import Servicerow from "../component/Servicerow";
import Seo from '../Assets/Images/CodesBunny/SEO.png';
import Aso from '../Assets/Images/CodesBunny/ASO.png';


const SeoAso = () => {
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
          <img src={Seo} alt="" />
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 custom-text-col-right" id="text1">
        <div className="custom-news-text-wrapper">
          <div className="custom-news-text-content">
            <h3 className="custom-news-title">Search Engine Optimization</h3>
            <p className="custom-news-description">
            Our SEO services are designed to improve your website's visibility and ranking on search engines. We employ various techniques, including:
            </p>
            <ul>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Identifying the most relevant and high-performing keywords for your business.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Optimizing website content, meta tags, and HTML code for search engines.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Building high-quality backlinks and improving your website's domain authority.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Enhancing website speed, mobile-friendliness, and overall user experience.
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
            <h3 className="custom-news-title">App Store Optimization</h3>
            <p className="custom-news-description">
            Our ASO services help improve your app's visibility and ranking in app stores. We focus on:        
               </p>
            <ul>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Identifying and incorporating relevant keywords in your app's title and description.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Encouraging positive reviews and ratings to boost your app's credibility.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Creating compelling icons, screenshots, and videos to attract users.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Adapting your app's listing for different languages and regions to reach a broader audience.
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Seamlessly deploying the App and providing ongoing support to address any issues.
                  </li>
                </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 custom-img-col-right" id="img2">
        <div className="custom-news-img">
        <img src={Aso} alt="" />
                </div>
      </div>
    </div>
    </div>
    </section>
    </>
  );
};

export default SeoAso;
