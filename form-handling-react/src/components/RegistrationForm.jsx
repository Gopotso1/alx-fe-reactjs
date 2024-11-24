// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Import your form styles

const RegistrationForm = () => {
  // Using useState to store form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initial values for Formik form
  const initialValues = {
    username: username,
    email: email,
    password: password,
  };

  // Validation schema using Yup (Formik handles this internally, but we're adding manual checks below)
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm, setErrors }) => {
    // Add manual validation checks as per your requirement
    if (!username) {
      setErrors({ username: 'Username is required' });
    }
    if (!email) {
      setErrors({ email: 'Email is required' });
    }
    if (!password) {
      setErrors({ password: 'Password is required' });
    }

    // If there are no errors, submit the form
    if (!username || !email || !password) {
      return;
    }

    // If no manual validation errors, submit the form (example console log)
    console.log('Form Submitted:', values);
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}  // Formik validation via Yup
        onSubmit={handleSubmit}  // Handling submit with manual error setting
      >
        {({ values, handleChange, handleBlur, setErrors }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={(e) => setUsername(e.target.value)}   {/* Handle onChange */}
                onBlur={handleBlur}
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={(e) => setEmail(e.target.value)}  {/* Handle onChange */}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={(e) => setPassword(e.target.value)}  {/* Handle onChange */}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

