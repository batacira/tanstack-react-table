import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Grid } from "@mui/material";
export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}> <Link to="basic-table">Basic Table</Link></Grid>
      <Grid item xs={4}><Link to="formik-form1">Formik Form</Link></Grid>
      <Grid item xs={4}>  <Link to="formik-form2">Formik Form 2</Link></Grid>
      <Grid item xs={4}><Link to="formik-form3">Formik Form 3</Link></Grid>
    </Grid>
  );
};
