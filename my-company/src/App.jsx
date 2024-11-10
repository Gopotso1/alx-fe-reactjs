import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';       // Ensure you have these components created
import About from './About';     // Ensure these components exist
import Services from './Services'; // Same as above
import Contact from './Contact';   // Same as above

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main Content (Routes) */}
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Company. All Rights Reserved.</p>
    </footer>
  );
}

// Styles (Moved styles for better readability)
const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  marginBottom: '20px'
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  marginTop: '20px'
};

export default App;
