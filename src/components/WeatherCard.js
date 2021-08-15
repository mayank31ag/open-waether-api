import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WeatherCardItem from "./WeatherCardItem";
import TempMode from "./TempMode";
import Navigation from "./Navigation";
import TempChart from "./TempChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  controlRight: {
    padding: theme.spacing(2),
    float: "right",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const MAX_LIMIT = 3;

export default function WeatherCard({ data }) {
  const classes = useStyles();
  let count = 0;
  let tempArr = Object.keys(data);
  if (tempArr.length > 5) {
    tempArr = Object.keys(data).splice(0, 5);
  }
  const [tempMode, setTempMode] = useState("celsius");
  const [startSlide, setStartSlide] = useState(0);
  const [activeChart, setActiveChart] = useState(tempArr[0]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={8}>
        <h1>Weather Prediction</h1>
      </Grid>
      {/* Nav */}
      <Grid item xs={8} className={classes.navigation}>
        <Navigation
          disabled={startSlide === 0}
          onClick={() => {
            setStartSlide(startSlide - 1);
          }}
        />
        <Navigation
          disabled={startSlide === tempArr.length - MAX_LIMIT}
          forward={true}
          onClick={() => {
            setStartSlide(startSlide + 1);
          }}
        />
      </Grid>

      {/* Temperature Mode Controller */}
      <Grid item xs={8}>
        <Paper className={classes.control}>
          <TempMode tempMode={tempMode} setTempMode={setTempMode} />
        </Paper>
      </Grid>

      {/* Main Component */}
      <Grid item xs={8}>
        <Grid container justifyContent="space-between">
          {tempArr.map((value, index) => {
            if (count >= MAX_LIMIT || index < startSlide) {
              return null;
            } else {
              count++;
              return (
                <Grid key={value} item>
                  <WeatherCardItem
                    data={data[value]}
                    convert={tempMode !== "celsius"}
                    onClick={() => {
                      setActiveChart(value);
                    }}
                  />
                </Grid>
              );
            }
          })}
        </Grid>

        {/* Chart */}
      </Grid>
      <Grid item xs={8}>
        <TempChart data={data[activeChart]} convert={tempMode === "celsius" && tempMode === "fahrenheit"} />
      </Grid>
    </Grid>
  );
}
