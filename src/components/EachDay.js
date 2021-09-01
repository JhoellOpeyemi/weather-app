const EachDay = ({ eachDay }) => {
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

  if (typeof eachDay.data != "undefined") {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    day2 = days[(new Date().getDay() + 1) % 7];
    day3 = days[(new Date().getDay() + 2) % 7];
    day4 = days[(new Date().getDay() + 3) % 7];
    day5 = days[(new Date().getDay() + 4) % 7];
    day6 = days[(new Date().getDay() + 5) % 7];
    day7 = days[(new Date().getDay() + 6) % 7];
  }

  return (
    <>
      {typeof eachDay.data != "undefined" ? (
        <>
          {eachDay.data.map((data, index) => (
            <li className="days-list" key={index}>
              <span className="day">
                {index === 0
                  ? "Today"
                  : index === 1
                  ? day2
                  : index === 2
                  ? day3
                  : index === 3
                  ? day4
                  : index === 4
                  ? day5
                  : index === 5
                  ? day6
                  : index === 6
                  ? day7
                  : ""}
              </span>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${eachDay.data[index].weather.icon}.png`}
                alt="temperature-icon"
                className="day-img"
              />
              <span className="day-desc">
                {wordCount(eachDay.data[index].weather.description)}
              </span>
              <span className="day-temp">
                {Math.round(eachDay.data[index].temp)}&deg;C
              </span>
            </li>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default EachDay;
