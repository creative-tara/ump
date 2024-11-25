import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Team from './Components/Team';
import Contact from './Components/Contact';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About United Machinery"/>} />
        <Route path="/team" element={<Team title="Our Team"/>} />
        <Route path="/contact-us" element={<Contact title="Contact Us"/>} />
        <Route path="/machine-detail" element={<ProductDetail title="Machine Details"/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
