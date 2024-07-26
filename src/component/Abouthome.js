import React from "react";
import image7 from '../Images/CodesBunny/image7.png'
import image11 from '../Images/CodesBunny/image11.png'
import '../Assets/Style/All.css'

const Abouthome = () => {
  return (
    <section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 abouthome">
            <h1> 4 Reasons to Choose Codesbunny</h1>
            <p >Get to Know About us</p>
          </div>
        </div>
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
           
              <p className="about-one__text">
                <strong style={{ color: '#13abd4' }}>Customized Solutions: </strong>
                <br></br>
                We provide tailored software and web development services to
                meet the unique needs of your business, ensuring optimal
                results and satisfaction.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#13abd4' }}>Expert Team: </strong>
                <br></br>
                Our team of experienced professionals is dedicated to
                delivering high-quality, innovative solutions that drive
                growth and success for your business.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#13abd4' }}>Cutting-Edge Technology: </strong>
                <br></br>
                Our team of experienced professionals is dedicated to
                delivering high-quality, innovative solutions that drive
                growth and success for your business.
              </p>
              <p className="about-one__text">
                <strong style={{ color: '#13abd4' }}>Comprehensive Support: </strong>
                <br></br>
                We provide full support from initial consultation to
                post-launch maintenance to ensure your project runs smoothly
                and performs optimally.
              </p>
            
              <a href="about.html" className="aboutHome__btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
     </section>
  );
};

export default Abouthome;
