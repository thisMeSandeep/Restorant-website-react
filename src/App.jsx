import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentGroup/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Menu from './pages/Menu';
import Contacts from './pages/Contacts';
import Booking from './pages/Booking';
import OurTeam from './pages/OurTeam';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <Router>
      <div className='w-full lg:w-11/12 mx-auto lg:px-4 bg-white'>
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
