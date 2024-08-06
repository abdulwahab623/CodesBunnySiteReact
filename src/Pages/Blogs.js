import React from "react";
import Servicerow from "../component/Servicerow";


const Blogs = () => {

    return (
        <>
         <section className="ContactHero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="ContactHeroContent" data-aos="zoom-in">
                                <h1>Having Questions? Contact Us</h1>
                                <p>
                                    We're here to assist you with any questions, concerns, or inquiries you may have. Whether you need information about our products, services, or require technical support, our dedicated team is ready to help. Please feel free to contact us using the information provided below.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Servicerow />

      

  </>
  );
}

export default Blogs;
