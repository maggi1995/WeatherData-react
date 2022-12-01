import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';

const cities = ['Hyderabad', 'Rajahmundry', 'Lucknow', 'Raipur'];

/**
 * 1. Use the above cities variable to populate the dropdown (select) options.
 * 2. When user selects a city from the dropdown, use the above getWeatherData function to get the latest
 * weather information and show it below the dropdown.
 *
 */
function App() {
  const cities = ['Hyderabad', 'Rajahmundry', 'Lucknow', 'Raipur'];
  const [city, setCity] = useState(cities);
  const [weather, setWeather] = useState(cities);
  //console.log(city)
  useEffect(() => {
    const weather = (city) => {
      console.log(city, 'ssssssss');
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setWeather(data);
          const { temp, temp_max, temp_min } = data.main;
          const { description } = data.weather[0];
          return {
            temp,
            temp_max,
            temp_min,
            description,
          };
        });
    };
    weather(city);
  }, []);
  console.log(weather, weather.main, 'data');
  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
      {city}
      <br />
      {weather?.main?.temp}
      <br />
      {weather?.main?.temp_min}
      <br />
      {weather?.coord?.lat}
      <br />
      {weather?.coord?.lan}
      <br />

      {/* {
        weather.main.map((word, index) => {
                     console.log(word)
        })
      } */}
      <p>{`Scattered clouds, 29.8°C (Max 31.2, Min 23.4)`}</p>
    </div>
  );
}

render(<App />, document.getElementById('root'));
