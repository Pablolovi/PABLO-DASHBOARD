//API Key de weatherAPI
const apiKey = 'dcb26d4d54134082a8e180528240212';

//Función para obtener ubicación y clima
async function fetchWeather(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); //respusta API

        displayCurrentWeather(data);

        // Verifica que la respuesta contenga los datos de previsión por horas
        if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0].hour) {
            displayForecast(data.forecast.forecastday[0].hour); // Mostrar previsión por horas
        } else {
            console.error('No se encontraron datos de previsión por horas');
            document.getElementById('forecast').innerHTML = 'No se encontraron datos de previsión para el día.';
        }
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        document.getElementById('weather-info').innerHTML = 'Error al obtener el clima. Intenta nuevamente.';
    }
}


//Función para mostrar el clima actual
function displayCurrentWeather(data) {
    const weatherInfo = document.getElementById('current-weather')
    const location = `${data.location.name}, ${data.location.country}`;
    const temperature = `${data.current.temp_c}°C`;
    const condition = data.current.condition.text;
    const iconUrl = `https:${data.current.condition.icon}`;
    const humidity = `Humedad: ${data.current.humidity}%`;
    const wind = `Viento: ${data.current.wind_kph} km/h`;
    const precip = `Precipitaciones: ${data.current.precip_mm} mm`;

    weatherInfo.innerHTML = ` 
        <div class= "weather-details">
            <h3>${location}</h3>
            <img src="${iconUrl}" alt="Clima actual" />
            <p>${condition}</p>
            <p><strong>${temperature}</strong></p>
            <p>${humidity}</p>
            <p>${wind}</p>
            <p>${precip}</p>
        </div>
    `;
}

//Función para mostrar la previsión por horas
function displayForecast(hourData) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    hourData.forEach(hour => {
        const forecastHour = document.createElement('div');
        forecastHour.classList.add('forecast-hour');

        const hourTime = hour.time.slice(11);
        const iconUrl = `https:${hour.condition.icon}`;
        const temp = `${hour.temp_c}°C`;

        forecastHour.innerHTML =  `
           <p>${hourTime}</p>
           <img src="${iconUrl}" alt="Clima hora" />
           <p>${temp}</p>
        `;

        forecastContainer.appendChild(forecastHour);
    });
}

//Llamar a la función con la ciudad deseada
fetchWeather('Aspe');