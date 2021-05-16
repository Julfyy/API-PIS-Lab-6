window.addEventListener('load', () => {
  const city = document.querySelector('#city');
  const button = document.querySelector('button');
  const temp = document.querySelector('#temp');
  const feelsLike = document.querySelector('#feels-like');
  const humidity = document.querySelector('#humidity');
  const wind = document.querySelector('#wind');

  const api = {
    key: '1c1b062212091dda69cef19b4370714d',
    url: 'https://api.openweathermap.org/data/2.5/',
  };

  button.addEventListener('click', () => {
    let input = document.querySelector('input').value;
    GetWeather(input);
  });

  function GetWeather(input) {
    fetch(`${api.url}weather?q=${input}&appid=${api.key}&units=metric`)
      .then((response) => response.json())
      .then(showInfo);
  }

  function showInfo(weather) {
    city.textContent = `City is ${weather.name}`;
    temp.textContent = `Temperature is ${Math.round(weather.main.temp)}°`;
    feelsLike.textContent = `Feels like ${Math.round(
      weather.main.feels_like
    )}°`;
    humidity.textContent = `Humidity is ${weather.main.humidity}%`;
    wind.textContent = `Wind speed is ${weather.wind.speed} m/s`;
  }
});
