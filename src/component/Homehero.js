import React from "react";
import '../Assets/Style/Hero.css'
import { NavLink } from "react-router-dom";
import Herobunny from '../Assets/Images/CodesBunny/Bunnie.png'
import Tick from '../Assets/Images/CodesBunny/tick.png';

const Homehero = () => {
  return (
    <>
      <section className="mainHero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="HeroContent" >
                <h2>Welcome to Codesbunny Where Innovation Meets Excellence</h2>
                <p>
                  At Codesbunny, we are passionate about turning ideas into reality through cutting-edge software
                  solutions and web development services.
                </p>
                <ul>
                  <li><img src={Tick} alt="tick" decoding="async" /> Transforming your unique ideas</li>
                  <li><img src={Tick} alt="tick" decoding="async" /> Help your business to stand out</li>
                  <li><img src={Tick} alt="tick" decoding="async" /> Keep your business competitive</li>
                </ul>
                <NavLink to="/about" className="herothmbtn"> Learn More</NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">

              <img src={Herobunny} alt="Herobunny" decoding="async" style={{ height: '450px' }} fetchpriority="high" className="animatedImage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homehero;
