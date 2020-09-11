import './App.css';
// import RegisterForm from "./component/registerForm"
import HorizontalFormStepper from "./component/horizontalFormStepper"
import VerticalFormStepper from "./component/verticalFormStepper"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

const warningTitleCSS =
  "color:red; font-size:50px; font-weight: bold; -webkit-text-stroke: 1px black;";
setTimeout(
  console.log.bind(console, "%c#Amr Ahmed", warningTitleCSS),
  0
)
function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <React.StrictMode>
      {console.log(matches)}
      {matches ? <VerticalFormStepper /> :
        <HorizontalFormStepper />}
    </React.StrictMode>

  );
}

export default App;
