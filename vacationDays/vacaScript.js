let month1Salary = 0;
let month1Worked = 0;
let month1Limit = 0;
let month1Absent = 0;

let month2Salary = 0;
let month2Worked = 0;
let month2Limit = 0;
let month2Absent = 0;

let month3Salary = 0;
let month3Worked = 0;
let month3Limit = 0;
let month3Absent = 0;

let paidHave = 0;

let netMoney = 0;
let grossMoney = 0;
let resultShower = document.querySelector(".span1");
let netTotal = document.querySelector(".span2");
let displayDays = document.querySelector(".span3");

let A = 0;
let B = 0;
let C = 0;

function startCalculation() {
    setValues();
    findAComponent();
    findBComponent();
    findCComponent();
    determineNet();
    showResults();
}

function setValues() {
    month1Salary = parseFloat(document.querySelector(".input_1_1").value);
    month2Salary = parseFloat(document.querySelector(".input_2_1").value);
    month3Salary = parseFloat(document.querySelector(".input_3_1").value);

    month1Worked = parseFloat(document.querySelector(".input_1_2").value);
    month2Worked = parseFloat(document.querySelector(".input_2_2").value);
    month3Worked = parseFloat(document.querySelector(".input_3_2").value);

    month1Limit = parseFloat(document.querySelector(".input_1_3").value);
    month2Limit = parseFloat(document.querySelector(".input_2_3").value);
    month3Limit = parseFloat(document.querySelector(".input_3_3").value);

    month1Absent = parseFloat(document.querySelector(".input_1_4").value);
    month2Absent = parseFloat(document.querySelector(".input_2_4").value);
    month3Absent = parseFloat(document.querySelector(".input_3_4").value);

    paidHave = parseFloat(document.querySelector(".paid_days_quantity").value);
}

function findAComponent() {
    let monthWorkedTotal = month1Worked + month2Worked + month3Worked;
    let monthLimitTotal = month1Limit + month2Limit + month3Limit;
    let monthAbsentTotal = month1Absent + month2Absent + month3Absent;

    console.log("total worked in 3 month " + monthWorkedTotal)
    console.log("total limit in 3 month " + monthLimitTotal)
    console.log("total absent in 3 month " + monthAbsentTotal)

    A = monthWorkedTotal / (monthLimitTotal - monthAbsentTotal);
    console.log("a" + A);
}

function findBComponent() {
    B = month1Salary + month2Salary + month3Salary;
    console.log("b" + B);
}

function findCComponent() {
    C = month1Worked + month2Worked + month3Worked;
    console.log("c" + C);
}

function determineNet() {
    grossMoney = A * (B / C);

    netMoney = (grossMoney - grossMoney/50) - (grossMoney - grossMoney/50)/5
    console.log(grossMoney);
    console.log(netMoney);
}

function showResults() {
    resultShower.innerHTML = netMoney.toFixed(2);
    displayDays.innerHTML = paidHave;

    netCalculated = netMoney * paidHave;
    netTotal.innerHTML = netCalculated.toFixed(2);
}











// resultShower.innerHTML = resultForOne.toFixed(2);





























function exit() {
    window.location.href = "../index.html"
}