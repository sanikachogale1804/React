import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY'; 

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/weathers=${city}&key=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]); 


  useEffect(() => {
    return () => {
      setWeatherData(null);
      setError(null);
      setLoading(false);
    };
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city); 
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>

      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && !loading && !error && (
        <div>
          <h2>{weatherData.data[0].city_name}</h2>
          <p>{weatherData.data[0].weather.description}</p>
          <p>Temperature: {weatherData.data[0].temp}°C</p>
          <p>Wind Speed: {weatherData.data[0].wind_spd} m/s</p>
          <p>Humidity: {weatherData.data[0].rh}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
