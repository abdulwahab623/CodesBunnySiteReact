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
              <img src={Bunny} alt="Animated bunny" decoding="async" style={{height:'450px'}}   className="aboutAnimatedImage" />
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
                <img src={data} decoding="async" alt="Data" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 custom-text-col-right" id="text1">
              <div className="custom-news-text-wrapper">
                <div className="custom-news-text-content">
                  <h3 className="custom-news-title">Data Sciences</h3>
                  <p className="custom-news-description">
                    Our web development services encompass the creation of dynamic, responsive, and user-friendly websites. Utilizing technologies such as HTML5, CSS3, JavaScript frameworks (React, Angular, Vue.js), and server-side languages (Node.js, Python, PHP), we build websites that are optimized for performance, security, and scalability. Our web development process includes:
                  </p>
                  <ul>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Understanding the client's needs and defining the project scope.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Creating a comprehensive design and architecture plan that ensures a seamless user experience.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Implementing the design using cutting-edge technologies and best practices.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Conducting rigorous testing to ensure the website meets the highest standards of quality.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Seamlessly deploying the website and providing ongoing support to address any issues.
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
                  <h3 className="custom-news-title">Cyber Security</h3>
                  <p className="custom-news-description">
                    Our app development services focus on creating feature-rich, high-performance mobile applications for Android and iOS platforms. Utilizing technologies such as Java, Kotlin, Swift, and Flutter, we deliver apps that are tailored to meet the unique needs of our clients. Our app development process includes:
                  </p>
                  <ul>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Understanding the client's needs and defining the project scope.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Creating a comprehensive design and architecture plan that ensures a seamless user experience.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Implementing the design using cutting-edge technologies and best practices.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Conducting rigorous testing to ensure the website meets the highest standards of quality.
                    </li>
                    <li>
                      <img src={Tick} decoding="async" alt="Tick icon" /> Seamlessly deploying the website and providing ongoing support to address any issues.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 custom-img-col-right" id="img2">
              <div className="custom-news-img">
                <img src={Cyber } decoding="async" alt="Cyber" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Datacyber;
