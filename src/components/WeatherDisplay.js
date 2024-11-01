import React from "react";
import styled from "styled-components";
import { getTemperatureIcon } from "../helpers";
const WeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 200px;
  &:hover {
    background-color: #0056b3;
    transform: scale(1.01);
  }
`;

const WeatherInfo = styled.p`
  font-size: 1.2em;
  text-align: center;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const WeatherDisplay = ({ weather, addFavorite }) => {
  const {
    temperature,
    weatherConditions,
    humidity,
    windSpeed,
    city,
    currentUnits,
    isDaytime,
    time,
  } = weather;

  const dateTimeString = time;
  const formattedTime = dateTimeString.split("T")[1];
  const weatherIcon = getTemperatureIcon(temperature, isDaytime);
  return (
    <div>
      <WeatherContainer>
        <Card>
          <WeatherIcon src={weatherIcon} alt="Weather icon" />
          <WeatherInfo>
            {temperature} {currentUnits.temperature_2m}
          </WeatherInfo>
          <WeatherInfo> {weatherConditions}</WeatherInfo>
        </Card>

        <Card>
          <WeatherInfo style={{ fontSize: "30px" }}>{city}</WeatherInfo>

          <WeatherInfo style={{ fontSize: "40px" }}>
            {formattedTime}
          </WeatherInfo>
        </Card>

        <Card>
          <WeatherIcon
            src={"https://cdn-icons-png.flaticon.com/512/4888/4888486.png"}
            alt="Weather icon"
          />
          <WeatherInfo>
            Humidity: {humidity} {currentUnits.relative_humidity_2m}
          </WeatherInfo>
        </Card>
        <Card>
          <WeatherIcon
            src={
              "https://i.pinimg.com/originals/45/69/9b/45699b2e23cd8359b99430fac758e2ad.png"
            }
            alt="Weather icon"
          />
          <WeatherInfo>
            Wind Speed: {windSpeed} {currentUnits.windspeed_10m}
          </WeatherInfo>
        </Card>
      </WeatherContainer>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <AddButton onClick={() => addFavorite(weather)}>
          Add to Favorites
        </AddButton>
      </div>
    </div>
  );
};

export default WeatherDisplay;
