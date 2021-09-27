const OtherDetails = ({ otherDetails }) => {
  return (
    <section>
      {typeof otherDetails.data != "undefined" ? (
        <div className="other-details">
          <div className="other-details-group">
            <h3>Maximum Temperature</h3>
            <p>
              {Math.round(otherDetails.data[0].max_temp)}
              <span className="details-group-unit"> &deg;C</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Minimum Temperature</h3>
            <p>
              {Math.round(otherDetails.data[0].min_temp)}
              <span className="details-group-unit"> &deg;C</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Wind Speed</h3>
            <p>
              {otherDetails.data[0].wind_spd.toFixed(1)}{" "}
              <span className="details-group-unit"> m/s</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Humidity</h3>
            <p>
              {Math.floor(otherDetails.data[0].rh)}
              <span className="details-group-unit"> %</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Pressure</h3>
            <p>
              {Math.floor(otherDetails.data[0].pres)}{" "}
              <span className="details-group-unit"> mb</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Precipitation</h3>
            <p>
              {Math.floor(otherDetails.data[0].precip)}{" "}
              <span className="details-group-unit"> mb</span>
            </p>
          </div>

          <div className="other-details-group">
            <h3>Visibility</h3>
            <p>
              {Math.round(otherDetails.data[0].vis)}{" "}
              <span className="details-group-unit"> km</span>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default OtherDetails;
