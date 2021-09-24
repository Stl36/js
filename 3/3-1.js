"use strict";
/*
1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
Для решения этой задачи используйте остаток от деления на 2, подробнее здесь https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Math#%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B и здесь https://developer.mozilla.org/en-
*/

function isEven(number) {
    if (number == 0) {
        return "это ноль"
    } else if (number % 2 == 0) {
        return "четное число"
    } else {
        return "нечетное число"
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} - ${isEven(i)}`);
}
