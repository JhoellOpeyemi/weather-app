import EachDay from "./EachDay";

const DaysForecast = ({ daysForecast }) => {
  return (
    <section className="days-weather-report">
      {typeof daysForecast.data != "undefined" ? (
        <>
          <h3>7-day Weather Report</h3>
          <EachDay eachDay={daysForecast} />
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default DaysForecast;
