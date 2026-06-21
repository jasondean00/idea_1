const amountInput = document.getElementById("amount");
const payBtn = document.getElementById("payBtn");
const errorMessage = document.getElementById("error-message");
const amountButtons = document.querySelectorAll(".amount-btn");

const modal = document.getElementById("numberModal");
const submitNumber = document.getElementById("submitNumber");
const userNumber = document.getElementById("userNumber");

// Validate Amount
function validateAmount() {

    const amount = Number(amountInput.value);

    if (amount >= 100) {

        payBtn.disabled = false;
        errorMessage.style.display = "none";

    } else {

        payBtn.disabled = true;
        errorMessage.style.display = "block";

    }
}

// Listen for manual input
amountInput.addEventListener("input", validateAmount);

// Quick amount buttons
amountButtons.forEach(button => {

    button.addEventListener("click", () => {

        amountInput.value = button.dataset.amount;

        validateAmount();

    });

});

// Open number popup
payBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

// Submit number
submitNumber.addEventListener("click", () => {

    const amount = Number(amountInput.value);
    const number = userNumber.value.trim();

    if (number.length < 10) {

        alert("Please enter a valid mobile money number.");
        return;

    }

    // Store data for next page
    localStorage.setItem("paymentAmount", amount);
    localStorage.setItem("paymentNumber", number);

    // Close popup
    modal.style.display = "none";

    // Go to payment details page
    window.location.href = "payment-details.html";

});

// Close modal when clicking outside
window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});