import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);  // Initialize count state with 0

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '10px', padding: '10px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
