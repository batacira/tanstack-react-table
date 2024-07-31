import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormikForm1 = () => {
  const handleSubmit = (values) => {
    console.log("Forma je poslana sa sledecim vrednotima", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ime je obavezno"),
    email: Yup.string()
      .email("Neispravna email adresa")
      .required("Email je obavezan"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Pošalji</button>
      </Form>
    </Formik>
  );
};

export default FormikForm1;
