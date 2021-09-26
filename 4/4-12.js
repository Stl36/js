"use strict";
/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/

// a)
//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (txt) {
    this.text = txt;
};

//es6

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text
        this.date = date;
    }

    edit(txt) {
        this.text = txt;
    }
}

// б)

//es5

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

//es6

class AttachedPost2 extends Post2 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let obj1 = new Post("Vasya", "", "01012020");
let obj2 = new Post2("Petya", "", "01012021");
console.log(obj1);
console.log(obj2);

obj1.edit("Lorem ipsum dolor sit amet.");
obj2.edit("Lorem ipsum dolor sit amet.");
console.log(obj1);
console.log(obj2);

let obj3 = new AttachedPost("Masha", "", "02012020");
let obj4 = new AttachedPost2("Sveta", "", "02012021");
console.log(obj3);
console.log(obj4);

obj3.makeTextHighlighted();
obj4.makeTextHighlighted();
console.log(obj3);
console.log(obj4);
