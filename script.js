let numberOne = '0';
let numberTwo = '0';
let screen = 1;
let number = "numberOne"
let lastOperator = null;
document.getElementById("screen").innerHTML = numberOne;

//document.getElementById("output").innerHTML = screen

//plan: 
//get numberOne from numbers
// get operator, and automatically do 2nd nubmer
// have equal sign perform operation

//functions, x is numberOne or numberTwo
function operator(numberName, x) {
    if (numberName === "numberOne") {
        numberOne = `${numberOne}${x}`;
        document.getElementById("screen").innerHTML = parseFloat(numberOne);
    } else if (numberName === "numberTwo") {
        numberTwo = `${numberTwo}${x}`;
        document.getElementById("screen").innerHTML = parseFloat(numberTwo);}
}

//clear button, implement later. Have it be to the left of screen or smt
function clear() {
    numberOne = '0';
    numberTwo = '0';
    document.getElementById("screen").innerHTML = numberOne;
}

//log number
// Select all elements with the class "btn"
const buttons = document.getElementsByClassName("btn");



//add number to log
for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).onclick = function () {
      operator(number, i); // Call the operator function with the corresponding number
        if (number === "numberOne") {
            document.getElementById("screen").innerHTML = parseFloat(numberOne);
        }
        
        else if (number === "numberTwo") {
            document.getElementById("screen").innerHTML = parseFloat(numberTwo);
        }
    }
}

//add decimal
document.getElementById(".").onclick = function () {
    if (number === "numberOne") {
        if (!numberOne.includes('.')) {
            document.getElementById("screen").innerHTML = `${parseFloat(numberOne)}.`;
            numberOne = `${numberOne}.`;
        }
    } else if (number === "numberTwo") {
        if (!numberTwo.includes('.')) {
            document.getElementById("screen").innerHTML = (parseFloat(numberTwo)) + ".";
            numberTwo = `${numberTwo}.`;
        }
    }
}

//clear function
document.getElementById("clear").onclick = function () {
    clear();
}
//operate function
function operate() {
    if (lastOperator === "+" && numberTwo !== '0') {
        numberOne = parseFloat(numberOne) + parseFloat(numberTwo);
        document.getElementById("screen").innerHTML = parseFloat(numberOne);
        numberTwo = '0';
        number = "numberTwo";
    }
    else if (lastOperator === "-" && numberTwo !== '0') {
        numberOne = parseFloat(numberOne) - parseFloat(numberTwo);
        document.getElementById("screen").innerHTML = parseFloat(numberOne);
        numberTwo = '0';
        number = "numberTwo";
    }
    else if (lastOperator === "*" && numberTwo !== '0') {
        numberOne = parseFloat(numberOne) * parseFloat(numberTwo);
        document.getElementById("screen").innerHTML = parseFloat(numberOne);
        numberTwo = '0';
        number = "numberTwo";
    }
    else if (lastOperator === "/" && numberTwo !== '0') {
        numberOne = parseFloat(numberOne) / parseFloat(numberTwo);
        document.getElementById("screen").innerHTML = parseFloat(numberOne);
        numberTwo = '0';
        number = "numberTwo";
    }
    else {
        numberTwo = '0';
        number = "numberTwo";
    }
}

//+ function
document.getElementById("+").onclick = function () {
    operate();
    lastOperator = "+";
}

document.getElementById("-").onclick = function () {
    operate();
    lastOperator = "-";
}

document.getElementById("/").onclick = function () {
    operate();
    lastOperator = "/";
}

document.getElementById("*").onclick = function () {
    operate();
    lastOperator = "*";
}

document.getElementById("=").onclick = function () {
    operate();
    number = "numberOne";
}


//+ function old
// document.getElementById("-").onclick = function () {
//     //if press operator instead of =,
//     numberOne = parseFloat(numberOne) - parseFloat(numberTwo);
//     numberTwo = '0';
//     number = "numberTwo";
//     document.getElementById("screen").innerHTML = numberOne;

//     //if press =
//     document.getElementById("=").onclick = function () {
//         number = "numberOne";
//         numberOne = parseFloat(numberOne) - parseFloat(numberTwo);
//         document.getElementById("screen").innerHTML = numberOne;
//         numberTwo = '0';
//     }
// }

