"use strict";
/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (element) {
    let tempVar = element["price"]
    element["price"] = tempVar * 0.85
    console.log(element["price"])
})
