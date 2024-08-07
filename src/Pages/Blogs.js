import React from "react";
import Servicerow from "../component/Servicerow";
import { NavLink } from "react-router-dom";
import BlogData from "../component/BlogData";
import '../Assets/Style/Blog.css'


const Blogs = () => {

    return (
        <>
         <section className="ContactHero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="ContactHeroContent" data-aos="zoom-in">
                                <h1>Empowering Innovation Through Technology</h1>
                                <p>
                                Discover how technology can revolutionize your world. Explore the latest trends, insights, and best practices to drive innovation and achieve your goals.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Servicerow />

            
            <section className="news-one">
      <div className="news-one__background"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 blog-header">
            <h2>Stay Informed with Our Blog</h2>
            
          </div>
        </div>
        <div className="row">
          {BlogData.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="news-one__single">
                <div className="news-one__img">
                  <img src={item.imgsrc} alt={item.title} />
                </div>
                <div className="news-one__content">
                  <h3 className="news-one__title">
                    {item.title}
                  </h3>
                  <p>{item.date || 'Date not available'}</p> {/* Display the date if available */}
                  <NavLink
                    to={item.link}
                    className="news-one__read-more-btn"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>

    <section className="blogbtn">
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 aboutcta">
              <NavLink to="/contact" className="aboutctaa" >
                Get Free Qoute Now
              </NavLink>
            </div>
          </div>
        </div>
    </section>

  
      

  </>
  );
}

export default Blogs;
