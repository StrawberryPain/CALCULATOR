"use strict";
const result = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const clean = document.querySelector(".clean");
const equals = document.querySelector('.equals');
const period = document.querySelector('.period');

const operations = {
    plus: '+',
    minus: '-',
    divide: '/',
    multiply: '*'
}

const addSymbol = (value) => {
  result.innerText += value;
};

numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    const numberValue = numberButton.getAttribute("value");
    addSymbol(numberValue);
  });
});

const clear = () => {
  result.innerText = "";
};

clean.addEventListener("click", clear);

const isLastNumber = () => {
    const lastSymbol = result.innerText.slice(-1);
    return !Object.values(operations).includes(lastSymbol) && lastSymbol !== '.';
}

plus.addEventListener("click", () => {
    if (isLastNumber()) {
        addSymbol(operations.plus);
    }
});

minus.addEventListener("click", () => {
    if (isLastNumber()) {
        addSymbol(operations.minus);
    }
});

divide.addEventListener("click", () => {
    if (isLastNumber()) {
        addSymbol(operations.divide);
    }
});

multiply.addEventListener("click", () => {
    if (isLastNumber()) {
        addSymbol(operations.multiply);
    }
});

period.addEventListener('click', () => {
    const lastNumber = result.innerText.split(/[\+\-\*\/]/).pop();

    if(isLastNumber() && !lastNumber.includes('.')) {
        addSymbol('.');
    }
})

equals.onclick = () => {
    if (isLastNumber()) {
        result.innerText = eval(result.innerText);
    }
}