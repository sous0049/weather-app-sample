const APP = {
  location: document.getElementById("locationInput"),
  searchButton: document.getElementById("searchButton"),
  weatherContainer: document.getElementById("weather"),
  url: `https://api.weatherapi.com/v1/current.json?`,
  // Replace 'YOUR_API_KEY' with your WeatherAPI key
  apiKey: "YOUR_API_KEY",

  init: function () {
    APP.searchButton.addEventListener("click", APP.fetchData);
  },

  fetchData: function () {
    const apiUrl = `${APP.url}key=${APP.apiKey}&q=${APP.location.value.trim()}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
