import React from "react";
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
 import Contactus from '../Images/CodesBunny/Contactus.png'

const Contact = () => {

    return (
        <>
            <Navbar />
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: `url(${Contactus})` }}> 
                </div>
                <div className="page-header-bg-overly"></div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>Contact Us</li>
                        </ul>
                        <h2>Get in touch</h2>
                    </div>
                </div>
            </section>

            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-page__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Contact with us</span>
                                    <h2 className="section-title__title">Write Message to Company</h2>
                                </div>
                                <p className="contact-page__text">Lorem ipsum is simply free text available the market dolor sit
                                    amet, consectetur notted adipisicing elit sed do.</p>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="contact-page__right">
                                <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <label>Full Name</label>
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Full Name" name="name"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <label>Email</label>
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email Address" name="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <label>Phone</label>
                                            <div className="comment-form__input-box">
                                                <input type="number" placeholder="Phone Number" name="phone"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <label>Company Name</label>
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Company Name" name="company"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <label>What communication channel do you prefer?</label>
                                            <div className="comment-form__input-box">
                                                <input className="form-check-input" type="radio" value="Email" name="communicationChannel" id="communicationEmail"/>
                                                <label className="form-check-label" htmlFor="communicationEmail">
                                                    Email
                                                </label>
                                                <input className="form-check-input" type="radio" value="Phone Call" name="communicationChannel" id="communicationPhoneCall"/>
                                                <label className="form-check-label" htmlFor="communicationPhoneCall">
                                                    Phone Call
                                                </label>
                                                <input className="form-check-input" type="radio" value="Whatsapp" name="communicationChannel" id="communicationWhatsapp"/>
                                                <label className="form-check-label" htmlFor="communicationWhatsapp">
                                                    Whatsapp
                                                </label>
                                            </div><br/>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <textarea name="message" placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <button type="submit" className="thm-btn comment-form__btn">Send a message</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
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
                                        <p className="contact-details__sub-title">Visit Our Store</p>
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
                                        <h4><a href="mailto:needhelp@company.com">needhelp@company.com</a></h4>
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
                                        <h4><a href="tel:926668880000">+ 92 666 888 0000</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <hr/>
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
            <Footer />
        </>
    );
}

export default Contact;
