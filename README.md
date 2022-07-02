# Animated Weather 🌞

```Sales Pitch
This app will tell you the weather in your area and display some fun animations created by yours truly.
```

🎉 [Check out the working app here!](https://kyungjinjpark.github.io/animated-weather/) 🎉

## Project Overview

Animated Weather will show you the forecast for the week in your area (given you granted geolocation permission to the app. Otherwise, it will just show the weather in DC). The main display shows a detailed description of the weather along with a cute animation, and the secondary display shows the temperatures of time periods throughout the week. If you click on a specific time period, it will update the main display to expand on the weather for that time period. 

I dipped my feet in the world of web animations using the `react-spring` animation library. I used `react-spring` to animate the transitions between weather displays among other smaller things. The *cute* sun and snowman animations are stored as something called `lottie` files. These are lightweight vector-based animations built for the web and developed by Airbnb. I also added a dark/light mode feature that changes depending on time period of the displayed weather.

I also performed a naive `Docker`ization of the app. Now I can deploy it with ease to AWS or AWS.

## The Production Build

The working app is hosted [here](https://kyungjinjpark.github.io/animated-weather/) courtesy of GitHub pages. No more bug, no more downlaoding.

## Looking Ahead

I think it would be cool to create some more complex, interactive, and creative animations using `react-spring` or even some other libraries `animejs` down the road.

---

## 📋 The TODO

- reincorporate minimal branch (maybe seperate endpoint)  
- make app "better" w animations and features

---

## Learning Notes

I enjoyed not using create-react-app to set up the project. It helped me understand how these React projects work better. Main components: React, Babel, and Webpack.

## Links

API documentation:
https://www.weather.gov/documentation/services-web-api
https://weather-gov.github.io/api/general-faqs

example request: 
https://api.weather.gov/points/38.8894,-77.0352
https://api.weather.gov/gridpoints/LWX/76,64/forecast
https://api.weather.gov/gridpoints/LWX/96,70/forecast/hourly

geolocation:
https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

theme-ing:
https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
https://www.color-hex.com/color-palette/54458

dockerizing:
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/