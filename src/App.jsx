// import { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //when using react-router-dom. so, site not loads on nav link clicks
import Footer from './components/Footer';
import Header from './components/Header';

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* home ka path sirf one slash */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
