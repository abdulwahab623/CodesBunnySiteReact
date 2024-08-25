import React, { useState } from "react";
import Servicerow from "../component/Servicerow";
import "../Assets/Style/ContactUs.css";
import bun from "../Assets/Images/CodesBunny/Officiallogobg.png";
import Bunny from '../Assets/Images/CodesBunny/contactBun.png';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [contactChannel, setContactChannel] = useState("");
  const [feedback, setFeedback] = useState("");
  const [result, setResult] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "companyname":
        setCompanyname(value);
        break;
      case "flexRadioDefault":
        setContactChannel(value);
        break;
      case "feedback":
        setFeedback(value);
        break;
      default:
        break;
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname,
      email,
      phone,
      companyname,
      contactChannel,
      feedback,
    };

    try {
      const response = await fetch("../Assets/inc/Contactback.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        setResult("Data saved and email sent!"); // Set success message
      } else {
        setResult("Error: Could not send data. Please try again."); // Set error message
      }
    } catch (error) {
      setResult("Error: " + error.message); // Handle network errors
    }

    // Reset form fields after submission
    setFullname("");
    setEmail("");
    setPhone("");
    setCompanyname("");
    setContactChannel("");
    setFeedback("");
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
                      onSubmit={handlesubmit}
                      className="comment-one__form contact-form-validated"
                      noValidate="novalidate"
                    >
                      <div className="mb-3">
                        <label className="form-label labelss">Full name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          value={fullname}
                          onChange={handlechange}
                          placeholder="Enter your name"
                          required
                          autoComplete="off"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label labelss">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={handlechange}
                          placeholder="name@example.com"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label labelss">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          value={phone}
                          onChange={handlechange}
                          placeholder="Enter your mobile number"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label labelss">Company name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="companyname"
                          value={companyname}
                          onChange={handlechange}
                          placeholder="Enter your company name"
                          required
                          autoComplete="off"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label labels">
                          What communication channel do you prefer?
                        </label>
                        <div>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Email"
                            name="flexRadioDefault"
                            onChange={handlechange}
                            id="flexRadioDefault1"
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Email
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Phone Call"
                            name="flexRadioDefault"
                            onChange={handlechange}
                            id="flexRadioDefault2"
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Phone Call
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            value="WhatsApp"
                            name="flexRadioDefault"
                            onChange={handlechange}
                            id="flexRadioDefault3"
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault3">
                            WhatsApp
                          </label>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label labelss">Feedback</label>
                        <textarea
                          className="form-control"
                          name="feedback"
                          rows="3"
                          value={feedback}
                          onChange={handlechange}
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
                    {result && <p>{result}</p>} {/* Display submission result message */}
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