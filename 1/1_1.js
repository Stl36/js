/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
"use strict;"
let Tc = +prompt('Введите температуру в Цельсиях (°C)');
let Tf = (9 / 5) * Tc + 32;
alert(`Температура ${Tc} °C = ${Tf} °F`);
