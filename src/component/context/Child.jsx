import React, { useContext } from "react";
import FormContext from "./formContext";
const Child = () => {
  const currentAmr = useContext(FormContext);
  return <div>{console.log(currentAmr)}</div>;
};

export default Child;
