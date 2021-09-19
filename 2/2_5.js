/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
"use strict;"

function sumEl(a, b) {
    return a + b
}

function mulEl(a, b) {
    return a * b
}

function subEl(a, b) {
    return a - b
}

function divEl(a, b) {
    return a / b
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            console.log(sumEl(arg1, arg2));
            break;
        case "*":
            console.log(mulEl(arg1, arg2));
            break;
        case "-":
            console.log(subEl(arg1, arg2));
            break;
        case "/":
            console.log(divEl(arg1, arg2));
            break;
    }
}

let a = parseInt(Math.random() * 100 - 50);
let b = parseInt(Math.random() * 100 - 50);
let oper = ["+", "*", "-", "/"];
let c = parseInt((Math.random() * 4));
c = oper[c];

mathOperation(a, b, c);
