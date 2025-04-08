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
        const selectedTestimonials = data.testimonials.sort(() => 0.5 - Math.random()).slice(0, 3);
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
