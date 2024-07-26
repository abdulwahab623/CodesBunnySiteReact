import React from "react";
import Banna1 from '../Images/CodesBunny/banna1.png'
import '../Assets/Style/Hero.css'
import { NavLink } from "react-router-dom";


const Homehero = () => {

    return (
        <>
      <section className="mainHero">
      <div className="imageLayerHero" style={{ backgroundImage: `url(${Banna1})` }}></div>
      <div className="imageHeroOverlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="HeroContent">
              <h2>Welcome to Codesbunny <br /> Where Innovation Meets Excellence</h2>
              <p>
                At Codesbunny, we are passionate about turning ideas into reality through cutting-edge software
                solutions and web development services.
              </p>
              <NavLink to="/about" className="herothm-btn">Learn More</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Homehero;
