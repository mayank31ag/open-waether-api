const parseWeatherApiData = (data) =>
  data.list.reduce((r, a) => {
    var key = a.dt_txt.substr(0, 10).replaceAll("-", "");
    r[key] = [...(r[key] || []), a];
    return r;
  }, {});

const averageTemp = (data) => {
  const sum = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.main.temp,
    0
  );
  return (sum / data.length).toFixed(2);
};

const convertToFahrenheit = (temp) => ((temp * 9) / 5 + 32).toFixed(2);

const convertTempToFahrenheit = (temp, convert) => {
  return convert ? `${convertToFahrenheit(temp)} F` : `${temp} C`;
};

const generateChartData = ({ data, convert }) =>
  data.map(({ dt_txt, main: { temp } }) => ({
    date: dt_txt,
    temp: convert ? convertToFahrenheit(temp) : temp,
  }));

export {
  parseWeatherApiData,
  averageTemp,
  convertToFahrenheit,
  convertTempToFahrenheit,
  generateChartData,
};
