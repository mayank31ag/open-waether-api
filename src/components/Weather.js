import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { parseWeatherApiData } from "../utils/utils";
const fetchUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&units=metric";
const Card = () => {
  const [data, setData] = useState(null);
  const getData = () => fetch(fetchUrl).then((res) => res.json());
  useEffect(() => {
    getData().then((data) => setData(parseWeatherApiData(data)));
  }, []);
  return <div>{data ? <WeatherCard data={data} /> : "Loading..."}</div>;
};

export default Card;
