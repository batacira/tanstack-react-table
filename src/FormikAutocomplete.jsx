import {
    alpha,
    Autocomplete,
    CircularProgress,
    TextField,
    useTheme,

} from "@mui/material";
import { useField } from "formik";

const FormikAutocomplete = ({
    name,
    options,
    label,
    loading,
    size,
    helperText,
    TextFieldProps,
    ...rest
}) => {
    // const theme = useTheme();

    const [field, meta, helpers] = useField(name);

    const autocompleteValue =
        options.find((option) => option.value === field.value) ?? null;

    return (
        <Autocomplete
            size={size}
            options={options}
            onChange={async (_e, value) => {
                helpers.setValue(value !== null ? value.value : null);
            }}
            // couldn't satisfy typescript, but 99.9% will work.
            // @ts-expect-error
            value={autocompleteValue}
            onBlur={field.onBlur}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={field.name}
                    label={label}
                    error={meta.touched && !!meta.error}

                    size={size}
                    InputProps={{
                        ...params.InputProps,
                    }}
                    {...TextFieldProps}
                />
            )}
            //   sx={{
            //     "& .MuiAutocomplete-groupLabel": {
            //       backgroundColor: alpha(theme.palette.primary.main, 0.6),
            //     },
            //     ...rest.sx,
            //   }}
            {...rest}
        />
    );
};

export default FormikAutocomplete;