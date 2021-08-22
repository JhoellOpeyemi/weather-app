const Weather = ({ weather }) => {
  return (
    <main>
      {typeof weather.data != "undefined" ? (
        <div className="weather-details">
          <div className="temperature-group">
            <img
              src="./../assets/c04n.png"
              alt="temperature icon"
              className="temperature-img"
            />
            <p className="temperature">
              {Math.floor(weather.data[0].app_temp)}
              <span className="degree-sign">&deg;</span>
              <span className="degree-unit">C</span>
            </p>
            <p className="desc">{weather.data[0].weather.description}</p>
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
