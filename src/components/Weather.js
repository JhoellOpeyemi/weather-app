import OtherDetails from "./OtherDetails";

const Weather = ({ weather }) => {
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

          <OtherDetails otherDetails={weather} />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Weather;
