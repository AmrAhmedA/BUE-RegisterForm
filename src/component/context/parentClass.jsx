import React, { Component } from "react";
import ChildClass from "./childClass";
import FormContext from "./formContext";
class ParentClass extends Component {
  state = { name: { firstname: "Amr" } };
  render() {
    return (
      <FormContext.Provider value={this.state.name}>
        <ChildClass />
      </FormContext.Provider>
    );
  }
}

export default ParentClass;
