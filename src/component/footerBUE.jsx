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
import linkedInLogo from "../images/iconfinder_social-linkedin-circle_771370.png";
import FacebookLogo from "../images/f_logo_RGB-Blue_1024.png";
import TwitterLogo from "../images/Twitter_Social_Icon_Circle_Color.svg";
import YoutubeLogo from "../images/youtube_social_circle_red.png";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

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
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
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
  footerContainer: {
    backgroundColor: "#222222",
  },
  footer: {
    marginTop: theme.spacing(5),
  },
  title: {
    color: "white",
  },
  location: {
    color: "white",
  },
  listItems: {
    display: "inline",
    padding: theme.spacing(0.5),
    textDecoration: "underline",
  },
  item: {
    marginTop: theme.spacing(1),
    "&:hover": {
      textDecoration: "none",
    },
  },
  footerMobile: {
    [theme.breakpoints.down("md")]: {
      direction: "column",
      justify: "center",
      alignItems: "center",
    },
  },
  utilityItems: {
    [theme.breakpoints.down("sm")]: {
      direction: "column",
      justify: "center",
      alignItems: "center",
    },
  },
  anchor: {
    color: "white",
    "&:hover": {
      color: "red",
      textDecoration: "none",
    },
  },
  socialmedia: {
    display: "inline",
    padding: theme.spacing(0.2),
  },
}));

const FooterBUE = () => {
  const classes = UseStyles();

  return (
    <Grid className={classes.footerContainer}>
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
              <Hidden smDown>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  item
                  xs={12}
                  sm={2}
                  md={2}
                  lg={2}
                  xl={2}
                >
                  <Fade in={true}>
                    <img src={BueLogo} alt="" width="120px" />
                  </Fade>
                </Grid>
              </Hidden>
              <Grid
                container
                direction="column"
                className={classes.utilityItems}
                item
                xs={12}
                sm={12}
                md={10}
                lg={4}
                xl={4}
              >
                <Typography className={classes.title} variant="h3">
                  The British University in Egypt
                </Typography>
                <Typography className={classes.location} variant="h5">
                  LSuez Rd, Al Shorouk, Cairo Governorate, Egypt
                </Typography>
                <Typography variant="h5">
                  <ul className="list-unstyled">
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Visit
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Map
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Events
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        People
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Contact
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Privacy
                      </a>
                    </li>
                    <br></br>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Terms &amp; conditions
                      </a>
                    </li>
                    <li className={classes.listItems}>
                      <a
                        className={classes.anchor}
                        href="https://www.facebook.com/amrahmedgewaly/"
                      >
                        Social Media Hub
                      </a>
                    </li>
                    <li className={classes.socialmedia}>
                      <a href="https://www.facebook.com/amrahmedgewaly/">
                        <img src={FacebookLogo} alt="" width="20px" />
                      </a>
                    </li>
                    <li className={classes.socialmedia}>
                      <a href="https://www.facebook.com/amrahmedgewaly/">
                        <img src={TwitterLogo} alt="" width="20px" />
                      </a>
                    </li>

                    <li className={classes.socialmedia}>
                      <a href="https://www.facebook.com/amrahmedgewaly/">
                        <img src={YoutubeLogo} alt="" width="20px" />
                      </a>
                    </li>

                    <li className={classes.socialmedia}>
                      <a href="https://www.facebook.com/amrahmedgewaly/">
                        <img src={linkedInLogo} alt="" width="20px" />
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
                className={classes.footerMobile}
                item
                xs={4}
                sm={4}
                md={4}
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
                className={classes.footerMobile}
                item
                xs={4}
                sm={4}
                md={4}
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
                className={classes.footerMobile}
                item
                xs={4}
                sm={4}
                md={4}
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
              &copy;{new Date().getFullYear()} - The British University in Egypt
              | All rights reserved to Software Production Unit
            </p>
          </Grid>
        </ThemeProvider>
      </Container>
    </Grid>
  );
};

export default FooterBUE;
