import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Form } from "./form";

export const useVerticalStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export const useHorizontalStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const StepperContent = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // console.log(activeStep);
  }, [activeStep]);
  // console.log(activeStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return { activeStep, handleNext, handleBack, handleReset };
};

export const getSteps = () => {
  return [
    "ACCOUNT SETUP",
    "PERSONAL INFORMATION",
    "CONTACT INFORMATION",
    "ACADEMIC INFORMATION",
    "PROGRAM SELECTION",
    // "ADMISSION INFORMATION",
    "SUBMIT INFORMATION",
  ];
};

export const getStepContent = (stepIndex, handleNext, handleBack, steps) => {
  // console.log("StepperContent - Rendered");
  return Form(stepIndex, handleNext, handleBack, steps);
};
