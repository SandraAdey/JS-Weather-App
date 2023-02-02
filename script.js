let weather = {
  paris: {
    temp: 19,
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


let now = new Date();



let li = document.querySelector("li");

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

li.innerHTML = `${day} January ${date}, ${hour}:${minutes}, ${year}`;