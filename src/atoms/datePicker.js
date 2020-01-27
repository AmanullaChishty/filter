import React, { Fragment } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';



function Datepicker(props) {
    
  const {
    label,
    inputProps,
    placeholder,
    format
  } = props;


  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        value={inputProps.value}
        placeholder={placeholder}
        label={label}
        onChange={e => inputProps.onChange(e)}        
        format={format}
        {...inputProps}
      />
      </MuiPickersUtilsProvider>
      </Fragment>
  )
}

export default Datepicker