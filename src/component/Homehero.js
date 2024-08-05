import React from "react";
import '../Assets/Style/Hero.css'
import { NavLink } from "react-router-dom";
import Herobunny from '../Assets/Images/CodesBunny/herobunny.png'
import Tick from '../Assets/Images/CodesBunny/tick.png';

const Homehero = () => {

  return (
    <>
      <section className="mainHero">
        <div className="Herocontainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="HeroContent" data-aos="zoom-in">
                <h2>Welcome to Codesbunny Where Innovation Meets Excellence</h2>
                <p>
                At Codesbunny, we are passionate about turning ideas into reality through cutting-edge software
                solutions and web development services.
              </p>
              <ul>
                <li><img src={Tick} alt="tick" /> Transforming your unique ideas</li>
                <li><img src={Tick} alt="tick" /> Help your business to stand out</li>
                <li><img src={Tick} alt="tick" /> Keep your business competitive</li>
              </ul>
                <NavLink to="/about" className="herothmbtn">Learn More</NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              
              <img src={Herobunny} alt=""  className="animatedImage"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homehero;
