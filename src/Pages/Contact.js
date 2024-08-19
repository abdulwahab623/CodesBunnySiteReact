import React from "react";
//  import Contactus from '../Assets/Images/CodesBunny/Contactus.png'
import Servicerow from "../component/Servicerow";
import "../Assets/Style/ContactUs.css";
import { NavLink } from "react-router-dom";
import Mail from "../Assets/Images/CodesBunny/mailvector.png";
import location from '../Assets/Images/CodesBunny/location.png'
import phone from '../Assets/Images/CodesBunny/phone.png'
import bun from "../Assets/Images/CodesBunny/Officiallogobg.png";
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
              <h2>
                Write Message to Us{" "}
                <img
                  src={bun}
                  className="blink-image"
                  style={{ width: "50px" }}
                  alt="bunny"
                />
              </h2>
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
                          Full name
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
                          E-mail
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
                          {" "}
                          Company name
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
                          className="form-label labels">
                          What communication channel do you prefer?
                        </label>
                        <div>
                          <input class="form-check-input" style={{ margin: '7px 10px 0 ' }} type="radio" value="Email" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" style={{ margin: '0 10px 0 ' }} for="flexRadioDefault1">
                            Email
                          </label>
                          <input class="form-check-input" style={{ margin: '7px 10px 0 ' }} type="radio" value="Phone Call" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" style={{ margin: '0 10px 0 ' }} for="flexRadioDefault1">
                            Phone Call
                          </label>
                          <input class="form-check-input" style={{ margin: '7px 10px 0 ' }} type="radio" value="Whatsapp" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" style={{ margin: '0 10px 0 ' }} for="flexRadioDefault1">
                            Whatsapp </label>
                        </div>

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
                        <button className="btn nav-btnn" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
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
                    <NavLink to="mailto:your-email@example.com" >
                      <img src={location} decoding="async" style={{ width: '50px' }} alt="email" />
                    </NavLink>
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">
                      Visit Our Office
                    </p>
                    <h5>Gulshan e Madina p-46 B Sargodha Road near Kia Moters Faisalabad, Punjab Pakistan</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single contact-details__single-2">
                  <div className="contact-details__icon">
                    <NavLink to="mailto:your-email@example.com" >
                      <img src={Mail} decoding="async" style={{ width: '30px' }} alt="email" />
                    </NavLink>
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
                    <NavLink to="mailto:your-email@example.com" >
                      <img src={phone} decoding="async" style={{ width: '70px' }} alt="email" />
                    </NavLink>
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Call Anytime</p>
                    <h4>
                      <a href="tel:923080044190">+92 308 0044190</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Contact;
