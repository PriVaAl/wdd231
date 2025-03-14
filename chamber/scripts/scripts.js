document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

const year = document.querySelector("#currentYear");
const today = new Date();
year.textContent = `${today.getFullYear()}`;

const lastModifiedElement = document.querySelector("#lastModified")
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;

const url = "data/members.json"; // Path to your JSON file
const directoryContainer = document.querySelector(".directory");
console.log("Directory container:", directoryContainer); // The container for business cards

async function getMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load data");

        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    members.forEach(member => {
        // Create the section card
        const card = document.createElement("section");
        card.classList.add("card");

        // Business Name
        const name = document.createElement("h3");
        name.textContent = member.name;

        // Business Address
        const address = document.createElement("p");
        address.textContent = `📍 ${member.address}`;

        // Business Phone
        const phone = document.createElement("p");
        phone.textContent = `📞 ${member.phone}`;

        // Business Website
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "🌍 Visit Website";
        website.target = "_blank";

        // Business Image
        const image = document.createElement("img");
        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "150");
        image.setAttribute("height", "150");

        // Append all elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);


        console.log("Appending card for:", member.name);
        console.log("Current container:", directoryContainer);
        console.log("Generated card:", card);

        // Append card to the container
        directoryContainer.appendChild(card);
        console.log("Fetched members:", members);
    });
}
});
