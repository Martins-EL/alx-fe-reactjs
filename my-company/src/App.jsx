import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
