import React, { useState } from "react";
import Servicerow from "../component/Servicerow";
import "../Assets/Style/ContactUs.css";
import bun from "../Assets/Images/CodesBunny/Officiallogobg.png";
import Bunny from '../Assets/Images/CodesBunny/contactBun.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    companyname: "",
    contactChannel: "",
    feedback: "",
  });
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("src/Assets/inc/Contactback.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult("Data saved and email sent!");
        setError("");
      } else {
        setResult("");
        setError("Error: Could not send data. Please try again.");
      }
    } catch (error) {
      setResult("");
      setError("Error: " + error.message);
    }

    // Reset form fields after submission
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      companyname: "",
      contactChannel: "",
      feedback: "",
    });
  };

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
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mainform">
                  <div className="contact-page__right">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 formtop">
                        <h2>Get in Touch </h2>
                        <p>
                          Have questions, comments, or feedback? We'd love to
                          hear from you.
                        </p>
                      </div>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="comment-one__form contact-form-validated"
                      noValidate="novalidate"
                    >
                      <div className="mb-3">
                        <label className="form-label">Full name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your mobile number"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Company name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyname"
                          value={formData.companyname}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          Preferred communication channel?
                        </label>
                        <div>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Email"
                            name="contactChannel"
                            onChange={handleInputChange}
                            id="contactChannelEmail"
                            aria-label="Email"
                          />
                          <label className="form-check-label" htmlFor="contactChannelEmail">
                            Email
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Phone Call"
                            name="contactChannel"
                            onChange={handleInputChange}
                            id="contactChannelPhone"
                            aria-label="Phone Call"
                          />
                          <label className="form-check-label" htmlFor="contactChannelPhone">
                            Phone Call
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="WhatsApp"
                            name="contactChannel"
                            onChange={handleInputChange}
                            id="contactChannelWhatsApp"
                            aria-label="WhatsApp"
                          />
                          <label className="form-check-label" htmlFor="contactChannelWhatsApp">
                            WhatsApp
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Feedback</label>
                        <textarea
                          className="form-control"
                          name="feedback"
                          rows="3"
                          value={formData.feedback}
                          onChange={handleInputChange}
                          placeholder="Drop your Feedback"
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button className="btn nav-btnn" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                    {result && <p className="text-success">{result}</p>}
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__left">
                    <div className="section-title text-left">
                      <img src={Bunny} alt="Web Development" decoding="async" />
                      <span className="section-title__tagline" style={{ color: '#ffffff' }}>
                        Contact with us
                      </span>
                      <h2 className="section-title__title" style={{ color: '#198ba8' }}>
                        Write Message to Company
                      </h2>
                      <p className="contact-page__text">
                        We're here to help! Please fill out the form below to send us a message, and our team will get back to you as soon as possible. Whether you have a question, feedback, or need assistance, we're just a message away.
                      </p>
                    </div>
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
