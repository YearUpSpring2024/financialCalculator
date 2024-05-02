"use strict";
const calculate = document.getElementById("calculate");

window.onload = init;

function init() {
    calculate.onclick = calculateFutureValue;
}


function calculateFutureValue() {
    const deposit = parseFloat(document.getElementById("deposit").value.trim());
    const interestRate = parseFloat(document.getElementById("interestRate").value.trim());
    const years = parseFloat(document.getElementById("years").value.trim());
    const result = document.getElementById("result");

    const dailyInterestRate = interestRate / 365;
    // console.log(dailyInterestRate)

    const numberOfDays = years * 365;

    let futureValue = deposit * Math.pow(1 + dailyInterestRate, numberOfDays);
    futureValue = Math.round(futureValue * 100) / (100);
    // console.log(futureValue)


    let totalInterestRate = futureValue - deposit;
    // console.log(totalInterestRate)
    totalInterestRate = Math.round(totalInterestRate * 100) / (100);

    result.innerHTML = "If you deposit $ " + deposit.toFixed(2) + " in a CD that earns " + (interestRate * 100).toFixed(2) + " and matures in " + years + " , your CD's ending balance ending will be " + futureValue.toFixed(2) + " and you would have earned " + totalInterestRate.toFixed(2)
}