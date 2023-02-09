const apiKey = '9152cf5927fc3c18c2333ec5f294e639';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = (city) => {
    const url = `${apiBase}?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');

const handlesubmit = (event) => {
    event.preventDefault();
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity);
}

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('windspeed').innerText = data.wind.speed;
    document.getElementById('country').innerText = data.sys.country;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

getWeatherData('Goa');