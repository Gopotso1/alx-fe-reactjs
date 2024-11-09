import React from 'react';

const MainContent = () => {
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px',
      }}
    >
      <h2
        style={{
          color: '#333',
          fontSize: '28px',
          marginBottom: '20px',
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Discover Amazing Cities Around the World
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: '#666',
          lineHeight: '1.6',
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        I love to visit New York, Paris, and Tokyo. Explore the beauty, culture, and history of the world's most beloved cities. Whether you're into adventure, culture, or nature, there's something for everyone.
      </p>
    </div>
  );
};

export default MainContent;
