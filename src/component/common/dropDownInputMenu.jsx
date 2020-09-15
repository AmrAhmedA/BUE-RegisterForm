import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  makeStyles,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropDownInputMenu = ({ items, label, id }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      size="small"
      variant="outlined"
      className={classes.formControl}
    >
      <InputLabel size="small" id="demo-simple-select-label">
        {label}
      </InputLabel>
      <Select label={label} id={id} value={age} onChange={handleChange}>
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
