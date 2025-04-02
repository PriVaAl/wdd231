document.addEventListener("DOMContentLoaded", () => {
    const visitorMessageContainer = document.getElementById("visitor-message");

    // Check if there's a stored visit date in localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();
    const message = document.createElement("p");

    if (!lastVisit) {
        // First visit message
        message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in days
        const timeDiff = currentVisit - lastVisit;
        const daysDifference = Math.floor(timeDiff / (1000 * 3600 * 24));

        if (daysDifference < 1) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            const dayWord = daysDifference === 1 ? "day" : "days";
            message.textContent = `You last visited ${daysDifference} ${dayWord} ago.`;
        }
    }

    // Display the message in the sidebar
    visitorMessageContainer.appendChild(message);

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", currentVisit);
});
