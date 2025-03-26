// Set the timestamp when the page is loaded
document.getElementById('timestamp').value = new Date().toISOString();

// Open modal function
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Close modal function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Add smooth transition to membership cards on page load
window.onload = function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transition = "opacity 1s ease-out";
    setTimeout(() => {
      card.style.opacity = 1;
    }, 100); // Delay for the animation to start
  });
};
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