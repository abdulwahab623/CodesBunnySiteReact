import React from "react";
//  import Contactus from '../Assets/Images/CodesBunny/Contactus.png'
import Servicerow from "../component/Servicerow";
import "../Assets/Style/ContactUs.css";
import bun from '../Assets/Images/CodesBunny/Officiallogobg.png';
const Contact = () => {
  return (
    <>
      <section className="ContactHero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="ContactHeroContent" data-aos="zoom-in">
                <h1>Having Questions? Contact Us</h1>
                <p>
                  We're here to assist you with any questions, concerns, or
                  inquiries you may have. Whether you need information about our
                  products, services, or require technical support, our
                  dedicated team is ready to help. Please feel free to contact
                  us using the information provided below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Servicerow />

      <section className="contact-page">
        <div className="container">
            <div className="row">
                <div className="col-12 mainheading">
                    <h2>Write Message to Us <img src={bun} className="blink-image" style={{width:'50px'}} alt="bunny" /></h2>
                </div>
            </div>
          <div className="row">
            <div className="col-12 maincontact">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col=md-6 col-sm-12 mainform">
                  <div className="contact-page__right">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 formtop">
                        <h2>Get in Touch </h2>
                        <p>
                          Have question, comments or feedback ? We'd love to
                          hear from you.
                        </p>
                      </div>
                    </div>
                    <form
                      action="assets/inc/sendemail.php"
                      className="comment-one__form contact-form-validated"
                      noValidate="novalidate"
                    >
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label labelss"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="fullname"
                          value=""
                          onChange=""
                          placeholder="Enter your name"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label labelss"
                        >
                          Phone{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value=""
                          onChange=""
                          placeholder="Enter your mobile number"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label labelss"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value=""
                          onChange=""
                          placeholder="name@example.com"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label labelss"
                        >
                          {" "}
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value=""
                          onChange=""
                          placeholder="Enter your address"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label labelss"
                        >
                          FeedBack{" "}
                        </label>
                        <textarea
                          className="form-control"
                          id="feedback"
                          rows="3"
                          name="feedback"
                          value=""
                          onChange=""
                          placeholder="Drop your Feedback"
                          autoComplete="off"
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn-warning" type="submit">
                          Submit form
                        </button>
                      </div>
                    </form>
                    <div className="result"></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        Contact with us
                      </span>
                      <h2 className="section-title__title">
                        Write Message to Company
                      </h2>
                    </div>
                    <p className="contact-page__text">
                      Lorem ipsum is simply free text available the market dolor
                      sit amet, consectetur notted adipisicing elit sed do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-details">
        <div className="container">
          <div className="contact-details__inner">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single">
                  <div className="contact-details__icon">
                    <span className="icon-map"></span>
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">
                      Visit Our Store
                    </p>
                    <h5>66 Road Broklyn Street, New York</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single contact-details__single-2">
                  <div className="contact-details__icon">
                    <span className="icon-email-1"></span>
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Send Email</p>
                    <h4>
                      <a href="mailto:needhelp@company.com">
                        needhelp@company.com
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single contact-details__single-3">
                  <div className="contact-details__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Call Anytime</p>
                    <h4>
                      <a href="tel:926668880000">+ 92 666 888 0000</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <hr />
      <section className="feature-one">
        <div className="feature-one__bottom">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-one__bottom-inner">
                <p>
                  IT services built specifically for your business.
                  <a href="services.html">Find Your Solution</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="contact-page-google-map__one" allowFullScreen></iframe> */}
      </section>
    </>
  );
};

export default Contact;
