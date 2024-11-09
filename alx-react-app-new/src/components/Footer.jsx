import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '30px',
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <p
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        &copy; 2024 My Favorite Cities
      </p>
      <p
        style={{
          fontSize: '14px',
          color: '#bbb',
        }}
      >
        Made with ❤️ by Maphosa Segopotso
      </p>
    </footer>
  );
};

export default Footer;
