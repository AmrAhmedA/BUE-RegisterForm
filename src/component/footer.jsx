import React from "react";
import {
  Grid,
  createMuiTheme,
  ThemeProvider,
  Typography,
  Container,
  makeStyles,
  Hidden,
  Fade,
} from "@material-ui/core";
import BueLogo from "../images/bue eagle 2.bcb94f54.png";

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    marginTop: theme.spacing(5),
  },
}));

const Footer = () => {
  const classes = UseStyles();
  return (
    <Container fixed maxWidth="lg" className={classes.footer}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Hidden smDown>
              <Fade in={true}>
                <img src={BueLogo} alt="" width="150px" />
              </Fade>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">
                THE BRITISH UNIVERSITY IN EGYPT
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <h1>Amora</h1>
        <h1>Amora</h1>
        <h1>Amora</h1>
        <h1>Amora</h1>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="flex-end">
        <h1>Amora</h1>
        <h1>Amora</h1>
        <h1>Amora</h1>
        <h1>Amora</h1>
      </Grid>
    </Container>
  );
};

export default Footer;
