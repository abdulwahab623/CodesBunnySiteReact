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
// import Footer from "./component/Footer";



function App() {
  return (
    <>
{/* <div className="app">

</div> */}


<Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    
<Footer />
  </>
  );
}

export default App;
