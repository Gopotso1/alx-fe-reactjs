import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff'
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
