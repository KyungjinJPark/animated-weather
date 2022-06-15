import { useState, useEffect } from "react";
import axios from "axios";

const WEATHER_API = axios.create({
  baseURL: `https://api.weather.gov/`, // TODO: maybe timeout
});

const useForecast = (coords) => {
  const [weatherData, setWeatherData] = useState([]);
  const [status, setStatus] = useState("Loading");
  const [message, setMessage] = useState("Fetching your location's forecast area.");

  useEffect(() => {
    if (coords.length !== 0) {
      WEATHER_API.get(`points/${coords[0]},${coords[1]}`)
        .then((pointResp) => {
          let forecastURL = pointResp.data.properties.forecast;
          console.log(forecastURL.split(".gov/")[1])
          WEATHER_API.get(forecastURL.split(".gov/")[1])
            .then((forecastResp) => {
              console.log(forecastResp)
              setWeatherData(forecastResp.data.properties.periods);
              setStatus("Success");
              setMessage("Success");
            })
            .catch((_) => {
              setStatus("Failure");
              setMessage("Could not retrieve the forecast.");
            });
        })
        .catch((_) => {
          setStatus("Failure")
          setMessage("Failed to find your location's forecast area.")
        });
    } else {
      setStatus("Failure")
      setMessage("Invalid coordinate data.")
    }
  }, [coords]);

  return [weatherData, { status, message }];
}

export default useForecast;