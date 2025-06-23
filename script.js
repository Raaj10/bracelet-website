// Wait until the whole page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thank you for your interest! We'll contact you soon 🤝");
        });
    });
});
const toggleButtons = document.querySelectorAll(".toggle-details");

toggleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const cardText = this.previousElementSibling.previousElementSibling;
        if (cardText.style.display === "none") {
            cardText.style.display = "block";
            this.textContent = "Hide Details";
        } else {
            cardText.style.display = "none";
            this.textContent = "Show Details";
        }
    });
});
