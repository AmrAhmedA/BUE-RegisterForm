import React, { useContext } from "react";
import {
  Fade,
  Grid,
  Button,
  withWidth,
  Paper,
  Container,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { UseStyle } from "../form";
import FormContext from "../context/formContext";
import DatePicker from "../common/datePicker";

const items = ["National Number", "Passport"];

const PersonalInformation = ({ onNext }) => {
  const currentContext = useContext(FormContext);
  const {
    handleSubmit,
    renderInput,
    renderDropDown,
    // validate,
  } = currentContext;

  const { root, margin } = UseStyle();

  console.log("AccountSetupForm - Rendered");
  console.log("###");

  return (
    <Container fixed maxWidth="md">
      <Fade in={true}>
        <Paper variant="outlined" elevation={2}>
          <form className={root}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "firstname",
                      "firstname",
                      "First Name",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "middlename",
                      "middlename",
                      "Middle Name",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "lastname",
                      "lastname",
                      "Last Name",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput("id", "id", "ID Number", "text", "", 16)}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "lastname",
                      "lastname",
                      "Last Name",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "lastname",
                      "lastname",
                      "Last Name",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <DatePicker />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      items,
                      "Country of Citizenship",
                      "countryofcitizenship",
                      "countryofcitizenship"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      items,
                      "Country of Citizenship",
                      "countryofcitizenship",
                      "countryofcitizenship"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(
                      items,
                      "Country of Citizenship",
                      "countryofcitizenship",
                      "countryofcitizenship"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(items, "Gender", "gender", "gender")}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(items, "Gender", "gender", "gender")}
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
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "verifyemail",
                      "verifyemail",
                      "Verify Email Address",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    {renderInput(
                      "mobilenumber",
                      "mobilenumber",
                      "Mobile Number",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
                    {renderDropDown(
                      items,
                      "Country of Residence",
                      "countryofresidence",
                      "countryofresidence"
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(items, "City", "city", "city")}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderDropDown(items, "ID Type", "idtype", "idtype")}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "idnumber",
                      "idnumber",
                      "ID Number",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput("street", "street", "Street", "text", "", 16)}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "zip",
                      "zip",
                      "ZIP/Postal Code",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {renderInput(
                      "landline",
                      "landline",
                      "LandLine",
                      "text",
                      "",
                      16
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Button
                        // disabled={validate()}
                        variant="contained"
                        color="primary"
                        style={{
                          padding: "5px 25px 8px ",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                        onClick={handleSubmit}
                      >
                        Next
                      </Button>
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

PersonalInformation.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(PersonalInformation);
