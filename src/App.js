import React, { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SearchButton from "./components/SearchButton";
import DaysForecast from "./components/DaysForecast";

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  const api = {
    key: "2c8c54799f4844dab268ab21925ec45e",
    base: "https://api.weatherbit.io/v2.0/forecast",
  };

  const searchWeather = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}/daily?city=${query}&days=7&key=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          // console.log(data);
        });

      document.querySelector(".search-location").classList.remove("open");
    }
  };

  const getWeather = () => {
    let lon;
    let lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        fetch(`${api.base}/daily?lat=${lat}&lon=${lon}&days=7&key=${api.key}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setWeather(data);
          });
      });
    }
  };

  // Event Listeners
  window.addEventListener("load", getWeather);

  const openSearch = () => {
    document.querySelector(".search-location").classList.add("open");
  };

  const closeSearch = () => {
    document.querySelector(".search-location").classList.remove("open");
  };

  return (
    <div className="container">
      <Header weatherLocation={weather} />
      <Weather weather={weather} />
      <DaysForecast daysForecast={weather} />
      <SearchButton openSearch={openSearch} />
      <div className="search-location">
        <i className="fas fa-chevron-left" onClick={closeSearch}></i>
        <h2 className="search-location-title">Search Location</h2>
        <input
          type="text"
          name="search"
          className="search-location-input"
          placeholder="City, Country Code"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={searchWeather}
        />
      </div>
    </div>
  );
}

export default App;
