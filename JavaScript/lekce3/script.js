// let a = 0;
// // console.log(Number(a), typeof(Number(a)));

// // console.log(a, typeof(a));
// // console.log(Boolean(a), typeof(Boolean(a)));

// let b = 1;
// // console.log(a <= b); //true
// // console.log(a > b); // false

// // console.log("1" <= 1); // true

// // console.log("a" < "b"); // 97 < 98 - false

// console.log("a".charCodeAt(0));
// console.log("h".charCodeAt(0));

// // console.log("a" > "1"); // 97 > 1 - true

// console.log("cat" > "cating"); // 104 > 97 - true

// console.log("hello".charCodeAt(2));

// // Если один из операндов число тогда всё условие мы переводим в число и проверяем равенство, если мы не можем перевести в число тогда будет NaN и всё значение будет false.

// // Если мы сравниваем две строки то по символьно переводим строку в Unicode, и с равнивакем юникоды, если одинаковые тогда проверяем следующий символ....
// console.log("cat" > "cating"); // - сначала сравнивают символ "с" - они одинковын, переходим ко второму - "а" - они тоже одинаковы, третий - тожн одинаковы, а вот четвертого в первом слове нет, а вл втором есть "i" - всё выводим результат - false

// // console.log("hello".charCodeAt(0)); // h -> 104
// // console.log("hello".charCodeAt(3)); // l -> 108
// //  console.log("😃".charCodeAt(0));  // 55357
// // console.log("h" > "l");  // false 104 > 108
// console.log("😃" > "a"); // 55357 > 97 - true
// // "a" > "b"	сравниваеться по Unicode-коду символов
// // "яблоко" > "груша"	сравнение происходи т посимвольно (сначала сравниваем первые буквы,они не равны выводим результат, если они не отвечают условию то есть равны, а в условии  у// "10" > "2"	сравниваються как строки по Unicode ("1" < "2")
// // "10" > 2	сначала превращается в число
// "abc" > 2	но "abc" → NaN → всегда false

// console.log("1" == 1); // true
// console.log("abc" == 1); // false
// console.log("&" == 1); // false
// console.log("&" != 1); // NaN !== 1 - true
// console.log("5" != 53); // true
// console.log(!false); // true
// console.log("avc" == "avc"); // true

// console.log("1" === 1); // false
// console.log("1" !== 1); // true

// console.log("" === true); // false
// console.log(" " == 0); // Number(" ")=0 == 0 -> true
// console.log(" " == 1); // false
// // console.log(typeof(" "));
// console.log(Boolean(" "), typeof(Boolean(" ")));

// console.log("" === 0); // false
// console.log(" ".charCodeAt(0)); // 32
// console.log(Number(" ")); // 0

// == - НЕ строгое равенство - автомвтически переводит к единномуц типу данных
// != - НЕ строгое НЕравенство
// "5"!= 5 - false   5 != 5 - false

// === - строгое равенство - сравнивает сначала типы данных, а потом их значение
// !== - строгое НЕравенство
// "5"!== 5 - true   string не равно number

let a = 15;
let b = 32;

// if (a >= b){
//     console.log("Переменная а больше b");
// }

// console.log("Good buy!");
// let age = 21;

// if(age >= 22){
// console.log("Поздравляю, ты можешь купить баночку пива!");
// } else {
//     console.log("Ты ещё мал, мой ноги и ложись спать!");
// }

// age = 7;

// if (age <= 10) {
//   console.log("Child");
// } else if (age <= 18) {
//   console.log("Teenager");
// } else {
//   console.log("Adult");
// }

// let userName = prompt("Enter user name");


// if (userName === "alexVin"){
//     let password = prompt("Enter your password");
//     if (password === "123456789") {
//         console.log("Welcome!");
//     } else {
//         console.log("I am sory!(((");
//     }
// } else {
//     console.log("Invalid user name");
// }



// let age = 19;
// let ticket = true;

// if (age >= 18){
//     if(ticket) {
//         document.body.innerHTML = `<h1>Welcome to cinema!</h1>`
//     } else {
//         document.body.innerHTML = `<h1 style="color: red">You need buy ticket</h1>`
//     }
// } else {
//         document.body.innerHTML = `<h1>This movie not for your age!</h1>`
//     }


// AND -&&, OR - ||, NOT - !

// let age = 19;
// let ticket = false;

// if (age >= 18 && ticket){
//            document.body.innerHTML = `<h1>Welcome to cinema!</h1>`
// } else {
//         document.body.innerHTML = `<h1>Go home!</h1>`
//     }

// let weekDay = "Saturda";

// if (weekDay === "Saturday" || weekDay === "Sunday") {
//      document.body.innerHTML = `<h1 style="color: red">Today is weekend!</h1>`
// } else {
//     document.body.innerHTML = `<h1 style="color: blue">Today is working day!</h1>`
// }



// let age = prompt("Enter your age");

// if (age <= 10){
//     console.log("Child");
// } else if (age > 11 && age <= 18) {
//   console.log("Teenager");
// } else if (age > 19 && age <= 65) {
//   console.log("Adult");
// } else if(age >= 66) {
//     console.log("Senior");
// } else {
//     console.log("Value Error");
// }

// let isRaining = true;

// if (!isRaining) {
//     console.log("The wether is fine!");
// } else {
//     console.log("The wether is not good!");
// }

// true === !false

// isRaining ? console.log("The wether is not good!") : console.log("The wether is fine!");

// !isRaining ? console.log("The wether is fine!") : console.log("The wether is not good!");

// let age = 14;
// document.body.innerHTML = `<h1>${age >= 18 ? "Welcome" : "Good buy"}</h1>`


// Пользователь вводит имя. Если имя начинается с заглавной буквы — всё хорошо.
// Если с маленькой — исправить. Вывести исправленное имя.

// let userName = prompt("Ведите своё имя");

// if (userName[0] === userName[0].toUpperCase()){
//     document.body.innerHTML = `<h1>Молодець, ты правильно ввел своё имя!</h1>`
// } else {
//     document.body.innerHTML = `<h1>Ты НЕправильно ввел своё имя! Твоё имя должно быть написано так: ${userName[0].toUpperCase() + userName.slice(1)}</h1>`
// }
