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
import { DropzoneArea } from "material-ui-dropzone";

const genderItems = ["Male", "Female", "Other"];
// const theme = createMuiTheme({
//   direction: "rtl",
// });

const ContactInformationForm = ({ onNext, onBack, activeStep, steps }) => {
  const currentContext = useContext(FormContext);
  const { handleSubmit, renderInput, renderDropDown } = currentContext;

  const { root, buttons } = UseStyle();

  return (
    // <Paper className={root}>
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
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      genderItems,
                      "Country of Residence",
                      "countryofresidence",
                      "countryofresidence"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput("street", "street", "Street", "text", "", 16)}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "zip",
                      "zip",
                      "Zip/Postal Code",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "mobilenumber",
                      "mobilenumber",
                      "Mobile Number",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "secondarymobilenumber",
                      "secondarymobilenumber",
                      "Secondary Mobile Number",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "landline",
                      "landline",
                      "Landine",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "email",
                      "email",
                      "Email Address",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "verifyemail",
                      "verifyemail",
                      "Verify Email Address",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid style={{ width: "200px" }}>
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop your birth certificate"}
                        />
                      </Grid>
                      <Grid style={{ width: "200px" }}>
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop your Personal ID"}
                        />
                      </Grid>

                      <Grid style={{ width: "200px" }}>
                        <DropzoneArea
                          acceptedFiles={["image/*"]}
                          dropzoneText={"Drag and drop your Personal Photo"}
                        />
                      </Grid>
                    </Grid>
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
ContactInformationForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(ContactInformationForm);
