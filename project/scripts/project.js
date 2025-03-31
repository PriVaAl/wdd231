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