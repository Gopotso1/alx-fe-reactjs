import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; 

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const RegistrationForm = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);

          // Simulate API call
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setSubmitting(false);
            })
            .catch((error) => {
              console.error('Error:', error);
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">

            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" className="input-field" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
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
