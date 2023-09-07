import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "./redux/cartSlice";
import { v4 as uuidv4 } from "uuid";
const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      const contactWithId = {
        id: uuidv4(), // Tạo id mới bằng uuid
        ...values,
      };

      dispatch(addContact(contactWithId));
    }, 400);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="box">
            <h1>Contact Form</h1>
            <div className="contact_input">
              <label className="label">Name:</label>
              <Field className="input" type="text" name="name" />
            </div>
            <ErrorMessage name="name" component="div" className="error" />

            <div className="contact_input">
              <label className="label">Email:</label>
              <Field className="input" type="email" name="email" />
            </div>
            <ErrorMessage name="email" component="div" className="error" />

            <div className="contact_input">
              <label className="label">Message:</label>
              <Field className="input" as="textarea" name="message" />
            </div>
            <ErrorMessage name="message" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ContactForm;
