import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIIntegration = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f5dd42f02bfc872099c76512500f7964'
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default APIIntegration;
