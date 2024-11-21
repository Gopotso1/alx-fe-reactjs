import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const RegistrationForm = () => {
  // Using useState to manage form data manually
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values); // Logs the form data upon submission

          // Simulate API call
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(values), // Sending the form data as JSON
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); // Logs response data from API
              setSubmitting(false); // Resets the submitting state
            })
            .catch((error) => {
              console.error('Error:', error); // Logs any errors
              setSubmitting(false); // Resets the submitting state
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h2>Register</h2>

            {/* Username field */}
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="input-field"
                value={formData.username} // Using useState value
                onChange={handleChange} // Using useState onChange
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input-field"
                value={formData.email} // Using useState value
                onChange={handleChange} // Using useState onChange
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password field */}
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="input-field"
                value={formData.password} // Using useState value
                onChange={handleChange} // Using useState onChange
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Submit button */}
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

