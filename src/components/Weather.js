const Weather = ({ weather }) => {
  // If typeof weather.data is not equal to undefined, get weather icon code

  function wordCount(str) {
    let word;
    const wordLength = str.split(" ").length;
    if (wordLength > 2) {
      word = str.split(" ").slice(0, 1).join(" ");
    } else {
      return str;
    }
    return word;
  }

  return (
    <main>
      {typeof weather.data != "undefined" ? (
        <div className="weather-details">
          <div className="temperature-group">
            <img
              // set img src based on weather icon code from above
              src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`}
              alt="temperature icon"
              className="temperature-img"
            />
            <p className="temperature">
              {Math.round(weather.data[0].temp)}
              <span className="degree-sign">&deg;</span>
              <span className="degree-unit">C</span>
            </p>
            <p className="desc">
              {wordCount(weather.data[0].weather.description)}
            </p>
          </div>

          <div className="other-details">
            <div className="other-details-group">
              <h3>Wind Speed</h3>
              <p>{weather.data[0].wind_spd.toFixed(1)} m/s</p>
            </div>

            <div className="other-details-group">
              <h3>Humidity</h3>
              <p>{Math.floor(weather.data[0].rh)}%</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Weather;
