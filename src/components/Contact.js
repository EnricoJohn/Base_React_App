import React, { Component } from 'react'
import { Formik, Field } from 'formik';

const Contact = () => (
    <div className='Formulario'>
      <h1>Formulario</h1>
      <div className='Formulario_Form'>
      <Formik
        initialValues={{ email: ''}}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      > 
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className='Formulario_Form_form' onSubmit={handleSubmit}>
           
            <input
              type="char"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <input
              type="char"
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <textarea
              type="textarea"
              rows='5'
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
         
        )}
        
      </Formik> 
      </div>
    </div>
  );
  

export default Contact
