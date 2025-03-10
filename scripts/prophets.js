const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cardsContainer = document.getElementById("cards");

async function getProphets() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching prophets data:", error);
    }
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        // Create section card
        const card = document.createElement("section");

        // Create and populate the h2 element with the full name
        const fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        fullName.classList.add("prophet-name");

        // Create and configure the image element
        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "250");

        // Create additional elements for date and place of birth
        const birthDate = document.createElement("p");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        const birthPlace = document.createElement("p");
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Append all elements to the card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append the card to the container
        cardsContainer.appendChild(card);
    });
}

// Fetch data and display prophets
getProphets();
