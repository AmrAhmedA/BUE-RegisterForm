import React from "react";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const Input = (props) => {
  const {
    label,
    name,
    value,
    id,
    helperText,
    placeholder,
    onChange,
    ...rest
  } = props;
  return (
    <React.Fragment>
      <FormControl fullWidth>
        <TextField
          {...rest}
          variant="outlined"
          size="small"
          id={id}
          name={name}
          value={value}
          label={label}
          placeholder={placeholder}
          helperText={"" || helperText}
          onChange={onChange}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default Input;
