export const weatherConditionsMap = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Drizzle: Light",
  53: "Drizzle: Moderate",
  55: "Drizzle: Dense intensity",
  56: "Freezing Drizzle: Light",
  57: "Freezing Drizzle: Dense intensity",
  61: "Rain: Slight",
  63: "Rain: Moderate",
  65: "Rain: Heavy intensity",
  66: "Freezing Rain: Light",
  67: "Freezing Rain: Heavy intensity",
  71: "Snow fall: Slight",
  73: "Snow fall: Moderate",
  75: "Snow fall: Heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",
  85: "Snow showers: Slight",
  86: "Snow showers: Heavy",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export const getTemperatureIcon = (temperature, isDaytime) => {
  console.log(temperature, isDaytime);
  if (temperature > 30) {
    return isDaytime
      ? "https://cdn-icons-png.freepik.com/512/6805/6805171.png"
      : "https://cdn2.iconfinder.com/data/icons/weather-line-21/64/weatherwarmnight-512.png";
  }
  if (temperature > 20) {
    return isDaytime
      ? "https://cdn3.iconfinder.com/data/icons/vibrant-weather/70/Colour_Thermometer_warm_sun-512.png"
      : "https://cdn2.iconfinder.com/data/icons/weather-line-21/64/weatherwarmnight-512.png";
  }
  if (temperature > 10) {
    return isDaytime
      ? "https://cdn0.iconfinder.com/data/icons/weather-flat-15/32/wind_cool_cloud_weather_element_day-512.png"
      : "https://cdn-icons-png.freepik.com/256/13425/13425150.png";
  }
  // Default icon for temperatures 10 or below
  return "https://cdn-icons-png.flaticon.com/512/1684/1684425.png";
};
