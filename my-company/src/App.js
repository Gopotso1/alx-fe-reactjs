import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Footer Components
function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
      <p>&copy; 2024 My Company. All Rights Reserved.</p>
    </footer>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px'
};

export default App;
