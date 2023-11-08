document.addEventListener("DOMContentLoaded", () => {
  const responseContainer = document.getElementById("response-container");

  // Replace 'YOUR_API_KEY' with your WeatherAPI key
  const apiKey = "d2040744af7c4d19a71200220230711";
  const city = "New York"; // Replace with the city you want to get weather data for
  // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display the weather data
      responseContainer.innerHTML = `<h2>Weather in ${data.location.name}</h2>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;
      responseContainer.innerHTML = `< pre>${JSON.stringify(
        data,
        null,
        2
      )}</ pre>`;
    })
    .catch((error) => {
      console.error("Fetch API Error:", error);
      responseContainer.innerHTML = "Failed to fetch weather data.";
    });
});
