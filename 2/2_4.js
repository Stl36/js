"use strict";
/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return. 
*/

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

console.log(sumEl(4, 5));

console.log(mulEl(2, 3));

console.log(subEl(0, 2));

console.log(divEl(6, 3));
