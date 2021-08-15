import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
  },
}));

export default function IconButtons({
  forward = false,
  disabled,
  onClick = () => { },
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton disabled={disabled} onClick={onClick}>
        {forward ? <ArrowForwardIcon /> : <ArrowBackIcon />}
      </IconButton>
    </div>
  );
}
