import axios from "axios";
import React, { useEffect, useState } from "react";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";

const App = () => {
  const [all, setAll] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=5290cfc0227a4c6a9d8151633222312&q=paris"
      )
      .then((data) => {
        setAll(data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bos = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=5290cfc0227a4c6a9d8151633222312&q=${city}`
      )
      .then((data) => {
        setAll(data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {all && (
        <div className="all">
          <div className="box">
            <div className="title">
              <h1>weather app</h1>
              <h3>{all.location.country}</h3>
              <h2>{all.location.name}</h2>
              <h3>{all.location.localtime}</h3>
            </div>
            <div className="twice">
              <div className="img">
                <img src={all.current.condition.icon} alt="" />
                <p>{all.current.condition.text}</p>
              </div>
              <div className="text">
                <div className="info">
                  <p>
                    <AirIcon className="icon" />
                    wind
                  </p>
                  <p> {all.current.wind_mph}</p>
                </div>
                <div className="info">
                  <p>
                    <ThermostatIcon className="icon" />
                    gradus^
                  </p>
                  <p> {all.current.temp_c}</p>
                </div>
                <div className="info">
                  <p>
                    <OpacityIcon className="icon" />
                    humiditil
                  </p>
                  <p> {all.current.humidity}</p>
                </div>
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  placeholder="change cty name"
                />
                <button onClick={bos}>submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
