import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Joi from "joi";
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

const schema = Joi.object({
  id: Joi.string().alphanum().min(15).max(16).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmpassword: Joi.ref("password"),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
});

export const Form = (stepIndex, handleNext, handleBack, steps) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({
    email: "",
    id: "",
    password: "",
    confirmpassword: "",
  });

  const handleDropDownChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateProperty = (input) => {
    if (input.name === "email") {
      if (input.value.trim() === "") return "Email is required";
    }
    if (input.name === "id") {
      if (input.value.trim() === "") return "id is required";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "password is required";
    }
    if (input.name === "confirmpassword") {
      if (input.value.trim() === "") return "confirmpassword is required";
    }
  };

  const validate = () => {
    const result = schema.validate(values);
    console.log(result);
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
    setErrors(errors || {});
    console.log(errors);

    if (errors) return;
    console.log("Submitted");
  };

  const handleInputChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const { name, value } = input;

    setErrors({
      ...errors,
      [name]: errorMessage,
    });

    setValues({
      ...values,
      [name]: value,
    });
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
    // console.log("renderSwitch - Rendered -----------");
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
      {/* {console.log("Form - Rendered", stepIndex)} */}
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
