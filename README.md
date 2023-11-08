# Weather api

#### A fetch Follow Along Exercise

In this exercise, you'll learn how to use the Fetch API to retrieve weather information for a specific location using the ![Alt text](image.png).

[Weather API website](https://www.weatherapi.com/)

Prerequisites:

1. a
2. You need an API key from OpenWeatherMap. You can sign up for a free API key on the OpenWeatherMap website.
   Exercise Steps
   Create an HTML file (e.g., index.html) with the following structure:

HTML
Copy code

<pre>
<!DOCTYPE html>
<html>
<head>
    <title>Fetch API Weather Exercise</title>
</head>
<body>
    <h1>Fetch API Weather Exercise</h1>
    <div id="response-container">
        <!-- Weather data will be displayed here -->
    </div>

    <script src="script.js"></script>
</body>
</html>
</pre>

Create a JavaScript file (e.g., script.js) to write the Fetch API GET request code. Replace 'YOUR_API_KEY' with your OpenWeatherMap API key:

javascript
Copy code

<pre>
document.addEventListener("DOMContentLoaded", () => {
    const responseContainer = document.getElementById("response-container");

    // Replace 'YOUR_API_KEY' with your WeatherAPI key
    const apiKey = 'YOUR_API_KEY';
    const city = 'New York'; // Replace with the city you want to get weather data for
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // Display the weather data
        responseContainer.innerHTML = `< pre>${JSON.stringify(data, null, 2)}</ pre>`;

    })
    .catch(error => {
        console.error("Fetch API Error:", error);
        responseContainer.innerHTML = "Failed to fetch weather data.";
    });
});
</pre>

Response code

<pre>
{ "location": { "name": "New York", "region": "New York", "country": "United States of America", "lat": 40.71, "lon": -74.01, "tz_id": "America/New_York", "localtime_epoch": 1699387370, "localtime": "2023-11-07 15:02" }, "current": { "last_updated_epoch": 1699387200, "last_updated": "2023-11-07 15:00", "temp_c": 16.7, "temp_f": 62.1, "is_day": 1, "condition": { "text": "Sunny", "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000 }, "wind_mph": 2.2, "wind_kph": 3.6, "wind_degree": 260, "wind_dir": "W", "pressure_mb": 1008, "pressure_in": 29.75, "precip_mm": 0, "precip_in": 0, "humidity": 65, "cloud": 0, "feelslike_c": 16.7, "feelslike_f": 62.1, "vis_km": 16, "vis_miles": 9, "uv": 5, "gust_mph": 18, "gust_kph": 28.9 } }
</pre>

Open the HTML file (index.html) in your web browser. The response with weather data for New York will be displayed on the web page.

What's Happening
We start by creating a basic HTML structure with a placeholder for displaying the weather data.

We create a JavaScript file that fetches weather data from the Weather API.

We use the fetch function to send a GET request to the Weather API's weather endpoint, including the city name and the API key.

We handle the response by checking for network errors and parsing the JSON response.

The weather data is displayed on the web page.
