import React from "react";
import * as yup from "yup";
import { Formik, Form, useFormik, FormikProvider, } from "formik";
import FormikTextField from './FormikTextField';
import axios from "axios";
import FormikAutocomplete from "./FormikAutocomplete";

const CompanyPlan = {
    Basic: "Basic",
    Advanced: "Advanced",
    Premium: "Premium",
}

//TODO: nastavi ovde (upali prvo server)
export const FormikForm3 = () => {

    const formik = useFormik({
        initialValues: { first_name: "", last_name: "", email: "", gender: "", ip_address: "", phone: "", date: "" },

        validationSchema: yup.object({
            first_name: yup.string().required("Ime je obavezno"),
            last_name: yup.string().required("Prezime je obavezno")
            ,
            email: yup.string().email("Neispravna email adresa")
                .required("Email je obavezan"),
            gender: yup.string(),
            ip_address: yup.string(),
            phone: yup.string(),
            date: yup.string()
        }),

        onSubmit: async (values) => {
            await addUser({
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                gender: values.gender,
                ip_address: values.ip_address,
                phone: values.phone,
                date: values.date
            })
        },
    });

    const addUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:5000/users', user);
            return response.data;
        } catch (error) {
            throw new Error('Error adding user: ' + error.message);
        }
    };

    return (
        <FormikProvider value={formik}>
            <Form >
                <FormikTextField label="Ime" name="first_name" />
                <FormikTextField label="Prezime" name="last_name" />
                <FormikTextField label="email" name="email" />
                <FormikTextField label="Pol" name="gender" />
                <FormikTextField label="IP Adresa" name="ip_address" />
                <FormikTextField label="Telefon" name="phone" />
                {/* <FormikTextField label="Datum" name="date" /> */}
                <FormikAutocomplete
                    label="Status"
                    name="date"
                    options={Object.values(CompanyPlan).map((status) => ({
                        label: status,
                        value: status,
                    }))}
                />
                <button type="submit">Pošalji</button>
            </Form>
        </FormikProvider>
    );
}
export default FormikForm3;













/**import React from "react";
import * as yup from "yup";
import { Formik, Form, useFormik, FormikProvider, } from "formik";
import FormikTextField from './FormikTextField';
import axios from "axios";

//TODO: nastavi ovde (upali prvo server)
export const FormikForm3 = () => {

    const formik = useFormik({
        initialValues: { first_name: "", last_name: "", email: "", gender: "", ip_address: "", phone: "", date: "" },

        validationSchema: yup.object({
            first_name: yup.string().required("Ime je obavezno"),
            last_name: yup.string().required("Prezime je obavezno")
            ,
            email: yup.string().email("Neispravna email adresa")
                .required("Email je obavezan"),
            gender: yup.string(),
            ip_address: yup.string(),
            phone: yup.string(),
            date: yup.string()
        }),

        onSubmit: async (values) => {
            await addUser({
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                gender: values.gender,
                ip_address: values.ip_address,
                phone: values.phone,
                date: values.date
            })
        },
    });

    const addUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:5000/users', user);
            return response.data;
        } catch (error) {
            throw new Error('Error adding user: ' + error.message);
        }
    };

    return (
        <FormikProvider value={formik}>
            <Form >
                <FormikTextField label="Ime" name="first_name" />
                <FormikTextField label="Prezime" name="last_name" />
                <FormikTextField label="email" name="email" />
                <FormikTextField label="Pol" name="gender" />
                <FormikTextField label="IP Adresa" name="ip_address" />
                <FormikTextField label="Telefon" name="phone" />
                <FormikTextField label="Datum" name="date" />
                <button type="submit">Pošalji</button>
            </Form>
        </FormikProvider>
    );
}
export default FormikForm3; */