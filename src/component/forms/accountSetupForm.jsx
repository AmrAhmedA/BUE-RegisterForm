import React, { useContext } from "react";
import {
  Fade,
  Grid,
  IconButton,
  Button,
  Hidden,
  withWidth,
  Paper,
  Container,
} from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import BueLogo from "../../images/BUELogo.png";
import { UseStyle } from "../form";
import FormContext from "../context/formContext";

const items = ["National Number", "Passport"];

const AccountSetupForm = ({ onNext }) => {
  const currentContext = useContext(FormContext);
  const {
    values,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
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
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {renderDropDown(items, "ID Type", "idtype", "idtype")}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    {renderInput("id", "id", "ID Number", "text", "", 16)}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    {renderInput(
                      "useremail",
                      "useremail",
                      "Email",
                      "text",
                      "You can use letters, numbers and periods",
                      20
                    )}
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                    {renderInput(
                      "password",
                      "password",
                      "Password",
                      values.showPassword ? "text" : "password",
                      "",
                      30
                    )}
                  </Grid>
                  <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                    {renderInput(
                      "confirmpassword",
                      "confirmpassword",
                      "Confirm",
                      values.showPassword ? "text" : "password",
                      "",
                      30
                    )}
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      style={{
                        height: "35px",
                      }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs>
                        <Button
                          href="#text-buttons"
                          style={{
                            textTransform: "none",
                            padding: "5px 20px ",
                            textAlign: "center",
                            fontSize: "15px",
                          }}
                          color="primary"
                        >
                          Sign in instead
                        </Button>
                      </Grid>
                      <Grid item xs>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="flex-end"
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
              </Grid>
              <Hidden smDown>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Grid container align="center" className={margin}>
                    <Grid item xs>
                      <img src={BueLogo} alt="" width={300} height={250} />
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </form>
        </Paper>
      </Fade>
    </Container>
  );
};
AccountSetupForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(AccountSetupForm);
