
//
let currentValueArr = [];

function funcTest() {
    let elementsstring = currentValueArr.join('');
    let elements = elementsstring.split(/(\D+)/).filter(Boolean);
    converttoNum(elements);
    let result = 0;
    let operator = '+';
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === '*') {
            let prev = parseFloat(elements[i - 1]);
            let next = parseFloat(elements[i + 1]);
            elements.splice(i - 1, 3, prev * next);
            i--; 
        } else if (elements[i] === '/') {
            let prev = parseFloat(elements[i - 1]);
            let next = parseFloat(elements[i + 1]);
            elements.splice(i - 1, 3, prev / next);
            i--;
        }
    }

    result = parseFloat(elements[0]);
    for (let i = 1; i < elements.length; i += 2) {
        let operator = elements[i];
        let operand = parseFloat(elements[i + 1]);
        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }

    document.getElementById("calculate").value = result;
}

function onClick1(x) {
    currentValueArr.push(x);
    document.getElementById("calculate").value = currentValueArr.join('');
}

function converttoNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (['+', '-', '*', '/'].includes(arr[i])) {
            continue;
        } else {
            arr[i] = Number(arr[i]);
        }
    }
}

function ClearLast() {
    currentValueArr.pop();
    let array2 = currentValueArr.join('');
    document.getElementById("calculate").value = array2;
}

function ClearAll() {
    currentValueArr.splice(0, currentValueArr.length);
    document.getElementById("calculate").value = currentValueArr.join('');
}

function Calculator() {
    document.getElementById("result").value = "Result: " + Math.floor(Math.random() * 1000);
}