import OtherDetails from "./OtherDetails";

const Weather = ({ weather }) => {
  // create dateSetter function with days and months as arrays
  const dateSetter = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // set the date
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    // return date in format - dd mm yy
    return `${day} ${date} ${month}, ${year}`;
  };

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
    <>
      {typeof weather.data != "undefined" ? (
        <div className="weather-details-wrapper">
          <div className="weather-details">
            <div className="location-details">
              <h1 className="location">
                {weather.city_name}, {weather.country_code}
              </h1>
              <p className="date">{dateSetter(new Date())}</p>
            </div>
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
          </div>

          <OtherDetails otherDetails={weather} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Weather;
