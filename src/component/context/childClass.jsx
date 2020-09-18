import React, { Component } from "react";
import FormContext from "./formContext";
class ChildClass extends Component {
  render() {
    return (
      <FormContext.Consumer>
        {(context) => {
          console.log(context);
        }}
      </FormContext.Consumer>
    );
  }
}

export default ChildClass;
