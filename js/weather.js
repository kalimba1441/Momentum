const API_KEY = "442c22c388d8b311302a30f3d42a64ed";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((repsonse) => repsonse.json())
    .then((data) => {
        const weatherSpan = document.querySelector("#weather");

        weatherSpan.innerText = `${data.main.temp}°C, ${data.weather[0].main} @${data.name}`;
    });
}

function onGeoError() {
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);