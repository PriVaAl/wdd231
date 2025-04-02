import { places } from '../data/places.mjs';
console.log(places);

const showHere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        const thecard = document.createElement('div')  
        const theimage = document.createElement('img')
        theimage.src = `images/${x.image}`
        theimage.alt = x.name
        theimage.loading = "lazy";
        thecard.appendChild(theimage)

        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)

        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)

        const thedescription = document.createElement('p')
        thedescription.innerText = x.description
        thecard.appendChild(thedescription)

        const thebutton = document.createElement('button');
        thebutton.innerText = x.button;
        thebutton.addEventListener("click", () => {
            alert(`You clicked on ${x.name}`);
            });
        thecard.appendChild(thebutton);

        showHere.appendChild(thecard)
    })
}
displayItems(places)

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

