// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WavysNavbar from './components/Nav';
import HeroSection from './components/HomeHero';
import ContactUs from './pages/Contact';
import Home from './pages/Home';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <WavysNavbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;