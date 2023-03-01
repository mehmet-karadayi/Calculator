let input1 = "";
let input2 = "";
let operator = undefined;
let powerOn = false;
let displayVal;



const add = function (num1, num2) {
    return (num1 + num2);
};

const subtract = function (num1, num2) {
    return (num1 - num2);
};

const sum = function (arr) {
    let result = 0;
    for (let num of arr) {
        result += num;
    }
    return result;
};

const multiply = function (numbers) {
    let total = 1;


    for (let num of numbers) {
        total *= num;
    }

    return total;
};

const divide = function (num1, num2) {
    if (num2 > num1) return 0;
    let result;
    if ((num1 / num2) % 1 != 0) {
        result = (num1 / num2).toFixed(2);
        return result;
    }

    result = num1 / num2;
    return result;
}

const power = function (num1, num2) {
    return Math.pow(num1, num2)
};





const screen = document.getElementById("outputWindow");



const exponent = document.getElementsByClassName('exponent operator')[0];
exponent.addEventListener('click', () => {
    if (expressionCheck()) {
        solve();
        input1 = displayVal;
        operator = 'power';
    }
    if (operator === undefined) {
        operator = 'power';
    }
});

const division = document.getElementsByClassName('divide operator')[0];
division.addEventListener('click', () => {
    if (expressionCheck()) {
        solve();
        input1 = displayVal;
        operator = 'divide';
    }
    if (operator === undefined) {
        operator = 'divide';
    }
});
const multip = document.getElementsByClassName('multiply operator')[0];
multip.addEventListener('click', () => {
    if (expressionCheck()) {
        solve();
        input1 = displayVal;
        operator = 'multiply';
    }
    if (operator === undefined) {
        operator = 'multiply';
    }
});
const pwr = document.getElementsByClassName('power operator')[0];
pwr.addEventListener('click', () => {
    if (powerOn === false) {
        powerOn = true;
        display(0);
    }
    else {
        powerOn = false;
        display('');
        reset();
    }
});

const one = document.getElementsByClassName('1 num')[0];
one.addEventListener('click', () => {
    inputCheck('1');
});

const two = document.getElementsByClassName('2 num')[0];
two.addEventListener('click', () => {
    inputCheck('2');
});

const three = document.getElementsByClassName('3 num')[0];
three.addEventListener('click', () => {
    inputCheck('3');
});

const four = document.getElementsByClassName('4 num')[0];
four.addEventListener('click', () => {
    inputCheck('4');
});

const five = document.getElementsByClassName('5 num')[0];
five.addEventListener('click', () => {
    inputCheck('5');
});

const six = document.getElementsByClassName('6 num')[0];
six.addEventListener('click', () => {
    inputCheck('6');
});

const seven = document.getElementsByClassName('7 num')[0];
seven.addEventListener('click', () => {
    inputCheck('7');
});

const eight = document.getElementsByClassName('8 num')[0];
eight.addEventListener('click', () => {
    inputCheck('8');
});

const nine = document.getElementsByClassName('9 num')[0];
nine.addEventListener('click', () => {
    inputCheck('9');
});

const zero = document.getElementsByClassName('0 num')[0];
zero.addEventListener('click', () => {
    inputCheck('0');
});

const clear = document.getElementsByClassName('clear operator')[0];
clear.addEventListener('click', () => {
    display('0');
    reset();

});
const sub = document.getElementsByClassName('subtract operator')[0];
sub.addEventListener('click', () => {
    if (expressionCheck()) {
        solve();
        input1 = displayVal;
        operator = 'subtract';
    }
    if (operator === undefined) {
        operator = 'subtract';
    }
});
const addition = document.getElementsByClassName('add operator')[0];
addition.addEventListener('click', () => {
    if (expressionCheck()) {
        solve();
        input1 = displayVal;
        operator = 'add';
    }
    if (operator === undefined) {
        operator = 'add';
    }

});

const dot = document.getElementsByClassName('decimal num')[0];
dot.addEventListener('click', () => {
    if (displayVal.toString().indexOf('.') === -1) {
        inputCheck('.');
    }

});

const equal = document.getElementsByClassName('solution')[0];
equal.addEventListener('click', () => {
    if (input1 !== "" && input2 !== "" && operator !== undefined) {
        let result = operate(operator, Number(input1), Number(input2)).toString();
        displayVal = result;
        if (result.indexOf('.') !== -1) {
            display(Number(result).toFixed(2));
        }
        else {
            display(result);
        }
    }
    reset();
});

function reset() {
    input1 = "";
    input2 = "";
    operator = undefined;

}

function expressionCheck() {
    if (input1 !== "" && input2 !== "" && operator !== undefined) {
        return true;
    }
    return false;
}

function display(val) {
    screen.textContent = val;
    document.getElementById("screen").appendChild(screen);

}

function inputCheck(val) {
    if (powerOn === true) {
        if (operator === undefined) {
            input1 += val;
            display(input1)
        }
        else {
            input2 += val;
            display(input2);
        }
    }
}


function operate(operator, input1, input2) {
    switch (operator) {
        case "add":
            return add(input1, input2);
            break;
        case "subtract":
            return subtract(input1, input2);
            break;
        case "multiply":
            return multiply([input1, input2]);
            break;
        case "divide":
            if (input2 == 0) return "ERROR";
            else return divide(input1, input2);
            break;
        case "power":
            return power(input1, input2);
            break;
    }
}

function solve() {
    if (input1 !== "" && input2 !== "" && operator !== undefined) {
        let result = operate(operator, Number(input1), Number(input2)).toString();
        displayVal = result;
        if (result.indexOf('.') !== -1) {
            display(Number(result).toFixed(2));
        }
        else {
            display(result);
        }

    }
    reset();
}
