import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

function ForecastSummary({ date, description, icon, temperature }) {
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{formattedDate}</div>
      <div className="forecast-summary_icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;c
      </div>
      <div className="forecast-summary_description">{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
