import React from "react";
import { NavLink } from "react-router-dom";
import Tick from "../Assets/Images/CodesBunny/tick.png";
import Bunny from "../Assets/Images/CodesBunny/herobunny.png";
import Servicerow from "../component/Servicerow";
import HMS from '../Assets/Images/CodesBunny/hms.jpg'
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
                    <img src={Tick} alt="Tick icon" /> Wide range of digital
                    services
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Exceptional online
                    experiences
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Expertise with user
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
                className="aboutAnimatedImage"
              />
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
          <img src={HMS} alt="" />
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 custom-text-col-right" id="text1">
        <div className="custom-news-text-wrapper">
          <div className="custom-news-text-content">
            <h3 className="custom-news-title">Hospital Management System (HMS)</h3>
            <p className="custom-news-description">
              Our Hospital Management System (HMS) is designed to
              streamline and enhance the operations of healthcare
              facilities. It offers a comprehensive suite of tools that
              manage patient information, appointments, billing, and
              medical records with ease and precision. Our HMS ensures
              seamless communication between departments, reducing errors
              and improving patient care. With features like electronic
              health records (EHR), patient management, and automated
              billing, healthcare providers can focus more on patient care
              and less on administrative tasks.
            </p>
            <ul>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Wide range of digital
                    services
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Exceptional online
                    experiences
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Expertise with user
                    understanding
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
            <h3 className="custom-news-title">Enterprise Resource Planning (ERP)</h3>
            <p className="custom-news-description">
              Our Enterprise Resource Planning (ERP) solutions integrate
              all facets of your business operations into one cohesive
              system. From finance and human resources to supply chain
              management and customer relations, our ERP systems provide a
              centralized platform that boosts productivity and
              decision-making. By streamlining processes and providing
              real-time data insights, our ERP solutions help businesses
              reduce costs, improve efficiency, and gain a competitive
              edge.
            </p>
            <ul>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Wide range of digital
                    services
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Exceptional online
                    experiences
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Expertise with user
                    understanding
                  </li>
                </ul>
          </div>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 custom-img-col-right" id="img2">
        <div className="custom-news-img">
        <img src={HMS} alt="" />
                </div>
      </div>
    </div>

    <div className="custom-news-row">
      <div className="col-xl-5 col-lg-6 custom-img-col-left" id="img3">
        <div className="custom-news-img">
        <img src={HMS} alt="" />
        </div>
      </div>
      <div className="col-xl-7 col-lg-6 custom-text-col-right" id="text3">
        <div className="custom-news-text-wrapper">
          <div className="custom-news-text-content">
            <h3 className="custom-news-title">Learning Management System (LMS)</h3>
            <p className="custom-news-description">
              Our Learning Management System (LMS) is a powerful platform
              designed to deliver, manage, and track educational and
              training programs. Ideal for educational institutions,
              corporations, and training providers, our LMS supports
              various learning modalities, including e-learning,
              instructor-led training, and blended learning. Features
              include course management, progress tracking, assessments,
              and certification. Our LMS empowers learners with engaging
              and effective learning experiences while providing educators
              and trainers with the tools they need to succeed.
            </p>
            <ul>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Wide range of digital
                    services
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Exceptional online
                    experiences
                  </li>
                  <li>
                    <img src={Tick} alt="Tick icon" /> Expertise with user
                    understanding
                  </li>
                </ul>
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
