import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecasts }) {
  const { date, temperature, humidity, wind } = forecasts;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

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
