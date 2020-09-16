import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const DatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-01-01T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider fullwidth utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="outlined"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date Of Birth"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
