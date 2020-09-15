import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core/";

const DropDownInputMenu = ({ items, label, id }) => {
  const [value, setvalue] = useState("");

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel size="small" id="demo-simple-select-label">
        {label}
      </InputLabel>
      <Select label={label} id={id} value={value} onChange={handleChange}>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownInputMenu;
