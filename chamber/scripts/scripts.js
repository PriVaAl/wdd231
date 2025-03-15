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
});

document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const businessContainer = document.querySelector("#business");

    // Set default view as Grid
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
console.log("Directory container:", businessContainer); // The container for business cards

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function displayMembers(members) {
    members.forEach(member => {
        // Create the section card
        const card = document.createElement("section");

        // Business Name
        const name = document.createElement("h2");
        name.textContent = `${member.name}`;
        name.classList.add("member-name");

        // Business Address
        const address = document.createElement("p");
        address.textContent = `📍 ${member.address}`;
        

        // Business Phone
        const phone = document.createElement("p");
        phone.textContent = `📞 ${member.phone}`;
        

        // Business Website
        const website = document.createElement("a");
        website.href = `${member.website}`;
        website.textContent = "🌍 Visit Website";
        website.target = "_blank";
        

        // Business Image
        const image = document.createElement("img");
        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "150");
        image.setAttribute("height", "150");

        const membership = document.createElement("p");
        membership.textContent = `Membership: ${member.membership}`;
        membership.classList.add(`level-${member.membership}`); 

        
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
        console.log("Current container:", businessContainer);
        console.log("Generated card:", card);

        // Append card to the container
        businessContainer.appendChild(card);
    });
}
getMembers();
