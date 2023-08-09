document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".user-input");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.querySelector("button");

    convertButton.addEventListener("click", function () {
        const inputValue = parseFloat(inputField.value);
        const selectedUnit = unitSelect.value;

        if (!isNaN(inputValue)) {
            if (selectedUnit === "Celsius to Fahrenheit") {
                const result = (inputValue * 9) / 5 + 32;
                document.querySelector(".box2").innerHTML =
                    result + " Fahrenheit";
            } else if (selectedUnit === "Fahrenheit to celsius") {
                const result = ((inputValue - 32) * 5) / 9;
                document.querySelector(".box2").innerHTML =
                    result + "\xB0 Celsius";
            }
        } else {
            alert("Please enter the temperature value.");
        }
    });
});