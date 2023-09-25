import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div>
      <h2>Weather for {data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
