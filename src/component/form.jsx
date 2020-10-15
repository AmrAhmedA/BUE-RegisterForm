import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Joi from "joi-browser";
import Input from "./common/input";
import DropDownInputMenu from "./common/dropDownInputMenu";
import FormContext from "./context/formContext";
import AccountSetupForm from "./forms/accountSetupForm";
import PersonalInformationForm from "./forms/personalInformationForm";
// import PersonalInformation from "./pgs/PersonalInformation";
import ContactInformationForm from "./forms/contactInformationForm";
import AcademicInformationForm from "./forms/academicInformationForm";
import ProgramSelectionForm from "./forms/programSelectionForm";
import SubmitInformationForm from "./forms/submitInformationForm";

const initialFieldValues = {
  //accountSetup
  accountSetup: {
    idtype: "",
    id: "",
    useremail: "",
    password: "",
    confirmpassword: "",
    showPassword: false,
  },
  //personalInformation
  personalInformation: {
    firstname: "",
    middlename: "",
    lastname: "",
    firstnamearabic: "",
    middlenamearabic: "",
    lastnamearabic: "",
    gender: "",
    religion: "",
    nationality: "",
    countryofcitizenship: "",
    maritalstatus: "",
  },
  //contactInformation
  contactInformation: {
    countryofresidence: "",
    street: "",
    zip: "",
    mobilenumber: "",
    secondarymobilenumber: "",
    landline: "",
    email: "",
    verifyemail: "",
  },
  //academicInformation
  academicInformation: {
    university: "",
    gpa: "",
    specialization: "",
    lettergrade: "",
    levelofeducation: "",
  },
  //programSelection
  programSelection: {
    faculty: "",
    masterprogram: "",
    expectedentryterm: "",
  },
};

const schema = {
  id: Joi.string().alphanum().min(16).max(16).required().label("ID Number"),
  useremail: Joi.string()
    .min(6)
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .label("Email"),
  password: Joi.string().min(5).max(15).required().label("Password"),
  confirmpassword: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({
      language: {
        any: {
          allowOnly: " do not match",
        },
      },
    })
    .label("Passwords"),
};

export const Form = (stepIndex, handleNext, handleBack, steps) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const {
    accountSetup,
    personalInformation,
    contactInformation,
    academicInformation,
    programSelection,
  } = values;
  // const [selectedDate, setSelectedDate] = React.useState(null);

  // Setting the date as default computed property
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const getFormName = (name) => {
    const formName =
      name in accountSetup
        ? { accountSetup }
        : name in personalInformation
        ? { personalInformation }
        : name in contactInformation
        ? { contactInformation }
        : name in academicInformation
        ? { academicInformation }
        : name in programSelection
        ? { programSelection }
        : null;
    return formName;
  };

  const getFormObject = (name) => {
    const formObj =
      name in accountSetup
        ? accountSetup
        : name in personalInformation
        ? personalInformation
        : name in contactInformation
        ? contactInformation
        : name in academicInformation
        ? academicInformation
        : name in programSelection
        ? programSelection
        : null;
    return formObj;
  };

  const handleDropDownChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);

    const formName = getFormName(name);
    const formObj = getFormObject(name);

    console.log("Amora", formName);
    setValues({
      ...values,
      [Object.keys(formName)[0]]: { ...formObj, [name]: value },
    });
    console.log("Amora", values);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const currentSchema = Joi.object({ [name]: schema[name] });
    // console.log(schema[name]);
    const { error } = currentSchema.validate(obj);
    // console.log(error);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const currentSchema = Joi.object(schema);
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
    // console.log(errors);

    if (errors) return;
    console.log("Submitted");
  };

  const handleInputChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);
    console.log(errorMessage);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const { name, value } = input;

    setErrors({
      ...errors,
      [name]: errorMessage,
    });

    const formObj = getFormObject(name);
    const formName = getFormName(name);
    setValues({
      ...values,
      [Object.keys(formName)[0]]: { ...formObj, [name]: value },
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const renderInput = (id, name, label, type, helperText, maxLength) => {
    // console.log(name);
    const value = getFormObject(name);
    return (
      <Input
        id={id}
        name={name}
        label={label}
        type={type}
        onChange={handleInputChange}
        helperText={helperText}
        maxLength={maxLength}
        value={value[name]}
        error={errors[name]}
      />
    );
  };

  const renderDropDown = (items, label, id, name) => {
    console.log(name);

    const {
      accountSetup,
      personalInformation,
      contactInformation,
      academicInformation,
      programSelection,
    } = values;

    const value =
      name in accountSetup
        ? accountSetup
        : name in personalInformation
        ? personalInformation
        : name in contactInformation
        ? contactInformation
        : name in academicInformation
        ? academicInformation
        : name in programSelection
        ? programSelection
        : null;

    console.log(value[name]);
    return (
      <DropDownInputMenu
        items={items}
        label={label}
        id={id}
        name={name}
        value={value[name]}
        onChange={handleDropDownChange}
      />
    );
  };

  const renderSwitch = (stepIndex, handleNext, handleBack, steps) => {
    // console.log("renderSwitch - Rendered -----------");
    switch (stepIndex) {
      case 0:
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
        return (
          <ContactInformationForm
            onNext={handleNext}
            onBack={handleBack}
            stepIndex={stepIndex}
            steps={steps}
          />
        );
      case 3:
        return (
          <AcademicInformationForm
            onNext={handleNext}
            onBack={handleBack}
            stepIndex={stepIndex}
            steps={steps}
          />
        );
      case 4:
        return (
          <ProgramSelectionForm
            onNext={handleNext}
            onBack={handleBack}
            stepIndex={stepIndex}
            steps={steps}
          />
        );
      case 5:
        return (
          <SubmitInformationForm
            onNext={handleNext}
            onBack={handleBack}
            stepIndex={stepIndex}
            steps={steps}
          />
        );
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
        validate,
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
