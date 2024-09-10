let current = document.querySelector("#current-time");
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let weatherhours = now.getHours();
let weathermin = now.getMinutes();

current.innerText = `${day}  ${weatherhours}:${weathermin}`;

function newcity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".search-input");
  let currentCity = document.querySelector(".current-city");

  if (cityInput) {
    let cityValue = cityInput.value;
    currentCity.innerText = cityValue;
  } else {
    console.error("Not Found.");
  }
}

let searchform = document.querySelector("#searchform");
searchform.addEventListener("submit", newcity);
