import './App.css';
// import RegisterForm from "./component/registerForm"
import HorizontalFormStepper from "./component/horizontalFormStepper"
import VerticalFormStepper from "./component/verticalFormStepper"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
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
