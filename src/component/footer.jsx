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
  fontWeight: "bold",

  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h5 = {
  fontSize: "0.9rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
};

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  listItems: {
    display: "inline",
    padding: theme.spacing(0.8),
    textDecoration: "underline",
  },
}));

const Footer = () => {
  const classes = UseStyles();
  return (
    <Container maxWidth="lg">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.footer}
      >
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
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <Typography variant="h5">
                <ul className="list-unstyled">
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">Visit</a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">Map</a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">
                      Events
                    </a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">
                      People
                    </a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">
                      Contract
                    </a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">
                      Privacy
                    </a>
                  </li>
                  <li className={classes.listItems}>
                    <a href="https://www.facebook.com/amrahmedgewaly/">
                      Terms &amp; conditions
                    </a>
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="flex-end"
      >
        <p>
          &copy;{new Date().getFullYear()} - The British University in Egypt |
          All rights reserved | Powered by Software Production Unit
        </p>
      </Grid>
    </Container>
  );
};

export default Footer;
