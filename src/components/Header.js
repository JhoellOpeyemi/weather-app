const Header = ({ weatherLocation }) => {
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

  return (
    <header>
      {typeof weatherLocation.data != "undefined" ? (
        <div>
          <h1 className="location">
            {weatherLocation.city_name}, {weatherLocation.country_code}
          </h1>
          <p className="date">{dateSetter(new Date())}</p>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
