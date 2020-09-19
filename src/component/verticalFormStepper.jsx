import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Grid,
  Container,
} from "@material-ui/core/";
import {
  getStepContent,
  getSteps,
  useVerticalStyles,
} from "./common/stepperContent";

const VerticalFormStepper = ({
  activeStep,
  handleBack,
  handleNext,
  handleReset,
}) => {
  const classes = useVerticalStyles();
  const steps = getSteps();

  console.log("VerticalFormStepper - Rendered");
  return (
    <Container fixed maxWidth="md">
      <Grid>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {index === activeStep
                    ? getStepContent(activeStep, handleNext, handleBack, steps)
                    : null}
                  {console.log(index)}
                  {/* <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div> */}
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <p>All steps completed - you&apos;re finished</p>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default VerticalFormStepper;
