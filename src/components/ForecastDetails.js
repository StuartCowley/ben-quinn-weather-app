import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecasts }) {
  const { date, temperature, humidity, wind } = forecasts;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">
        <b>{formattedDate}</b>
      </div>
      <div className="forecast-details_max-temperature">
        Max Temperature: {temperature.max}&deg;c
      </div>
      <div className="forecast-details_min-temperature">
        Min Temperature: {temperature.min}&deg;c
      </div>
      <div className="forecast-details_humidity">Humidity: {humidity}%</div>
      <div className="forecast-details_wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
