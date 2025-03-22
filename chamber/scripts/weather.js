const apiKey = 'fed51497d1fe54da0c734a7eb3909d08';
const lat = 10;
const lon = -83.0333;
const units = 'metric';

// URLs for Weather APIs
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

// DOM Elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('.forecast-container'); // Add a forecast section in HTML

// Fetch Current Weather
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        console.log("Current Weather Data:", data);
        displayCurrentWeather(data);
    } catch (error) {
        console.error("Error fetching current weather:", error);
    }
}

// Fetch Three-Day Forecast
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) throw new Error('Forecast data not available');
        const data = await response.json();
        console.log("Forecast Data:", data);
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

// Display Current Weather
function displayCurrentWeather(data) {
    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    currentTemp.innerHTML = `Current Temperature: ${temp}°C`;
    captionDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
}

// Display Three-Day Forecast
function displayForecast(data) {
    const forecastDays = [];
    forecastContainer.innerHTML = ""; // Clear previous content

    for (let i = 0; i < data.list.length; i++) {
        const item = data.list[i];
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: 'long' });

        // Get one forecast per day
        if (!forecastDays.includes(day)) {
            forecastDays.push(day);

            const temp = item.main.temp.toFixed(1);
            const description = item.weather[0].description;
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            
            const forecastInfo = `
                <h3>${day}</h3>
                <p>${temp}°C</p>
            `;

            forecastContainer.innerHTML += forecastInfo;

            // Stop after 3 days
            if (forecastDays.length === 3) break;
        }
    }
}

// Load Weather Data
fetchCurrentWeather();
fetchForecast();


async function displaySpotlight() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        console.log("Members Data:", data); // Check the data in the console

        // Filter members based on their membership level
        const goldSilverMembers = data.members.filter(member => member.membership >= 2);  // Filtering for membership level 2 or 3
        console.log("Filtered Members:", goldSilverMembers);

        // Randomly select 3 members
        const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        console.log("Selected Members:", selectedMembers);

        // Get the spotlight container element
        const spotlightContainer = document.querySelector('.spotlight-cards');
        spotlightContainer.innerHTML = ''; // Clear any existing content

        // Loop through selected members and add them to the DOM
        selectedMembers.forEach(member => {
            const card = document.createElement("section");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name} logo">
                <p>📞 ${member.phone}</p>
                <p>📍 ${member.address}</p>
                <a href="${member.website}" target="_blank">🌍 Visit Website</a>
                <p class="membership-level">Membership Level: ${member.membership}</p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading member data:", error);
    }
}

// Call the function to display the spotlight members
displaySpotlight();