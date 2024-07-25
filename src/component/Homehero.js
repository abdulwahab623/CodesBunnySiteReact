import React from "react";
import Banna1 from '../Images/CodesBunny/banna1.png'


const Homehero = () => {

    return (
        <>
  <section className="main-slider">
            <div className="image-layer" style={{ backgroundImage: `url(${Banna1})` }}></div>
            <div className="image-layer-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider__content">
                    <h2>Welcome to Codesbunny <br /> Where Innovation Meets Excellence</h2>
                    <p>
                      At Codesbunny, we are passionate about turning ideas into reality through cutting-edge software
                      solutions and web development services.
                    </p>
                    <a href="about.html" className="sliderthm-btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
    
          {/* Add more SwiperSlides if needed */}
    

        <div id="main-slider-pagination" className="swiper-pagination"></div>
        <div id="main-slider__swiper-button-next" className="swiper-button-next"></div>
        <div id="main-slider__swiper-button-prev" className="swiper-button-prev"></div>
      </section>
  </>
  );
}

export default Homehero;
