# Animated Weather

```Sales Pitch
This app will tell you the weather in your area and display some fun animations created by yours truly.
```

 <!-- [See the working app!](https://kyungjinjpark.github.io/animated-weather/) -->

## Project Overview

I dipped my feet in the world of animations in React using `react-spring` as the animation library, and I also added a dark/light mode feature that changes depending on time period of the displayed weather. I added some ***cute*** animations of a snowman or sun that autoplays in the main display using Airbnb's `lottie`.

Lil cool feature of the app: the week display at the bottom is a drag scroll list (courtesy of `react-indiana-drag-scroll`), so you can click and drag to view the weather for different time periods. Each time period is also an animated button, so give 'em a click and the main display will change.

I think it would be cool to do some more complex, interactive, and creative animations using something like `animejs` down the road.

There is a bit of working with REST APIs and using geolocation.

### !! The production build has a bug !!

There is some error that I believe has to do with `react-spring`. Therefore, production builds (including the `gh-pages` page), **but** if you *really* want to see the app, you're going to have to view the `npm start` test version... Sorry.

It would be found [here](https://kyungjinjpark.github.io/animated-weather/) if it were working.


## Learning Notes

- uh...

---

Setting up React on my own:
put index in dist
install react and react-dom // TODO: difference?
install (react hotloader => react fast refresh), babel, and webpack
create babel and webpack config files
write app code in src/
user webpack-dev-server to check progress
run webpack to build to dist

---

TODO
index and css has to be placed in dist to begin with
index needs to import css since webpack cant handle css in src rn
where to place lotties/
lotties not connected. use `lottie-web` or its wrapper `react-lottie-player`
dragscroller not connected. use `react-scroll-ondrag`

---

GOALS
refactor bad code & organization
git it to work in prod
get on gh-pages
Reincorporate minimal branch (maybe seperate endpoint)  
make app "better" w animations and features
Dockerize app

---

RESOURCES
API documentation :
https://www.weather.gov/documentation/services-web-api
https://weather-gov.github.io/api/general-faqs

example request : 
https://api.weather.gov/points/38.8894,-77.0352
https://api.weather.gov/gridpoints/LWX/76,64/forecast
https://api.weather.gov/gridpoints/LWX/96,70/forecast/hourly

geolocation : https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs

colors : https://www.color-hex.com/color-palette/54458
