function fuelChecker() {
            let fuel = document.getElementById("fuelInput").value;
            let msg = document.getElementById("message");

            if (fuel === "") {
                msg.innerText = "Please enter a value!";
                msg.style.color = "#ccc";
            } else if (fuel <= 0.25) {
                msg.innerText = "⚠️ Please refill the fuel in your vehicle!";
                msg.style.color = "#e74c3c"; // Red
            } else {
                msg.innerText = "✅ You are ready to go!";
                msg.style.color = "#2ecc71"; // Green
            }
        }