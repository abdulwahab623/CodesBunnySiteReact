import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../src/Assets/Style/All.css';
import './Assets/Style/Responsive.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Web from "./component/Web";
import Whatsapp from './Assets/Images/CodesBunny/WhatsApp.png'
import Mail from './Assets/Images/CodesBunny/mail.png'
import HmsErp from "./component/HmsErp";
import Content from "./component/ContentDigital";
import SeoAso from "./component/SeoAso";
import Datacyber from "./component/DataandCyber";
import Blogonetwo from "./component/Blogonetwo";
import Blogtwo from "./component/Blogtwo";
import Blogthree from "./component/Blogthree";
import Blogfour from "./component/Blogfour";
import Blogfive from "./component/Blogfive";
import Blogsix from "./component/Blogsix";
import Application from "./component/Mobapplication";
import SEO from "./component/SEO";

function App() {

  return (
    <>
      <Navbar />
      <div class="social-icons">
        <a href="mailto:officialcodesbunny@gmail.com" target="_blank" className="mail" style={{ color: 'black' }}><img src={Mail} style={{ width: '30px' }} alt="" /> <span>&nbsp;Mail</span></a>

        <a href="https://linkedin.com" target="_blank" class="linkedin"><i class="fab fa-linkedin"> </i> <span>&nbsp;LinkedIn</span></a>
        <a href="https://wa.me/923080044190?text=Hello%2C%20I%27m%20interested%20in%20your%20services" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"> </i> <span>&nbsp;Whatsapp</span></a>

        <a href="https://www.facebook.com/profile.php?id=61565837832961" target="_blank" class="facebook"><i class="fab fa-facebook"> </i> <span>&nbsp;Facebook</span></a>
        <a href="https://www.instagram.com/official_codesbunny/" target="_blank" class="instagram"><i class="fab fa-instagram"> </i> <span>&nbsp;Instagram</span></a>
      </div>

      <div id="whatsapp-button">
        <a href="https://wa.me/923080044190?text=Hello%2C%20I%27m%20interested%20in%20your%20services" target="_blank">
          <img src={Whatsapp} alt="WhatsApp" />
          <h6 class="abc">Contact Us</h6>
        </a>

      </div>

      <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/web' element={<Web />} />
        <Route path='/Application' element={<Application />} />
        <Route path='/OURPRODUCTS' element={<HmsErp />} />
        <Route path='/Content' element={<Content />} />
        <Route path='/ASO' element={<SeoAso />} />
        <Route path='/SEO' element={<SEO />} />
        <Route path='/Dataandcyber' element={<Datacyber />} />
        <Route path='/Blogone' element={<Blogonetwo />} />
        <Route path='/Blogtwo' element={<Blogtwo />} />
        <Route path='/Blogthree' element={<Blogthree />} />
        <Route path='/Blogfour' element={<Blogfour />} />
        <Route path='/Blogfive' element={<Blogfive />} />
        <Route path='/Blogsix' element={<Blogsix />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
