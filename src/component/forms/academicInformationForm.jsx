import React, { useContext } from "react";
import { DropzoneArea } from "material-ui-dropzone";

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
import DatePicker from "../common/datePicker";

const genderItems = ["Male", "Female", "Other"];
// const theme = createMuiTheme({
//   direction: "rtl",
// });

const AcademicInformationForm = ({ onNext, onBack, activeStep, steps }) => {
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
                  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    {renderInput(
                      "university",
                      "university",
                      "University",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "specialization",
                      "specialization",
                      "Specialization",
                      "text",
                      "",
                      40
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <DatePicker />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput("gpa", "gpa", "GPA", "text", "", 16)}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "lettergrade",
                      "lettergrade",
                      "Letter Grade",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={8} lg={8} xl={8}>
                    {renderDropDown(
                      genderItems,
                      "Highest Level of Education",
                      "levelofeducation",
                      "levelofeducation"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}></Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        maxFileSize={1000000}
                        // filesLimit={20}
                        dropzoneText={"Drag and drop your Transcript*"}
                        onChange={(files) => console.log("Files:", files)}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        maxFileSize={1000000}
                        // filesLimit={20}
                        dropzoneText={"Drag and drop your Certificate*"}
                        onChange={(files) => console.log("Files:", files)}
                      />
                      <DropzoneArea
                        acceptedFiles={["image/*"]}
                        maxFileSize={1000000}
                        // filesLimit={20}
                        dropzoneText={"Drag and drop your Grade Scale if any"}
                        onChange={(files) => console.log("Files:", files)}
                      />
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
AcademicInformationForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(AcademicInformationForm);
