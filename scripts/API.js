const apiKey = '792cc3ffd5ab98a99a2d0ebbed1c35f3'; // Your OpenWeatherMap API key
const lat = 49.7557;  // Latitude of Trier, Germany
const lon = 6.6394;   // Longitude of Trier, Germany
const units = 'metric'; // 'imperial' for Fahrenheit, 'metric' for Celsius

// ✅ Use the "Current Weather" API instead of One Call 3.0
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Call the function to update the page
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;  // ✅ Corrected temperature path
    const description = data.weather[0].description; // ✅ Corrected path
    const iconCode = data.weather[0].icon; // ✅ Corrected path
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    currentTemp.textContent = `${temp.toFixed(1)}°C`;
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
}

apiFetch();
