import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Input from "./common/input";
import DropDownInputMenu from "./common/dropDownInputMenu";
import FormContext from "./context/formContext";
import AccountSetupForm from "./forms/accountSetupForm";
import PersonalInformationForm from "./forms/personalInformationForm";
// import ContactInformationForm from "./forms/contactInformationForm";
const initialFieldValues = {
  firstname: "",
  secondname: "",
  middlename: "",
  email: "",
  nationality: "",
  religion: "",
  gender: "",
  placeofbirth: "",
  maritalstatus: "",
  dateofbirth: new Date("2020-01-01T21:11:54"),
  idtype: "",
  id: "",
  password: "",
  confirmpassword: "",
  showPassword: false,
};

export const Form = (stepIndex, handleNext, handleBack, steps) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({
    email: "a",
    id: "a",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDropDownChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  // const handleDateChange = (date) => {
  //   console.log(date);
  //   // setValues({ ...values, [name]: date });
  // };

  // const handleValidate = ({ name, value }) => {};

  const validate = () => {
    const errors = {};

    if (values.id.trim() === "") {
      errors.id = "ID is required";
    }
    if (values.email.trim() === "") {
      errors.email = "Email is required";
    }

    if (values.password.trim() === "") {
      errors.password = "Password is required";
    }

    if (values.confirmpassword.trim() === "") {
      errors.confirmpassword = "Confirm Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} });
    console.log(errors);

    if (errors) return;
    console.log("Submitted");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const renderInput = (id, name, label, type, helperText) => {
    console.log(errors[name]);
    return (
      <Input
        id={id}
        name={name}
        label={label}
        type={type}
        onChange={handleInputChange}
        helperText={helperText}
        value={values[name]}
        error={errors[name]}
      />
    );
  };

  const renderDropDown = (items, label, id, name) => {
    return (
      <DropDownInputMenu
        items={items}
        label={label}
        id={id}
        name={name}
        value={values[name]}
        onChange={handleDropDownChange}
      />
    );
  };

  const renderSwitch = (stepIndex, handleNext, handleBack, steps) => {
    console.log("renderSwitch - Rendered -----------");
    switch (stepIndex) {
      case 0:
        // return <ContactInformationForm onNext={handleNext} />;
        return <AccountSetupForm onNext={handleNext} />;
      case 1:
        return (
          <PersonalInformationForm
            onNext={handleNext}
            onBack={handleBack}
            stepIndex={stepIndex}
            steps={steps}
          />
        );
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  };
  return (
    <FormContext.Provider
      value={{
        values,
        setValues,
        handleInputChange,
        handleSubmit,
        handleClickShowPassword,
        handleMouseDownPassword,
        renderInput,
        renderDropDown,
      }}
    >
      {console.log("Form - Rendered", stepIndex)}
      {renderSwitch(stepIndex, handleNext, handleBack, steps)}
    </FormContext.Provider>
  );
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
    buttons: {
      margin: theme.spacing(2),
      [theme.breakpoints.up("xs")]: {
        margin: theme.spacing(1),
      },
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
