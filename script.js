// Change Button Color on Click
document.getElementById("colorButton").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "red" ? "#007bff" : "red";
});

// Image Gallery Navigation
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;
document.getElementById("nextImage").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("galleryImage").src = images[index];
});

// Accordion Toggle
document.querySelector(".accordion").addEventListener("click", function() {
    let panel = document.querySelector(".panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password.length < 8) {
        alert("Ensure all fields are filled and password is at least 8 characters.");
        event.preventDefault();
    }
});
