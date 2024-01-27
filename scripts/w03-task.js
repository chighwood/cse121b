/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
};
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
};
let subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let multiplyFactor1 = Number(document.querySelector("#factor1").value);
    let multiplyFactor2 = Number(document.querySelector("#factor2").value);
    let product = multiply(multiplyFactor1, multiplyFactor2);

    document.querySelector("#product").value = product;
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
};
function divideNumbers() {
    let divideDividend = Number(document.querySelector("#dividend").value);
    let divideDivisor = Number(document.querySelector("#divisor").value);

    let quotient = divide(divideDividend, divideDivisor);

    document.querySelector("#quotient").value = quotient.toFixed(2);
};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal() {
    let subtotal = Number(document.querySelector("#subtotal").value);

    if (document.querySelector("#member").checked) {
        subtotal = subtotal - subtotal * 0.2;
    };
    document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
};
document.querySelector("#getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arrayElement = document.querySelector("#array");
arrayElement.innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

