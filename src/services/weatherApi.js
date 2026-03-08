import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_API_BASE_URL, API_UNITS } from '../utils/constants';

/**
 * Fetch weather data for a specific city
 * @param {string} city - City name
 * @returns {Promise} Weather data from OpenWeatherMap API
 */
export const fetchWeatherData = async (city) => {
  try {
    const url = `${WEATHER_API_BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=${API_UNITS}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
