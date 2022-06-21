import "../styles/App.css";
import { useEffect, useState } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import cloudsImg from "../images/mild.jpg";
import clearImg from "../images/clear.jpg";
import rainImg from "../images/rain.jpg";
import snowImg from "../images/snow.jpg";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  const handleBackgroundImg = (weather) => {
    if (weather === "Rain") {
      return {
        backgroundImage: `url(${rainImg})`,
        backgroundSize: "cover",
      };
    }
    if (weather === "Clouds") {
      return {
        backgroundImage: `url(${cloudsImg})`,
      };
    }
    if (weather === "Clear") {
      return {
        backgroundImage: `url(${clearImg})`,
      };
    }
    if (weather === "Snow") {
      return {
        backgroundImage: `url(${snowImg})`,
      };
    }
    return {
      backgroundImage: `url(${cloudsImg})`,
    };
  };

  return (
    <div
      className="weather-app"
      style={handleBackgroundImg(selectedForecast?.description)}
    >
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
        searchText={searchText}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecasts={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
