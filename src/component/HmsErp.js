import React from "react";
import { NavLink } from "react-router-dom";
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/Bunnie.png";
import Servicerow from "../component/Servicerow";
import HMS from '../Assets/Images/CodesBunny/Hospital.png'
import ERP from '../Assets/Images/CodesBunny/ERP.png'
import lms from '../Assets/Images/CodesBunny/LMS.png'
import '../Assets/Style/Hms.css'


const HmsErp = () => {
  return (
    <>
      <section className="aboutMainHero">
        <div className="aboutHeroContainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="aboutHeroContent">
                <h2>Crafting Digital Solutions at CodesBunny</h2>
                <p>
                  We specialize in creating exceptional online experiences
                  through our comprehensive range of services.
                </p>
                <ul>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Wide range of digital
                    services
                  </li>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Exceptional online
                    experiences
                  </li>
                  <li>
                    <img src={Tick} decoding="async" alt="Tick icon" /> Expertise with user
                    understanding
                  </li>
                </ul>
                <NavLink to="/about" className="aboutHeroBtn">
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src={Bunny}
                alt="Animated bunny"
                style={{ height: '450px' }}
                className="aboutAnimatedImage"
              />
            </div>
          </div>
        </div>
      </section>

      <Servicerow />

      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 custom-img-col-left">
              <div className="news-details__img" data-aos="zoom-in">
                <img src={HMS} alt="Web Development" decoding="async" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="news-details__content">
                  <h3 className="serWebcontenttitle">Hospital Management System (HMS)</h3>
                  <p className="serWebtext1">

                    Our HMS streamlines healthcare by managing patient info, appointments, billing, and records. It improves communication, reduces errors, and lets providers focus more on care than admin tasks.
                    <br /><br />
                    <strong style={{ color: '#00C9FF' }}>Requirements Gathering:</strong> Understanding the client's objectives and defining the project scope.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Design & Architecture:</strong> Designing a user-friendly interface and scalable architecture.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Development:</strong> Bringing the design to life with robust coding practices.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Testing & Quality Assurance:</strong> Ensuring the app functions flawlessly across different devices and operating systems.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Deployment & Support:</strong> Launching the app and providing ongoing support for maintenance and updates.
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
                  <h3 className="serWebcontenttitle">Enterprise Resource Planning (ERP)</h3>
                  <p className="serWebtext1">
                    Our ERP solutions integrate all business operations into a single system, enhancing productivity and decision-making. By streamlining processes and providing real-time insights, our ERP helps reduce costs, improve efficiency, and gain a competitive edge.
                    <br /><br />
                    <strong style={{ color: '#00C9FF' }}>Requirements Gathering:</strong> Understanding the client's objectives and defining the project scope.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Design & Architecture:</strong> Designing a user-friendly interface and scalable architecture.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Development:</strong> Bringing the design to life with robust coding practices.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Testing & Quality Assurance:</strong> Ensuring the app functions flawlessly across different devices and operating systems.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Deployment & Support:</strong> Launching the app and providing ongoing support for maintenance and updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 custom-img-col-left">
              <div className="news-details__img" data-aos="zoom-in">
                <img src={ERP} alt="Web Development" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 custom-img-col-left">
              <div className="news-details__img" data-aos="zoom-in">
                <img src={lms} alt="Web Development" decoding="async" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="news-details__left">
                <div className="news-details__content">
                  <h3 className="serWebcontenttitle">Learning Management System (LMS)</h3>
                  <p className="serWebtext1">
                    Our LMS delivers and tracks educational programs for institutions and businesses, supporting e-learning, instructor-led, and blended learning. It offers course management, progress tracking, assessments, and certification, ensuring engaging experiences and effective tools for educators.
                    <br /><br />
                    <strong style={{ color: '#00C9FF' }}>Requirements Gathering:</strong> Understanding the client's objectives and defining the project scope.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Design & Architecture:</strong> Designing a user-friendly interface and scalable architecture.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Development:</strong> Bringing the design to life with robust coding practices.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Testing & Quality Assurance:</strong> Ensuring the app functions flawlessly across different devices and operating systems.
                    <br />
                    <strong style={{ color: '#00C9FF' }}>Deployment & Support:</strong> Launching the app and providing ongoing support for maintenance and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HmsErp;
