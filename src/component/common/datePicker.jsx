import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const DatePicker = () => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider fullwidth utils={DateFnsUtils}>
      <KeyboardDatePicker
        // margin="normal"
        fullWidth
        size="small"
        inputVariant="outlined"
        format="MM/dd/yyyy"
        id="date-picker-inline"
        placeholder="Date Of Birth"
        label="Date Of Birth"
        value={selectedDate}
        maxDate={today}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
