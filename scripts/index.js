const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("_______", () => {
	navigation._______.toggle("_______");
	hamButton.classList.toggle("open");
});

document.getElementById('currentYear').textContent = new Date().getFullYear();
        document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;