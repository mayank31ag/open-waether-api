import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { averageTemp, convertTempToFahrenheit } from "../utils/utils";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const RenderItem = ({ text, value }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h2">
        {text}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {value}
      </Typography>
    </>
  );
};

export default function WeatherCardItem({
  data,
  convert = false,
  onClick = () => { },
}) {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={onClick}>
      <CardContent>
        <RenderItem
          text={"Temp:"}
          value={convertTempToFahrenheit(averageTemp(data), convert)}
        />
        <RenderItem text={"Date:"} value={data[0].dt_txt.substr(0, 10)} />
      </CardContent>
    </Card>
  );
}
