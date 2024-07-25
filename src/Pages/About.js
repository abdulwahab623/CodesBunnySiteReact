import React from "react";
import { NavLink } from "react-router-dom";
import '../Assets/Style/About.css';
import Navbar from "../component/NavBar";
import Footer from "../component/Footer";

const About = () => {
    return (
        <>
        <Navbar />
        
            <section className="page-header"> 
                <div className="page-header-bg" style={{ backgroundImage: 'url(assets/images/CodesBunny/image5.png)' }}>
                </div>
                <div className="page-header-bg-overly"></div>
          
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><span>/</span></li>
                            <li>About</li>
                        </ul>
                        <h2>About Us</h2>
                    </div>
                </div>
            </section>

            <section className="about-two">
                <div id="particles-js"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <div className="about-two__img">
                                    {/* <img src="assets/images/CodesBunny/image6.png" alt="" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Get to Know About us</span>
                                    <h2 className="section-title__title">We Believe that We Can Solve IT Problems</h2>
                                </div>
                                <p className="about-two__text-1">
                                    Codesbunny is a dynamic software house dedicated to providing cutting-edge solutions in application development and web development. Our team of skilled professionals is passionate about transforming ideas into reality, ensuring that each project is executed with precision and creativity.
                                    <br />
                                    At Codesbunny, we excel in a fast-paced digital world under our CEO's technical leadership. We deliver solutions that exceed client expectations through our commitment to excellence, innovation, and the latest technologies and methodologies.
                                    <br />
                                    Whether you need a custom application, a robust web platform, or comprehensive software solutions, Codesbunny is here to help your business succeed. We believe in building long-term partnerships based on trust, integrity, and mutual growth.
                                </p>
                                <br />
                                <NavLink to="" className="aboutHome__btn">Get Free Quote Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
