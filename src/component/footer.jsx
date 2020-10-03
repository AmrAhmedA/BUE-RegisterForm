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
  Divider,
} from "@material-ui/core";
import BueLogo from "../images/bue eagle 2.bcb94f54.png";

const theme = createMuiTheme();

theme.typography.h3 = {
  fontWeight: "bold",

  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};

theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};

theme.typography.h5 = {
  fontSize: "0.9rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
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
  item: {
    marginTop: theme.spacing(1),
    "&:hover": {
      textDecoration: "none",
    },
  },
  anchor: {
    color: "black",
    "&:hover": {
      color: "red",
      textDecoration: "none",
    },
  },
}));

const Footer = () => {
  const classes = UseStyles();
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <Divider />
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
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="h3">
                THE BRITISH UNIVERSITY IN EGYPT
              </Typography>
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
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
            >
              <ul className="list-unstyled">
                <Typography variant="h4">
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Research
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Campus Life
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Alumni
                    </a>
                  </li>
                </Typography>
              </ul>
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
            >
              <ul className="list-unstyled">
                <Typography variant="h4">
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Admission
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Education
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      About BUE
                    </a>
                  </li>
                </Typography>
              </ul>
            </Grid>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
            >
              <Typography variant="h4">
                <ul className="list-unstyled">
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Staff
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      Students’ Union
                    </a>
                  </li>
                  <li className={classes.item}>
                    <a
                      className={classes.anchor}
                      href="https://www.facebook.com/amrahmedgewaly/"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </Typography>
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
      </ThemeProvider>
    </Container>
  );
};

export default Footer;
