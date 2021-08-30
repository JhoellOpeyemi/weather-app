const DaysForecast = ({ daysForecast }) => {
  let day2;
  let day3;
  let day4;
  let day5;
  let day6;
  let day7;

  function wordCount(str) {
    let word;
    const wordLength = str.split(" ").length;

    if (str.startsWith("Thunderstorm")) {
      return "Thunderstorm";
    }

    if (wordLength > 2) {
      word = str.split(" ").slice(0, 2).join(" ");
      return word;
    } else {
      return str;
    }
  }

  if (typeof daysForecast.data != "undefined") {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    day2 = days[new Date().getDay() + 1];
    day3 = days[new Date().getDay() + 2];
    day4 = days[new Date().getDay() + 3];
    day5 = days[new Date().getDay() + 4];
    day6 = days[new Date().getDay() + 5];
    day7 = days[new Date().getDay() - 1];
  }

  return (
    <section className="days-weather-report">
      {typeof daysForecast.data != "undefined" ? (
        <>
          <h3>7-day Weather Report</h3>
          <ul className="days-group">
            {/* First Day */}
            <li className="days-list">
              <span className="day1">Today</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[0].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[0].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[0].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Second Day */}
            <li className="days-list">
              <span className="day">{day2}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[1].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[1].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[1].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Third Day */}
            <li className="days-list">
              <span className="day">{day3}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[2].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[2].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[2].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Fourth Day */}
            <li className="days-list">
              <span className="day">{day4}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[3].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[3].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[3].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Fifth Day */}
            <li className="days-list">
              <span className="day">{day5}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[4].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[4].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[4].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Sixth Day */}
            <li className="days-list">
              <span className="day">{day6}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[5].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[5].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[5].temp)}&deg;C
              </span>{" "}
            </li>

            {/* Seventh Day */}
            <li className="days-list">
              <span className="day">{day7}</span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${daysForecast.data[6].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(daysForecast.data[6].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(daysForecast.data[6].temp)}&deg;C
              </span>{" "}
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default DaysForecast;
