// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    // Get the elements where the data will be displayed
    const firstNameDisplay = document.getElementById("firstNameDisplay");
    const lastNameDisplay = document.getElementById("lastNameDisplay");
    const emailDisplay = document.getElementById("emailDisplay");
    const phoneDisplay = document.getElementById("phoneDisplay");
    const businessDisplay = document.getElementById("businessDisplay");
    const timestampDisplay = document.getElementById("timestampDisplay");  // Add this for timestamp

    // Check if the parameters exist and assign the values to respective elements
    firstNameDisplay.textContent = params.get("firstName") || "Not provided";
    lastNameDisplay.textContent = params.get("lastName") || "Not provided";
    emailDisplay.textContent = params.get("email") || "Not provided";
    phoneDisplay.textContent = params.get("phone") || "Not provided";
    businessDisplay.textContent = params.get("business") || "Not provided";
    
    // Display the timestamp if it exists in the query params
    const timestamp = params.get("timestamp");
    if (timestamp) {
        const date = new Date(timestamp); // Convert the timestamp to a Date object
        timestampDisplay.textContent = date.toLocaleString(); // Format the date and time for display
    } else {
        timestampDisplay.textContent = "Not provided"; // Default if timestamp is missing
    }
});
