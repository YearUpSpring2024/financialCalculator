"use strict";


const calculate = document.getElementById("calculate");

window.onload = init;

function init() {
    calculate.onclick = calculateMorgage;
}

function calculateMorgage() {
    // selecting elements
    const principal = parseFloat(document.getElementById("principal").value.trim());
    const interestRate = parseFloat(document.getElementById("interesRate").value.trim());
    const lenghtOfLoan = parseFloat(document.getElementById("lengthOfLoan").value.trim());
    const result = document.getElementById("result");

    if (isNaN(principal) || isNaN(interestRate) || isNaN(lenghtOfLoan)) {
        result.innerHTML = "Please enter a valid number"
    } else {

        // calculating the interest rate and the number of payments
        const mongthlyInteresRate = (interestRate / 100) / 12;
        const numbOfPayments = lenghtOfLoan * 12;

        // monthly payment and total interest
        const monthlyPayments = (principal * mongthlyInteresRate) / (1 - Math.pow(1 + mongthlyInteresRate, -numbOfPayments));
        const totalInterest = (monthlyPayments * numbOfPayments) - principal;
        // displaying the result

        result.innerHTML = "for a principal of " + principal + " your Monthly Payment will be " + monthlyPayments.toFixed(2) + "\n" + " The Total interest paid " + totalInterest.toFixed(2);
    }
}

