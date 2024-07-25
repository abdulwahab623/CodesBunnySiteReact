import React from "react";
import image7 from '../Images/CodesBunny/image7.png'
import image11 from '../Images/CodesBunny/image11.png'

const Abouthome = () => {
  return (
    <section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <img src={image7} alt="" />
                </div>
                <div className="about-one__small-img">
                  <img src={image11} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">Get to Know About us</span>
                <h2 className="Aboutsection-title__title">
                  Four Reasons to Choose Codesbunny
                </h2>
              </div>
              <p className="about-one__text">
                <strong style={{ color: '#333333' }}>Customized Solutions: </strong>
                We provide tailored software and web development services to
                meet the unique needs of your business, ensuring optimal
                results and satisfaction.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#333333' }}>Expert Team: </strong>
                Our team of experienced professionals is dedicated to
                delivering high-quality, innovative solutions that drive
                growth and success for your business.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#333333' }}>Cutting-Edge Technology: </strong>
                Our team of experienced professionals is dedicated to
                delivering high-quality, innovative solutions that drive
                growth and success for your business.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#333333' }}>Comprehensive Support: </strong>
                We provide full support from initial consultation to
                post-launch maintenance to ensure your project runs smoothly
                and performs optimally.
              </p>
              <div className="about-one__points-box">
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <div className="text">
                      <p className="about-one__text">
                        We believe in delivering exceptional value to our
                        customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <div className="text">
                      <p>We are passionate about turning ideas into reality.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <div className="text">
                      <p>
                        Transforming ideas into reality with tailored software
                        solutions for businesses.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="about.html" className="aboutHome__btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;
