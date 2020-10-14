import React, { useContext } from "react";
import {
  Fade,
  Grid,
  Button,
  withWidth,
  Paper,
  Container,
} from "@material-ui/core";

import FormContext from "../context/formContext";
import PropTypes from "prop-types";
import { UseStyle } from "../form";

const genderItems = ["Male", "Female", "Other"];
const ProgramSelectionForm = ({ onNext, onBack, activeStep, steps }) => {
  const currentContext = useContext(FormContext);
  const { handleSubmit, renderInput, renderDropDown } = currentContext;
  const { root, buttons } = UseStyle();

  return (
    <Container fixed maxWidth="md">
      <Fade in={true}>
        <Paper variant="outlined" elevation={2}>
          <form className={root} onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={12} sm={4} md={8} lg={8} xl={8}>
                    {renderDropDown(
                      genderItems,
                      "Faculty",
                      "faculty",
                      "faculty"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    {renderDropDown(
                      genderItems,
                      "Master's Program",
                      "masterprogram",
                      "masterprogram"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    {renderDropDown(
                      genderItems,
                      "Expected Entry Term",
                      "expectedentryterm",
                      "expectedentryterm"
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Button
                            className={buttons}
                            variant="contained"
                            color="primary"
                            style={{
                              padding: "5px 25px 8px ",
                              fontSize: "15px",
                              textAlign: "center",
                            }}
                            onClick={onBack}
                            disabled={activeStep === 0}
                          >
                            Back
                          </Button>
                          <Button
                            className={buttons}
                            variant="contained"
                            color="primary"
                            style={{
                              padding: "5px 25px 8px ",
                              fontSize: "15px",
                              textAlign: "center",
                            }}
                            onClick={onNext}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Fade>
    </Container>
  );
};
ProgramSelectionForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(ProgramSelectionForm);
