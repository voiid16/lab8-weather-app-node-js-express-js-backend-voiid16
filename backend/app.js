const form = document.querySelector("form");
const weatherDiv = document.querySelector("#weatherDiv");
form.addEventListener("submit", displayWeather);
//get ity name from input and fetch data from API
async function displayWeather(event) {
  event.preventDefault();
  const city = document.querySelector("#cityInput").value;
  const response = await fetch(`http://localhost:3000/weather?city=${city}`);
  const data = await response.json();
  console.log(data);
  weatherDiv.innerHTML = `
    <div class="weather">
        <p><strong>Temperature:</strong> ${data.temperature}</p>
        <p><strong>Pressure:</strong> ${data.pressure}</p>
        <p><strong>Humidity:</strong> ${data.humidity}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather Icon" />
    </div>
  `;
}
