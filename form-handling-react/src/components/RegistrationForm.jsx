// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Import your form styles

const RegistrationForm = () => {
  // Using useState to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const initialValues = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Form submission logic
    console.log('Form Submitted:', values);
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              {/* Manually binding value using useState */}
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={values.username}  {/* Binding value */}
                onChange={handleChange}   {/* Binding onChange */}
                onBlur={handleBlur}       {/* Binding onBlur */}
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
                value={values.email}  {/* Binding value */}
                onChange={handleChange}
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
                value={values.password}  {/* Binding value */}
                onChange={handleChange}
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
