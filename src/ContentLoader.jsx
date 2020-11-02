import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";

const WEATHER_API = axios.create({
  baseURL: `https://api.weather.gov/`,
});

const Content = () => {
  const [usrCoords, setUsrCoords] = useState([false, -1, -1]); //containsValidValues, Latitude, Longitude
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    getUserLat(); //async state set
  }, [])

  useEffect(() => {
    if (usrCoords[0]) {
      console.log("GET request sent");
      WEATHER_API.get(`points/${usrCoords[1]},${usrCoords[2]}`, { params: {} })
        .then((pointResp) => {
          let forecastURL = pointResp.data.properties.forecast;
          console.log(forecastURL);
          WEATHER_API.get(forecastURL.split(".gov/")[1])
            .then((forecastResp) => {
              setWeatherData(forecastResp.data.properties.periods);
            })
            .catch((error) => {
              //TODO: something in case of error
              console.log(error);
            });
        })
        .catch((error) => {
          //TODO: something in case of error
          console.log(error);
        });
    }
  }, [usrCoords[0]]);

  const getUserLat = () => {
    /**
     * Working geolocation in javascript
     * https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
     */
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log("USER data");
        setUsrCoords([true, pos.coords.latitude, pos.coords.longitude]);
        console.log("async fulfilled");
      }, (err) => {
        //TODO: something in case of error
        console.log("location services not available");
      });
    } else {
      console.log("DEFAULT data");
      // default location: Washington, DC
      setUsrCoords([true, 38.8892, -77.0506]);
    }
  }

  return <div id="main">{weatherData[0] ? <Dashboard weatherData={weatherData} /> : <Loading />}</div>
}

export default Content;

const Loading = () => <>"Loading..."</>;