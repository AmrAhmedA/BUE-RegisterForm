import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core/";
import {
  getStepContent,
  getSteps,
  useHorizontalStyles,
  StepperContent,
} from "./common/stepperContent";

const HorizontalFormStepper = () => {
  const classes = useHorizontalStyles();
  const { activeStep, handleReset, handleBack, handleNext } = StepperContent();
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                {/* {console.log(steps.length - 1)} */}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalFormStepper;
