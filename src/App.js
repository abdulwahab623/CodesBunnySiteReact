import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/Assets/Style/All.css';
import './Assets/Style/Responsive.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
