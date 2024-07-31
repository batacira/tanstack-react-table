import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

const FormikTextField = ({ label, ...props }) => {
    // Povezuje Formik sa MUI TextField
    const [field, meta] = useField(props);
    console.log(field, 'field');
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            {...field} // Povezuje Formik-ove vrednosti, onChange, onBlur
            {...props} // Ove propertije možete proslediti kao što je "id", "type" itd.
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : ''}
        />
    );
};

export default FormikTextField;