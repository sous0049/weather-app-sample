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
    if (APP.location.value.trim() === "") {
      APP.errorHandler("Please enter a valid location");
      return;
    }
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        APP.buildCard(data);
      })
      .catch((error) => {
        APP.errorHandler(error);
      });
  },

  buildCard: function (data) {
    APP.weatherContainer.innerHTML = `
        <h2>Current Weather for: ${data.location.name}</h2>
        <div class="weatherApp__card card">
          <div class="card__condition container--text">
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
            <p>Currently weather <span>is ${data.current.condition.text}</span></p>
          </div>
          <div class="card__details">
            <div class="card__details--container">
              <p>Humidity: ${data.current.humidity}%</p>
              <p>Wind: ${data.current.wind_kph} km/h</p>
            </div>
            <p>Temperature: ${data.current.temp_c}ºC or ${data.current.temp_f}ºF</p>
            <p>Feels like: ${data.current.feelslike_c}ºC or ${data.current.feelslike_f}ºF</p>
          </div>
        </div>`;
  },

  errorHandler: (err) => {
    APP.weatherContainer.innerHTML = `<h4>${err}</h4>`;
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
