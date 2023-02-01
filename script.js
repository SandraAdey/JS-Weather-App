let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 19.7,
    humidity: 80,
  },
  lisbon: {
    temp: 19.7,
    humidity: 80,
  },
  "san francisco": {
    temp: 19.7,
    humidity: 80,
  },
  moscow: {
    temp: 19.7,
    humidity: 80,
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(weather.paris.temp);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${weather.paris.temp}°C (${fahrenheitTemperature}F) in ${city} with a ${humidity}`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
