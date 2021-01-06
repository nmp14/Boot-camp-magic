let total = document.getElementById("total");
let tipPercent = document.getElementById("percent");
let sumbitButton = document.getElementById("submit");
let tipAmount = document.getElementById("tip-amount");
let newTotal = document.getElementById("new-total");
let numPeople = document.getElementById("people");
let splitParty = document.getElementById("split-total");

let calculateTip = () => {
    let tip = total.value * (tipPercent.value / 100);
    return tip;
}

let calculateSum = () => {
    let sum = parseFloat(total.value) + calculateTip();
    return sum;
}

let splitTotal = () => {
    let split = calculateSum() / parseFloat(numPeople.value);
    let splitFixed = split.toFixed(2);
    return splitFixed;
}

sumbitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event);
    let totalSum = calculateSum();
    let tipSum = calculateTip();
    let split = splitTotal();
    tipAmount.innerHTML = "$" + tipSum.toFixed(2);
    newTotal.innerHTML = "$" + totalSum.toFixed(2);
    splitParty.innerHTML = "$" + split;
});

