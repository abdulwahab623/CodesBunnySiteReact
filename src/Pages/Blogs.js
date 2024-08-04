import React from "react";
import Tick from "../Assets/Images/CodesBunny/tick.png";
import { NavLink } from "react-router-dom";
import Bunny from "../Assets/Images/CodesBunny/herobunny.png";
import Servicerow from "../component/Servicerow";


const Blogs = () => {

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
                    <img src={Tick} alt="tick" /> Wide range of digital services
                  </li>
                  <li>
                    <img src={Tick} alt="tick" /> Exceptional online experiences
                  </li>
                  <li>
                    <img src={Tick} alt="tick" /> Expertise with user
                    understanding
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

      

  </>
  );
}

export default Blogs;
