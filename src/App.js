import React from 'react';
import HorizontalFormStepper from "./component/horizontalFormStepper"
import VerticalFormStepper from "./component/verticalFormStepper"
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { useMediaQuery, withWidth, createMuiTheme } from '@material-ui/core/';
import { StepperContent } from "./component/stepperContent"
import NavBar from './component/navBar';
// import Child from './component/context/Child';
// import Parent from './component/context/Parent';
// import ChildClass from './component/context/childClass';
// import ParentClass from './component/context/parentClass';
// import DropDownInputMenu from './component/common/dropDownInputMenu';


// const warningTitleCSS =
//   "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
// setTimeout(
//   console.log.bind(console, "%c#Amr Ahmed", warningTitleCSS),
//   0
// )

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
  const stepContent = StepperContent();
  // const items = ["Male", "Female", "other"]
  // const { width } = props;
  // console.log(width);
  return (
    <div>
      {console.log("App - Rendered")}
      {/* {console.log(matches)} */}
      <NavBar />
      {matches ? <VerticalFormStepper {...stepContent} /> :
        <HorizontalFormStepper {...stepContent} />}
    </div>
  );

}
App.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(App);
