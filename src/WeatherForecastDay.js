import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return day[days];
  }

  console.log({ d: props });
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={50} />
      <div className="Forecast-temperatures">
        <span className="WeatherForecast-temp-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temp-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
