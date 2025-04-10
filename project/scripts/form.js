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
  const cards = document.querySelectorAll('.cardsk');
  cards.forEach(cardsk => {
    cardsk.style.opacity = 0;
    cardsk.style.transition = "opacity 1s ease-out";
    setTimeout(() => {
      cardsk.style.opacity = 1;
    }, 100); // Delay for the animation to start
  });
};

// Handle form submission and redirect to the thank you page with query params
document.getElementById("yourForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get the form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const timestamp = document.getElementById("timestamp").value;

    // Redirect to the Thank You page with form data as query parameters
    window.location.href = `thankyou.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&timestamp=${encodeURIComponent(timestamp)}`;
});

