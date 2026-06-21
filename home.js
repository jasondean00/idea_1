let bags = [];

fetch("bags.json")
    .then(response => response.json())
    .then(data => {

        bags = data.bags;

        const products =
            document.getElementById("products");

        data.bags.forEach(bag => {

            products.innerHTML += `
                <div class="product-card">

                    <img src="${bag.image}" alt="${bag.name}">

                    <h3>${bag.name}</h3>

                    <p>
                        Daily Income: ${bag.dailyIncome} GHS<br>
                        Total Income: ${bag.totalIncome} GHS<br>
                        Time Duration: ${bag.cycle} Days
                    </p>

                    <p><b>Price: ${bag.price} GHS</b></p>

                    <button
                        class="invest-btn"
                        data-id="${bag.id}">
                        Invest
                    </button>

                </div>
            `;
        });

        setupButtons();
    });

function setupButtons() {

    document.querySelectorAll(".invest-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);

                const bag =
                    bags.find(item => item.id === id);

                document.getElementById("bagImage").src =
                    bag.image;

                document.getElementById("bagName").textContent =
                    bag.name;

                document.getElementById("bagPrice").textContent =
                    bag.price;

                document.getElementById("bagDaily").textContent =
                    bag.dailyIncome;

                document.getElementById("bagTotal").textContent =
                    bag.totalIncome;

                document.getElementById("bagCycle").textContent =
                    bag.cycle;

                document.getElementById("investModal").style.display =
                    "flex";
            });

        });
}

document.querySelector(".close-btn")
    .addEventListener("click", () => {

        document.getElementById("investModal")
            .style.display = "none";
    });