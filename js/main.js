const APP = {
  location: document.getElementById("locationInput"),
  searchButton: document.getElementById("searchButton"),
  weatherContainer: document.getElementById("weather"),
  url: `https://api.weatherapi.com/v1/current.json?`,
  // Replace 'YOUR_API_KEY' with your WeatherAPI key
  apiKey: "YOUR_API_KEY",

  init: function () {
    console.log("APP.init");
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
