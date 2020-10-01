import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";

const WEATHER_API = axios.create({
  baseURL: `https://api.weather.gov/`,
});

const Content = () => {
  const [resp, setResp] = useState({});

  useEffect(() => {
    /**
     * Working geolocation in javascript
     * https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
     */
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    let usrLat = 0;
    let usrLong = 0;
    navigator.geolocation.getCurrentPosition((pos) => {
      usrLat = pos.coords.latitude;
      usrLong = pos.coords.longitude;
    });
    WEATHER_API.get(`points/${usrLat},${usrLong}`, {
      params: {},
    })
      .then((response) => {
        let forecastURL = response.data.properties.forecast;
        WEATHER_API.get(forecastURL.split(".gov/")[1])
          .then((response) => {
            setResp(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        {/* <code>{resp.toString()}</code> */}
        {Object.entries(resp).map(([key, value]) => (
          <code>
            {key}: {value.toString()} <br />
          </code>
        ))}
        <h1 style={{ textShadow: "0px 0px 30px #000" }}>Sunny</h1>
        <h2>62&deg;F / 73 &deg;F</h2>
      </Container>
    </>
  );
};

export default Content;
