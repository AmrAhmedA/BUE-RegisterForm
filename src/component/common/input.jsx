import React from "react";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    maxLength,
    ...rest
  } = props;
  console.log("Input -Rendered");

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
          inputProps={{ maxLength: maxLength }}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default Input;
