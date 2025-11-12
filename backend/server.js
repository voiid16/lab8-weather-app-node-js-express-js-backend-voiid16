const express = require("express");
const app = express();

const cors = require("cors");
const axios = require("axios");
const { useLayoutEffect } = require("react");
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server up and it is listening to ${PORT}`);
});

app.get("/weather", async (req, res) => {
  // res.send("2222");

  const city = req.query.city;
  const resultJSON = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`
  );
  console.log(resultJSON);

  const weatherData = {
    city: resultJSON.data.name,
    temperature: resultJSON.data.main.temp,
    description: resultJSON.data.weather[0].description,
    pressure: resultJSON.data.main.pressure,
    humidity: resultJSON.data.main.humidity,
    icon: resultJSON.data.weather[0].icon,
  };
  // console.log(resultJSON.data);
  // res.json({
  //   msg: `Hello World. ${city} weather data will be returned.`,
  //   data: resultJSON.data,
  // });
  res.json(weatherData);
});

// app.get("/weather", (req, res) => {
//   const city = req.query.city;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee5746bc6ce02455d3b0f7e6b3d7ece2`;
//   axios
//     .get(url)
//     .then((response) => {
//       const weatherData = {
//         temperature: response.data.main.temp,
//         description: response.data.weather[0].description,
//         icon: response.data.weather[0].icon,
//       };
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "An error occurred." });
//     });
// });
