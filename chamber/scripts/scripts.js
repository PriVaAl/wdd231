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

document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const businessContainer = document.querySelector("#business");

    if (!gridButton || !listButton || !businessContainer) {
        console.error("Error: One or more elements (#grid, #list, #business) not found.");
        return;
    }

    businessContainer.classList.add('grid');

    gridButton.addEventListener('click', () => {
        businessContainer.classList.add('grid');
        businessContainer.classList.remove('list');
    });

    listButton.addEventListener('click', () => {
        businessContainer.classList.add('list');
        businessContainer.classList.remove('grid');
    });
});

const url = "data/members.json"; 
const businessContainer = document.getElementById("business");

if (!businessContainer) {
    console.error("Error: #business container not found.");
}

async function getMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    const businessContainer = document.getElementById("business");

    if (!businessContainer) {
        console.error("Error: #business container not found in the DOM.");
        return;
    }

    members.forEach(member => {
        const card = document.createElement("section");

        // Business Name
        const name = document.createElement("h2");
        name.textContent = member.name;
        name.classList.add("member-name");

        // Business Address
        const address = document.createElement("p");
        address.textContent = `📍 ${member.address}`;

        // Business Phone
        const phone = document.createElement("p");
        phone.textContent = `📞 ${member.phone}`;

        // Business Website
        const website = document.createElement("a");
        website.href = member.website ? member.website : "#";
        website.textContent = "🌍 Visit Website";
        website.target = "_blank";

        // Business Image
        const image = document.createElement("img");
        if (member.image) {
            image.setAttribute("src", `images/${member.image}`);
        } else {
            image.setAttribute("src", "images/default-placeholder.png");
        }
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "150");
        image.setAttribute("height", "150");

        // Membership Level
        const membership = document.createElement("p");
        membership.textContent = `Membership: ${member.membership}`;
        membership.classList.add(`level-${member.membership}`);

        // Bilingual Staff
        const bilingual = document.createElement("p");
        bilingual.textContent = `Bilingual Staff: ${member.bilingual}`;

        // Append all elements to the card
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(bilingual);

        console.log("Appending card for:", member.name);
        console.log("Generated card:", card);

        // Append card to the container
        businessContainer.appendChild(card);
    });
}

// Call function to fetch members
getMembers();
