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


amountInput.addEventListener("input", validateAmount);
amountButtons.forEach(button => {

    button.addEventListener("click", () => {

        amountInput.value = button.dataset.amount;

        validateAmount();

    });

});


payBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});


submitNumber.addEventListener("click", () => {

    const amount = Number(amountInput.value);
    const number = userNumber.value.trim();

    if (number.length < 10) {

        alert("Please enter a valid mobile money number.");
        return;

    }

    
    localStorage.setItem("paymentAmount", amount);
    localStorage.setItem("paymentNumber", number);

    
    modal.style.display = "none";

    
    window.location.href = "payment-details.html";

});


window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});