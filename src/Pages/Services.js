import React from "react";
import { NavLink } from "react-router-dom";
import Sdata from "../component/ServiceData";
import Bunny from "../Images/CodesBunny/herobunny.png";
import Servicerow from "../component/Servicerow";
import Tick from "../Images/CodesBunny/tick.png";


const Services = () => {

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
                    <img src={Tick} alt="tick" /> Wide range of digital services
                  </li>
                  <li>
                    <img src={Tick} alt="tick" /> Exceptional online experiences
                  </li>
                  <li>
                    <img src={Tick} alt="tick" /> Expertise with user understanding
                  </li>
                </ul>
                <NavLink to="/about" className="aboutHeroBtn">
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={Bunny} alt="" className="aboutAnimatedImage" />
            </div>
          </div>
        </div>
      </section>
      <Servicerow />
      
      <section className="services">
      <div className="container">
        <div className="row">
          {Sdata.map((service) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-one__single">
                <div className="services-one__icon">
                  <img className="im" src={service.imgsrc} alt={service.title} />
                </div>
                <h3 className="services-one__title">
                  <a href={service.link || "#"}>{service.title}</a>
                </h3>
                <p className="services-one__text">
                  {service.des}
                </p>
                <div className="services-one__arrow">
                  <NavLink to={service.link || "/about"} className="SerBtn">
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  </>
  );
}

export default Services;
