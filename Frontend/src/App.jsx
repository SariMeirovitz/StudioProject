
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Services from './components/Services';
import AddClient from './components/AddClient';


const App = () => {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addClient" element={<AddClient />} />
       
      </Routes>

    </BrowserRouter>
  );
};

export default App;



