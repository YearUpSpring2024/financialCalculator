"use strict";

function calculateFutureValue() {
    const deposit = parseFloat(document.getElementById("deposit").value.trim());
    const interestRate = parseFloat(document.getElementById("interestRate").value.trim());
    const years = parseFloat(document.getElementById("years").value.trim());
    const result = document.getElementById("result");

    const dailyInterestRate = (interestRate / 100) / (365);
    // console.log(dailyInterestRate)

    const numberOfDays = years * 365;

    let futureValue = deposit * Math.pow(1 + dailyInterestRate, numberOfDays);
    // futureValue = (futureValue * 100) / (100);
    // console.log(futureValue)


    let totalInterestRate = futureValue - deposit;
    // console.log(totalInterestRate)
    // totalInterestRate = (totalInterestRate * 100) / (100);

    result.innerHTML = "If you deposit $ " + deposit + " in a CD that earns " + interestRate + " and matures in " + years + " , your CD's ending balance ending will be " + futureValue.toFixed(2) + " and you would have earned " + totalInterestRate.toFixed(2)
}