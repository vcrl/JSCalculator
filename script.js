let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnThree = document.getElementById("three");
let btnFour = document.getElementById("four");
let btnFive = document.getElementById("five");
let btnSix = document.getElementById("six");
let btnSeven = document.getElementById("seven");
let btnEight = document.getElementById("eight");
let btnNine = document.getElementById("nine");
let btnZero = document.getElementById("zero");
let btnAdd = document.getElementById("add");
let btnSubstract = document.getElementById("substract");
let btnMultiply = document.getElementById("multiply");
let btnDivide = document.getElementById("divide");
let btnResult = document.getElementById("result");
let btnAC = document.getElementById("ac");

let displayScreen = document.getElementById("calculatorText");
let oldNumberOnScreen = document.getElementById("oldNumber")

let oldNumber = null;
let currentNumber = null;
let calculationType = null;


function clickBtn(btn){
    switch(btn){
        case "ac":
            clearScreen(clearNumbers = true);
            break;
        case "add":
            oldNumber = parseFloat(displayScreen.innerHTML);
            calculationType = "add";
            clearScreen()
            displayOldNumberOnScreen();
            break;
        case "substract":
            oldNumber = parseFloat(displayScreen.innerHTML);
            calculationType = "substract";
            clearScreen()
            displayOldNumberOnScreen()
            break;
        case "multiply":
            oldNumber = parseFloat(displayScreen.innerHTML);
            calculationType = "multiply";
            clearScreen()
            displayOldNumberOnScreen();
            break;
        case "divide":
            oldNumber = parseFloat(displayScreen.innerHTML);
            calculationType = "divide";
            clearScreen()
            displayOldNumberOnScreen();
            break;
        case "result":
            oldNumberOnScreen.innerHTML = "";
            displayScreen.innerHTML = makeCalculation(calculationType);
            break;
        case "comma":
            displayScreen.innerHTML ? displayScreen.innerHTML = displayScreen.innerHTML + "." : null;
            break;
        case "negative":
            // Doit redevenir positif si on click une deuxième fois
            if(displayScreen.innerHTML[0] != "-"){
                displayScreen.innerHTML = "-" + displayScreen.innerHTML;
            }else{
                displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(1);
            }
            break;
        default:
            if(displayScreen.innerHTML[0] == "0"){
                displayScreen.innerHTML = btn;
            }else{
                displayScreen.innerHTML = displayScreen.innerHTML + btn;
            }
            
    }
}

function clearScreen(clearNumbers = false){
    if(clearNumbers){
        oldNumber = null;
        currentNumber = null;
        oldNumberOnScreen.innerHTML = "";
    }
    displayScreen.innerHTML = "0";
}

function makeCalculation(calculationType){
    switch(calculationType){
        case "add":
            currentNumber = parseFloat(displayScreen.innerHTML);
            return parseFloat(oldNumber) + currentNumber;
        case "substract":
            currentNumber = parseFloat(displayScreen.innerHTML);
            return parseFloat(oldNumber) - currentNumber;
        case "multiply":
            currentNumber = parseFloat(displayScreen.innerHTML);
            return parseFloat(oldNumber) * currentNumber;
        case "divide":
            currentNumber = parseFloat(displayScreen.innerHTML);
            if(currentNumber != 0 && oldNumber != 0){
                return parseFloat(oldNumber) / currentNumber;
            }
            break;
    }
}

function displayOldNumberOnScreen(){
    oldNumber ? oldNumberOnScreen.innerHTML = oldNumber.toString() : null;
}