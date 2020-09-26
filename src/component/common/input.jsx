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
    error,
    ...rest
  } = props;
  console.log("Input", error);

  return (
    <React.Fragment>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          size="small"
          id={id}
          name={name}
          value={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          // helperText={"" || helperText}
          // error={error || true}
          {...(error && { error: true, helperText: error })}
          {...rest}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default Input;
