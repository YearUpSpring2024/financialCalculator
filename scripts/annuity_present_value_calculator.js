"use strict";

function calculateFutureValue() {
    const monthlyPayout = parseFloat(document.getElementById("monthlyPayout").value.trim());
    const interestRate = parseFloat(document.getElementById("interestRate").value.trim()) / 100;
    const years = parseFloat(document.getElementById("years").value.trim());
    const result = document.getElementById("result");

    // months interest
    const monthlyInterestRate = interestRate / 12;

    // months
    const numberOfMonths = years * 12;

    const presentValue = monthlyPayout * ((1 - Math.pow(1 + monthlyInterestRate, - numberOfMonths)) / monthlyInterestRate);

    result.innerHTML = "To fund an annuity that pays $" + monthlyPayout + " monthly for " + years + " years and earns an expected " + interestRate.toFixed(2) + "% interest, you would need to invest " + presentValue.toFixed(2) + " today"
}

