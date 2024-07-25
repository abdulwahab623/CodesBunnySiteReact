import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/Style/navbar.css';

import Home from "./component/Home";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Footer' element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
