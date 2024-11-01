import axios from "axios";
const fetchWeatherData = async (city) => {
  try {
    // Fetch coordinates for the entered city using a Geocoding API
    const geocodeResponse = await axios.get(
      `https://nominatim.openstreetmap.org/search`,
      {
        params: { city, format: "json", limit: 1 },
      }
    );

    if (geocodeResponse.data.length === 0) {
      alert("City not found");
    }

    const { lat, lon, name } = geocodeResponse.data[0];
    const weatherResponse = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude: lat,
          longitude: lon,
          current:
            "temperature_2m,weathercode,windspeed_10m,relative_humidity_2m",
          hourly:
            "temperature_2m,weathercode,windspeed_10m,relative_humidity_2m",
          start: new Date().toISOString().split("T")[0],
          end: new Date().toISOString().split("T")[0],
        },
      }
    );

    const currentWeather = await fetchCurrentWeather(lat, lon);

    let weatherInfo = currentWeather.data.current_weather;

    weatherInfo.cityName = name;

    return { weatherResponse, weatherInfo };
  } catch (err) {
    console.error(err);
  }
};

// To fetch the times of different zones and day/night values
const fetchCurrentWeather = async (lat, lon) => {
  try {
    const currentWeather = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude: lat,
          longitude: lon,
          current_weather: true,
          timezone: "auto", // Automatically uses the correct timezone
        },
      }
    );

    return currentWeather;
  } catch (err) {
    console.error("Error fetching time data:", err);
  }
};

export { fetchWeatherData };
