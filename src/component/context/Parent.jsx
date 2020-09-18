import React from "react";
import FormContext from "./formContext";
import Child from "./Child";
const Amr = "Amora";
const Parent = () => {
  return (
    <FormContext.Provider value={Amr}>
      <Child />
    </FormContext.Provider>
  );
};

export default Parent;
