import React from "react";
import {
  Fade,
  Grid,
  Button,
  withWidth,
  Paper,
  Container,
} from "@material-ui/core";

import PropTypes from "prop-types";
import { Form, UseStyle } from "../form";
import DatePicker from "../common/datePicker";
const initialFieldValues = {
  id: 0,
  firstname: "",
  secondname: "",
  middlename: "",
  nationality: "",
  religion: "",
  gender: "",
  placeofbirth: "",
};
const genderItems = ["Male", "Female", "Other"];
const religionItems = ["Christian", "Muslim", "Jewish", "Other"];
const nationalityItems = ["Egypt", "Australia"];
const maritalStatus = ["Single", "Married"];

const PersonalInformationForm = ({ onNext, onBack, activeStep, steps }) => {
  const { handleSubmit, renderInput, renderDropDown } = Form(
    initialFieldValues
  );

  const { root } = UseStyle();

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
                    {renderInput(
                      "firstname",
                      "firstname",
                      "First Name",
                      "text",
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "middlename",
                      "middlename",
                      "Middle Name",
                      "text",
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "secondname",
                      "secondname",
                      "Last Name",
                      "text",
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(genderItems, "Gender", "gender")}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(religionItems, "Religion", "religion")}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      nationalityItems,
                      "Natioanlity",
                      "nationality"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      nationalityItems,
                      "Place of Birth",
                      "placeofbirth"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      maritalStatus,
                      "Marital Status",
                      "Marital Status"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <DatePicker />
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
                            variant="contained"
                            color="primary"
                            style={{
                              padding: "5px 25px 8px ",
                              fontSize: "15px",
                              textAlign: "center",
                              marginRight: "20px",
                            }}
                            onClick={onBack}
                            disabled={activeStep === 0}
                          >
                            Back
                          </Button>
                          <Button
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
PersonalInformationForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(PersonalInformationForm);
