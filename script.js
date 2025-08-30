// Your WeatherAPI key
const apiKey = "b0e8a262c6e74a388bb63142251708";

// Function to fetch weather by coordinates
function getWeather(lat, lon) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Weather Data:", data);
      document.getElementById("weather").innerText =
        `Location: ${data.location.name}, ${data.location.country}
         Temp: ${data.current.temp_c}°C
         Condition: ${data.current.condition.text}`;
    })
    .catch(error => console.error("Error fetching weather:", error));
}

// Get user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log("Your location:", lat, lon);
      getWeather(lat, lon);
    },
    error => {
      console.error("Error getting location:", error);
      alert("Please allow location access to fetch weather.");
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}
