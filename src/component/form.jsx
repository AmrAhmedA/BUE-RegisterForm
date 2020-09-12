import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Input from "./common/input";
export const Form = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const renderInput = (id, name, label, type, helperText) => {
    return (
      <Input
        id={id}
        name={name}
        label={label}
        type={type}
        helperText={helperText}
        value={values[name]}
        onChange={handleInputChange}
      />
    );
  };

  return {
    values,
    setValues,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    renderInput,
  };
};

export const UseStyle = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // margin: theme.spacing(3),
      display: "flex",
      flexWrap: "wrap",
      padding: theme.spacing(5),
    },
    margin: {
      margin: theme.spacing(2),
    },
    marginBottom: {
      marginBottom: theme.spacing(4),
    },
    marginLogo: {
      marginBottom: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return classes;
};
