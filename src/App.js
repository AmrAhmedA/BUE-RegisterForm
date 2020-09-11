import './App.css';
// import RegisterForm from "./component/registerForm"
import HorizontalFormStepper from "./component/horizontalFormStepper"
import VerticalFormStepper from "./component/verticalFormStepper"
import { useMediaQuery, withWidth, createMuiTheme } from '@material-ui/core/';
import PropTypes from 'prop-types';
import React from 'react';


const warningTitleCSS =
  "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
setTimeout(
  console.log.bind(console, "%c#Amr Ahmed", warningTitleCSS),
  0
)

const theme = createMuiTheme({ //custom breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App(props) {
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  // const { width } = props;
  // console.log(width);
  return (
    <React.StrictMode>
      {console.log(matches)}
      {matches ? <VerticalFormStepper /> :
        <HorizontalFormStepper />}
    </React.StrictMode>
  );

}
App.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(App);
