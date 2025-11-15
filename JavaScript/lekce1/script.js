// let a = 15;
// console.log(a);
// a = 17;
// console.log(a);
// a = 1;

// console.log(a);
// const pi = 3.14;
// // pi = 15;
// console.log(pi);

// document.body.innerHTML = a;

// alert(a);

// var a

// const PI = 3.14;
// const API_URL = "https://example.com";
// const MAX_USERS = 1000;

// let a = `I don't "know"`;
// console.log(typeof(a));  // string
// console.log(typeof(5));  // number
// console.log(typeof("5")); // string
// console.log(typeof(5.8745788)); // number

// let userQuestion = confirm("Do you want eat?");
// console.log(userQuestion); // true or false

// let userName = prompt("What is your name?");
// console.log(userName, typeof(userName)); // Alex, string

// // userName = prompt("What is your name?");
// // console.log(userName, typeof(userName)); // // ivan, string

// let userAge = prompt("How old are you?");
// console.log(userAge, typeof(userAge)); // 30, string


// let userAge = Number(prompt("How old are you?"));
// console.log(userAge, typeof(userAge)); // 30, string

// let a = 15;
// let b = 14;

// let square = a * b;
// // console.log("Result: ", square, " cm2")
// document.body.innerHTML = "<div>Result: " + square + "cm2</div>";
// document.body.innerHTML += `<div>Площадь прямоугольника со стороной ${a} cm2 и со стороной ${b} cm2, равно ${square} cm2</div>`;
// document.body.innerHTML += `<div>Hello </div>`;




// let userName = prompt("What is your name?")

// let welcome = "Privet, " + userName + "!";
// console.log(welcome);


// 1. Объявите переменную city и присвойте ей название вашего города.
//        Выведите значение на страницу с помощью document.body.innerHTML.

// let city = "Prague";
// let city = prompt("Ведите название города в котором вы живете");
// document.body.innerHTML = city;
// document.body.innerHTML += `<h1 style="color:red"> Город в котором я живу ${city}</h1>`;


// 2. Объявите переменную age и присвойте ей число.
// Выведите на страницу тип данных этой переменной (typeof).
let age = 45214485247;
console.log(age, typeof(age)); // number
document.body.innerHTML += `<p> Переменная с названием age имеет значение ${age}, тип данных ${typeof(age)}</p>`;


//  3. Попросите пользователя ввести своё имя с помощью prompt().
//     Сохраните результат в переменную userName.
//     Выведите на страницу: Привет, <имя>!

// let userName = prompt("Enter your name");
// document.body.innerHTML += `<h2> Привееееет, ${userName}!</h2>`;
// document.body.innerHTML += "<p>Привет, " + userName + "!</p>";


// 4. Спросите у пользователя: «Хотите продолжить?» с помощью confirm().
//        Сохраните результат в переменную isContinue.
//  Выведите на страницу: «Пользователь хочет продолжить: <результат>»
     
// let isContinue = confirm("Хотите продолжать?");
// document.body.innerHTML += `<h2> Пользователь хочет продолжить: ${isContinue}!</h2>`;

// 5. Комбинация всех действий
//     - Попросите пользователя ввести имя через prompt().
//     - Попросите подтвердить действие через confirm().
//     - Выведите на страницу: «Привет, <имя>!»
//                                «Результат подтвержления: »

// let userName = prompt("Enter your name");
// let isContinue = confirm("Хотите продолжать?");
// document.body.innerHTML += `<h2> Привееееет, ${userName}! Результат подтверждения: ${isContinue}</h2>`;

// + сложить
// - отнять
// * умножить
// / разделить
// % остаток от деления
// ** возведение в степень

// console.log("Alex" + ", " + "hello!"); // Alex, hello!
// console.log("5" + ", " + "hello!");  // 5, hello!
// console.log("5" + "6"); // 56 
// console.log("5" + 6); // 56

console.log("5" * 6); // 30

// Number("5") * Number(6)

console.log(5 / "aaaaa"); 