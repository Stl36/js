"use strict";
/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let filtredProducts = products.filter(function (item) {
    return item.photos; // я не понмаю, почему фильтр на длинну тут бросает ошибку, поэтому вначале отбрасываем товары без атрибута фото
})

filtredProducts = filtredProducts.filter(function (item) {
    return item.photos.length > 0; // при повторной фильтрации, на основании длинны массива мы отбрасываем товары без фото
})

console.log(products[0].photos.length)
console.log(filtredProducts[0].photos.length)
console.log(filtredProducts)

products.sort(function (item1, item2) {
    if (item1.price < item2.price) {
        return -1;
    }
    if (item1.price > item2.price) {
        return 1;
    }
    return 0;
})

console.log(products)