import React from "react";
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import Homehero from "../component/Homehero";
import Abouthome from "../component/Abouthome";
import Image9 from '../Images/CodesBunny/image9.png'
import HMS from '../Images/CodesBunny/hms.jpg'
import image10 from '../Images/CodesBunny/image10.png'
import Banna2 from '../Images/CodesBunny/banna2.png'


const Home = () => {

    return (
        <>
   <Navbar />
   <Homehero />
   
   <Abouthome />
   <section class="services-one">
      <div class="container">
        <div class="section-title text-center">
          <span class="sersection-title__tagline">Wide Range of Services</span>
          <h2 class="sersection-title__title">What We’re Offering</h2>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">
                <span class="icon-"></span>
                 <img class="im" src="assets/images/CodesBunny/Vector1.png" alt=""/> 
              </div>
              <h3 class="services-one__title">
                <a href="web.html">Web Development <br />
                  Services</a>
              </h3>
              <p class="services-one__text">
                Web Development Enhance your online presence with custom
                 solutions. We build responsive, user-friendly
                websites that drive engagement and conversions.
              </p>
              <div class="services-one__arrow">
                <a href="web.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
            
            <div class="services-one__single">
              <div class="services-one__icon">
                <span class="icon-app-development"></span>
                 <img class="im" src="assets/images/CodesBunny/mblapp.png" alt=""/>
              </div>
              <h3 class="services-one__title">
                <a href="App.html">App Development <br />
                  Services</a>
              </h3>
              <p class="services-one__text">
                Transform your ideas into powerful Android applications. Our
                expert developers create feature-rich, high-performance apps
                tailored to your business needs.
              </p>
              <div class="services-one__arrow">
                <a href="App.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
            <div class="services-one__single">
              <div class="services-one__icon">
                
           
                <img class="im" src="assets/images/CodesBunny/Vector2.png" alt=""/> 
              </div>
              <h3 class="services-one__title">
                <a href="Digital.html">Digital Marketing<br />
                  Services</a>
              </h3>
              <p class="services-one__text">
                Boost your brand's visibility and reach with our
                digital marketing services. We offer SEO, social media
                marketing, and PPC strategies to grow your business.
              </p>
              <div class="services-one__arrow">
                <a href="Digital.html"><span class="icon-right-arrow"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="share-the-joy">
      <div class="share-the-joy__inner">
        {/* <div class="share-the-joy-map" style="
              background-image: url(assets/images/loader.png);
            "></div> */}
        <div class="container">
          <div class="row">
            <div class="col-xl-7">
              <div class="share-the-joy__left">
                <h2 class="share-the-joy__title">
                  Custom IT Software Development
                </h2>
                <p class="share-the-joy__pra">
                  Transforming Ideas into Tailored Solutions In today's fast-paced digital landscape,
                  businesses require unique solutions to stand out and stay competitive.
                </p>

                <a href="details.html" class="share-the-joy__btn">Read More</a>
                <div class="share-the-joy__shape-1">
                  {/* <img src="assets/images/shapes/share-the-joy-shape-1.png" alt="" /> */}
                </div>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="share-the-joy__right">
                <div class="share-the-joy__img-box">
                  <div class="share-the-joy__img wow fadeInRight" data-wow-duration="1500ms">
                    <img src={HMS} alt="" class="float-bob-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  </section>

  <section class="improve-one">
    <div class="improve-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{ backgroundImage: `url(${Image9})` }}></div>
    <div class="improve-one-bg-overly"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="improve-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
            <div class="improve-one__img-box">
              <div class="improve-one__img">
                <img src={image10}alt="" />
              </div>
              <div class="improve-one__project-complete">
                <p>Grow business With <span>CodesBunny</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="improve-one__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">IT Technology</span>
              <h2 class="section-title__title">What Your Business Needs</h2>
            </div>
            <ul class="list-unstyled improve-one__points">
              <li>
                <div class="icon">
                  <span class="icon-artificial-intelligence"></span>
                </div>
                <div class="text">
                  <h3>For Small Businesses</h3>
                  <p>
                    Streamline productivity with custom software solutions that automate tasks, manage customer
                    relationships, and provide data insights.
                  </p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-ai"></span>
                </div>
                <div class="text">
                  <h3>For Medium-Sized Enterprises</h3>
                  <p>

                    Enhance efficiency with tailored software solutions that integrate seamlessly, supporting your
                    business growth and flexibility.
                  </p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="icon-ai"></span>
                </div>
                <div class="text">
                  <h3>For Large Corporations</h3>
                  <p>
                    Leverage advanced technologies for competitive edge with custom software handling complex processes
                    and ensuring security.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>  

  <section class="testimonial-one">
    <div id="particles-js"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 main">
          <div class="Testsection-title">
            <span class="Testsection-title__tagline">Customers Feedbacks</span>
            <h2 class="testsection-title__title">
              What They’re Talking About Company
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="testimonial-one__right">
            <div class="testimonial-one__carousel owl-theme owl-carousel">
              
              <div class="testimonial-one__single">
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="assets/images/CodesBunny/Ellipse18.png" alt="" />
                  </div>
                  <div class="testimonial-one__client-details">
                    <h5 class="testimonial-one__client-name">
                      Kevin Martin
                    </h5>
                    <p class="testimonial-one__client-title">Customer</p>
                  </div>
                </div>
                <p class="testimonial-one__text">

                  "Codesbunny delivered a web development solution that exceeded our expectations. Their dedication and
                  attention to detail boosted our online presence and customer engagement. We highly recommend their
                  exceptional service and innovative approach."</p>
                <div class="testimonial-one__quote">
                  <span class="icon-right-quote"></span>
                </div>
              </div>
              
              <div class="testimonial-one__single">
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="assets/images/CodesBunny/Ellipse19.png" alt="" />
                  </div>
                  <div class="testimonial-one__client-details">
                    <h5 class="testimonial-one__client-name">
                      Christine Eve
                    </h5>
                    <p class="testimonial-one__client-title">Customer</p>
                  </div>
                </div>
                <p class="testimonial-one__text">

                  "Codesbunny provided an outstanding custom IT solution that perfectly aligned with our business goals.
                  Their app development expertise gave us a competitive edge, and their communication and support were
                  impeccable. We're thrilled with results." </p>
                <div class="testimonial-one__quote">
                  <span class="icon-right-quote"></span>
                </div>
              </div>
              
              <div class="testimonial-one__single">
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="assets/images/CodesBunny/Ellipse16.png" alt="" />
                  </div>
                  <div class="testimonial-one__client-details">
                    <h5 class="testimonial-one__client-name">Jon Smith</h5>
                    <p class="testimonial-one__client-title">Customer</p>
                  </div>
                </div>
                <p class="testimonial-one__text">
                  "Working with Codesbunny transformed our digital marketing. Their plan boosted our online visibility,
                  driving significant traffic and increasing conversions. Codesbunny's commitment to excellence is
                  evident in their work. We highly recommend their services." </p>
                <div class="testimonial-one__quote">
                  <span class="icon-right-quote"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="news-one">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Direct from the Blog</span>
        <h2 class="section-title__title">News & Articles</h2>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
     
          <div class="news-one__single">
            <div class="news-one__img">
              <img src="assets/images/blog/news-one-img-1.jpg" alt="" />
              <a href="blogone.html">
                <span class="news-one__plus"></span>
              </a>
              <div class="news-one__date-box">
                <p>
                  06 <br />
                  Feb
                </p>
              </div>
            </div>
            <div class="news-one__content">

              <h3 class="news-one__title">
                <a href="blogone.html">The Role of Innovation in Driving Business Success?</a>
              </h3>
              <div class="news-one__read-more">
                <a href="blogone.html" class="news-one__read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">

          <div class="news-one__single">
            <div class="news-one__img">
              <img src="assets/images/blog/news-one-img-2.jpg" alt="" />
              <a href="blogtwo.html">
                <span class="news-one__plus"></span>
              </a>
              <div class="news-one__date-box">
                <p>
                  19 <br />
                  Feb
                </p>
              </div>
            </div>
            <div class="news-one__content">

              <h3 class="news-one__title">
                <a href="blogtwo.html">The Impact of Artificial Intelligence on Business</a>
              </h3>
           
              <div class="news-one__read-more">
                <a href="blogtwo.html" class="news-one__read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
    
          <div class="news-one__single">
            <div class="news-one__img">
              <img src="assets/images/blog/news-one-img-3.jpg" alt="" />
              <a href="blogthree.html">
                <span class="news-one__plus"></span>
              </a>
              <div class="news-one__date-box">
                <p>
                  01 <br />
                  March
                </p>
              </div>
            </div>
            <div class="news-one__content">

              <h3 class="news-one__title">
                <a href="blogthree.html">Embracing Digital Transform in Business
                </a>
              </h3>
         
              <div class="news-one__read-more">
                <a href="blogthree.html" class="news-one__read-more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-one">
    <div class="cta-one__container">
      <div class="cta-one-bg" style={{ backgroundImage: `url(${Banna2})` }}></div>
      <div class="cta-one-overly"></div>
      <div class="container">
        <div class="col-lg-12">
          <div class="cta-one__inner">
            <p class="cta-one__sub-title">Let’s Get Started Now</p>
            <h2 class="cta-one__title">
              We’ll Help You Overcome Your <br />
              Technology Challenges
            </h2>
            <a href="contact.html" class="ctabtn">Get Free Quote Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>

<Footer />
  </>
  );
}

export default Home;
