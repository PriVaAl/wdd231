document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    } else {
        console.error("Error: Menu button or navigation not found.");
    }

    const year = document.querySelector("#currentYear");
    const lastModifiedElement = document.querySelector("#lastModified");

    if (year) {
        const today = new Date();
        year.textContent = `${today.getFullYear()}`;
    } else {
        console.error("Error: #currentYear element not found.");
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
    } else {
        console.error("Error: #lastModified element not found.");
    }
});

async function displaySpotlight() {
    try {
        const response = await fetch("data/testimonials.json");
        const data = await response.json();
        console.log("Testimonials Data:", data); // Check the data in the console

        // Randomly select 3 testimonials
        const selectedTestimonials = data.testimonials.sort(() => 0.5 - Math.random()).slice(0, 4);
        console.log("Selected Testimonials:", selectedTestimonials);

        // Get the spotlight container element
        const spotlightContainer = document.querySelector('.spotlight-cards');
        spotlightContainer.innerHTML = ''; // Clear any existing content

        // Loop through selected testimonials and add them to the DOM
        selectedTestimonials.forEach(testimony => {
            const card = document.createElement("section");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${testimony.name}</h3>
                <p><strong>${testimony.role}</strong></p>
                <p>"${testimony.testimonial}"</p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading testimonial data:", error);
    }
}

// Call the function to display the spotlight testimonials
displaySpotlight();

document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const resourcesContainer = document.querySelector("#resources");

    if (!gridButton || !listButton || !resourcesContainer) {
        console.error("Error: One or more elements (#grid, #list, #resources) not found.");
        return;
    }

    resourcesContainer.classList.add('grid');

    gridButton.addEventListener('click', () => {
        resourcesContainer.classList.add('grid');
        resourcesContainer.classList.remove('list');
    });

    listButton.addEventListener('click', () => {
        resourcesContainer.classList.add('list');
        resourcesContainer.classList.remove('grid');
    });
});

const url = "data/resources.json"; 
const resourcesContainer = document.getElementById("resources");

if (!resourcesContainer) {
    console.error("Error: #resources container not found.");
}

async function getResources() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        displayResources(data.resources);
    } catch (error) {
        console.error("Error fetching resources data:", error);
    }
}

function displayResources(resources) {
    const resourcesContainer = document.getElementById("resources");

    if (!resourcesContainer) {
        console.error("Error: #resources container not found in the DOM.");
        return;
    }

    resources.forEach(resource => {
        const card = document.createElement("section");
        card.classList.add("skills-card");

        const skill = document.createElement("h2");
        skill.textContent = resource.skill;
        skill.classList.add("resource-skill");

        const type = document.createElement("h3");
        type.textContent = resource.type;

        const company = document.createElement("p");
        company.textContent = resource.company;

        const description = document.createElement("p");
        description.textContent = resource.description;

        const website = document.createElement("a");
        website.href = resource.website ? resource.website : "#";
        website.textContent = "🌍 Visit Website";
        website.target = "_blank";

        const image = document.createElement("img");
        image.setAttribute("src", resource.image ? `images/${resource.image}` : "images/default-placeholder.png");
        image.setAttribute("alt", `${resource.skill} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "150");
        image.setAttribute("height", "150");

        
        card.appendChild(skill);
        card.appendChild(type);
        card.appendChild(company);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(website);

        resourcesContainer.appendChild(card);
    });
}

getResources();

