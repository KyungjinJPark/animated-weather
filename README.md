# Animated Weather 🌞

```Sales Pitch
This app will tell you the weather in your area and display some fun animations created by yours truly.
```

 <!-- [See the working app!](https://kyungjinjpark.github.io/animated-weather/) -->

## Project Overview

Animated Weather will show you the forecast for the week in your area (given you granted geolocation permission to the app. Otherwise, it will just show the weather in DC). The main display shows a detailed description of the weather along with a cute animation, and the secondary display shows the temperatures of time periods throughout the week. If you click on a specific time period, it will update the main display to expand on the weather for that time period. 

I dipped my feet in the world of web animations using the `react-spring` animation library. I used `react-spring` to animate the transitions between weather displays among other smaller things. The *cute* sun and snowman animations are stored as something called `lottie` files. These are lightweight vector-based animations built for the web and developed by Airbnb. I also added a dark/light mode feature that changes depending on time period of the displayed weather.

### ⚠ The Production Build has a Bug! ⚠

The production build has some error that I believe has to do with `react-spring`. The end result is that the `gh-pages` page doesn't work. If you'd like to view the app for the time being, you're going to have to run the project in the development environment... Sorry.

It would be found [here](https://kyungjinjpark.github.io/animated-weather/) if it were working.

### Looking Ahead

I think it would be cool to create some more complex, interactive, and creative animations using `react-spring` or even some other libraries `animejs` down the road.

---

## 📋 The TODO

- index needs to import css since webpack cant handle css in src rn
- where to place lotties/
- lotties not connected. use `lottie-web` or its wrapper `react-lottie-player`
- dragscroller not connected. use `react-scroll-ondrag`
- refactor bad code & organization
- git it to work in prod
- get on gh-pages
- reincorporate minimal branch (maybe seperate endpoint)  
- make app "better" w animations and features
- dockerize app

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

colors:
https://www.color-hex.com/color-palette/54458
