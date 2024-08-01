import React from "react";
import {  Routes, Route } from 'react-router-dom';

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
// import Footer from "./component/Footer";
import Whatsapp from './Images/CodesBunny/WhatsApp.png'
import Mail from './Images/CodesBunny/mail.png'



function App() {
  return (
    <>
{/* <div className="app">

</div> */}


<Navbar />
<div class="social-icons">
          <a href="https://linkedin.com" target="_blank" className="mail" style={{color:'black'}}><img src={Mail} style={{width:'30px'}}  alt="" /> <span>&nbsp;Mail</span></a>

          <a href="https://linkedin.com" target="_blank" class="linkedin"><i class="fab fa-linkedin"> </i> <span>&nbsp;LinkedIn</span></a>
          <a href="https://linkedin.com" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"> </i> <span>&nbsp;Whatsapp</span></a>
  
          <a href="https://facebook.com" target="_blank" class="facebook"><i class="fab fa-facebook"> </i> <span>&nbsp;Facebook</span></a>
          <a href="https://instagram.com" target="_blank" class="instagram"><i class="fab fa-instagram"> </i> <span>&nbsp;Instagram</span></a>
      </div> 
  
        <div id="whatsapp-button">
            <a href="https://wa.me/923083395623?text=Hello%2C%20I%27m%20interested%20in%20your%20services" target="_blank">
                <img src={Whatsapp} alt="WhatsApp" />
                <h6 class="abc">Contact Us</h6>
            </a>
           
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Web' element={<Web />} />
      </Routes>
    
<Footer />
  </>
  );
}

export default App;
