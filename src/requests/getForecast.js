import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  const WEATHER_APP_API = `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${searchText}`;

  setErrorMessage("");

  return axios
    .get(WEATHER_APP_API)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Server error! Please try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
