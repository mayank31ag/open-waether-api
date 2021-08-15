import React from "react";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  dFlex: {
    flexDirection: "row",
  },
}));

export default function TempMode({ tempMode, setTempMode }) {
  const classes = useStyles();
  const handleChange = (event) => {
    setTempMode(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="temp"
        name="temp1"
        value={tempMode}
        onChange={handleChange}
        className={classes.dFlex}
      >
        <FormControlLabel
          value="fahrenheit"
          control={<Radio />}
          label="Fahrenheit"
        />
        <FormControlLabel
          value="celsius"
          control={<Radio />}
          label="Celsius"
        />
      </RadioGroup>
    </FormControl>
  );
}
