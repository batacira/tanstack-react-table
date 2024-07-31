import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import FormikTextField from './FormikTextField'; // Putanja do komponente


export const FormikForm2 = () => {

    const handleSubmit = (values) => {
        console.log("Forma je poslana sa sledecim vrednotima", values);
    };

    const validationSchema = yup.object({
        name: yup.string().required("Ime je obavezno"),
        email: yup.string()
            .email("Neispravna email adresa")
            .required("Email je obavezan"),
        phone: yup.string()
    });

    return (
        <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <FormikTextField label="Tvoje ime" name="name" />
                <FormikTextField label="Email" name="email" type="email" />
                <FormikTextField label="Broj telefona" name="phone" />
                <button type="submit">Pošalji</button>
            </Form>
        </Formik>
    );
};

export default FormikForm2;
