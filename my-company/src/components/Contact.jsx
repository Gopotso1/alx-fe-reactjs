import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

// Styling objects for a better layout and design

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f4f9',
  padding: '20px',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#333',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '500px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  padding: '12px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const textareaStyle = {
  padding: '12px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '16px',
  outline: 'none',
  resize: 'vertical',
  minHeight: '120px',
  transition: 'border-color 0.3s ease',
};

const buttonStyle = {
  padding: '12px',
  marginTop: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

buttonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Contact;
