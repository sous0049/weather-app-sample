const APP = {
  location: document.getElementById("locationInput"),
  weatherContainer: document.getElementById("weather"),
  searchButton: document.getElementById("searchButton"),
  apiKey: "d2040744af7c4d19a71200220230711",

  init: function () {
    console.log("APP init");
    APP.searchButton.addEventListener("click", APP.fetchData);
  },

  fetchData: function () {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${APP.apiKey}&q=${APP.location.value}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        APP.weatherContainer.innerHTML = `<h2>Current Weather for: ${data.location.name}</h2>
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
      })
      .catch((error) => {
        console.error("Fetch API Error:", error);
        APP.weatherContainer.innerHTML = "Failed to fetch weather data.";
      });
  },
};

document.addEventListener("DOMContentLoaded", APP.init);

// document.addEventListener("DOMContentLoaded", () => {
//   const responseContainer = document.getElementById("response-container");

//   // Replace 'YOUR_API_KEY' with your WeatherAPI key
//   const apiKey = "d2040744af7c4d19a71200220230711";
//   const city = "New York"; // Replace with the city you want to get weather data for
//   // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Display the weather data
//       responseContainer.innerHTML = `<h2>Weather in ${data.location.name}</h2>
//       <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;
//       responseContainer.innerHTML = `< pre>${JSON.stringify(
//         data,
//         null,
//         2
//       )}</ pre>`;
//     })
//     .catch((error) => {
//       console.error("Fetch API Error:", error);
//       responseContainer.innerHTML = "Failed to fetch weather data.";
//     });
// });
