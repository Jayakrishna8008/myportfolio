// App.js
import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
 import './App.css'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
       </Routes>
    
  );
}

export default App;
