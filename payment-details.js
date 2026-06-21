const amount =
    localStorage.getItem("paymentAmount");

const number =
    localStorage.getItem("paymentNumber");

document.getElementById("amount")
.textContent = amount;

document.getElementById("userNumber")
.textContent = number;

const completeBtn = document.getElementById("completeBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

completeBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";

    
    window.location.href = "home.html"; 
});


window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        window.location.href = "home.html";
    }
});