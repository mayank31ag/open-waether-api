import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { generateChartData } from "../utils/utils";

const TempChart = ({ data, convert }) => {
  const chartData = generateChartData({ data, convert });
  return chartData.length ? (
    <Paper>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={5} />
        <BarSeries valueField="temp" argumentField="date" />
      </Chart>
    </Paper>
  ) : null;
};

export default TempChart;
