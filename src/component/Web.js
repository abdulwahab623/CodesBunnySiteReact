import React from 'react';
import { NavLink } from 'react-router-dom';
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/Bunnie.png";
import Servicerow from "../component/Servicerow";
import web from '../Assets/Images/CodesBunny/web.png';
import App from '../Assets/Images/CodesBunny/AppDev.png';


const Web = () => {
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
              <img src={Bunny} alt="Animated bunny" style={{height:'450px'}}   className="aboutAnimatedImage" />
            </div>
          </div>
        </div>
      </section>

      <Servicerow />

      <section className="serWeb">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="serWebimg">
                <img src={web} alt="Web Development" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="serWebcontent">
                  <h3 className="serWebcontenttitle">Web Development</h3>
                  <p className="serWebtext1">
                    Our web development services encompass the creation of dynamic, responsive, and user-friendly websites. Utilizing technologies such as HTML5, CSS3, JavaScript frameworks (React, Angular, Vue.js), and server-side languages (Node.js, Python, PHP), we build websites that are optimized for performance, security, and scalability. Our web development process includes:
                    <br /><br />
                    <strong style={{ color: 'black' }}>Requirements Gathering:</strong> Understanding the client's needs and defining the project scope.
                    <br />
                    <strong style={{ color: 'black' }}>Design & Architecture:</strong> Creating a comprehensive design and architecture plan that ensures a seamless user experience.
                    <br />
                    <strong style={{ color: 'black' }}>Development:</strong> Implementing the design using cutting-edge technologies and best practices.
                    <br />
                    <strong style={{ color: 'black' }}>Testing & Quality Assurance:</strong> Conducting rigorous testing to ensure the website meets the highest standards of quality.
                    <br />
                    <strong style={{ color: 'black' }}>Deployment & Support:</strong> Seamlessly deploying the website and providing ongoing support to address any issues.
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
                  <h3 className="news-details__title">App Development</h3>
                  <p className="news-details__text-1">
                    Our app development services focus on creating feature-rich, high-performance mobile applications for Android and iOS platforms. Utilizing technologies such as Java, Kotlin, Swift, and Flutter, we deliver apps that are tailored to meet the unique needs of our clients. Our app development process includes:
                    <br /><br />
                    <strong style={{ color: 'black' }}>Requirements Gathering:</strong> Understanding the client's objectives and defining the project scope.
                    <br />
                    <strong style={{ color: 'black' }}>Design & Architecture:</strong> Designing a user-friendly interface and scalable architecture.
                    <br />
                    <strong style={{ color: 'black' }}>Development:</strong> Bringing the design to life with robust coding practices.
                    <br />
                    <strong style={{ color: 'black' }}>Testing & Quality Assurance:</strong> Ensuring the app functions flawlessly across different devices and operating systems.
                    <br />
                    <strong style={{ color: 'black' }}>Deployment & Support:</strong> Launching the app and providing ongoing support for maintenance and updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="news-details__img">
                <img src={App} alt="Web Development" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Web;
