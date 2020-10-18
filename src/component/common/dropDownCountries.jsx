import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core/";
import en from "react-phone-number-input/locale/en.json";
const DropDownCountries = ({ items, label, id, onChange, value, name }) => {
  return (
    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel size="small" id={id}>
        {label}
      </InputLabel>
      <Select
        label={label}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {en[item]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownCountries;
