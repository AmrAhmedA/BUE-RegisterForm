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

const schema = {
  id: Joi.string().alphanum().min(15).max(16).required().label("ID Number"),
  email: Joi.string()
    .min(6)
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .label("Email"),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .label("Password"),
  confirmpassword: Joi.string().required().valid(Joi.ref("password")),
};

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

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const currentSchema = Joi.object({ [name]: schema[name] });
    console.log(schema[name]);
    const { error } = currentSchema.validate(obj);
    console.log(error);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const currentSchema = Joi.object({ schema });
    const result = currentSchema.validate(values, { abortEarly: false });
    // console.log(result.error);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
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
