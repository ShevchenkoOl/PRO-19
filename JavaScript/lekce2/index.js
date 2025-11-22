// console.log(3.14, typeof(3.14));
// console.log(3, typeof(3));
// console.log(Infinity, typeof(Infinity));
// console.log(NaN, typeof(NaN));

// let a = "35px";

// console.log(a, typeof(a));
// console.log(parseInt(a), typeof(parseInt(a))); // 35

// console.log(parseFloat(a), typeof(parseFloat(a))); // 35

// let b = 35.45;
// console.log(b, typeof(b));
// console.log(parseInt(b), typeof(parseInt(b)));

// console.log(b, typeof(b));
// console.log(parseFloat(b), typeof(parseFloat(b)));

// let str = "55";
// console.log(+str, typeof(+str));

// let age = prompt("How old are you?");
// let ageNubmer = +age;
// console.log(ageNubmer, typeof(ageNubmer));


// NaN ≠ null
// NaN ≠ NaN

// console.log(isNaN("5")); // false
// console.log(isNaN("abc")); // true

// console.log(Math.round(2.5)); //3
// console.log(Math.round(2.4)); // 2

// console.log(Math.ceil(2.2));  // 3
// console.log(Math.floor(2.9)); // 2

// console.log(Math.random()); // 0 .... 1

// 35 ..... 49
// Math.floor(Math.random() * (max - min + 1)) + min
// let result = Math.ceil(Math.random() * (49 - 46)) + 46;
// console.log(result);

// console.log("max = ", Math.max(45, 15, 78, 1, 25, 63)); // 78
// console.log("min = ", Math.min(45, 15, 78, 1, 25, -63)); // -63
// console.log(Math.pow(4, 5)); // 1024
// console.log(4**5); // 1024


// Возможгые ошибки
// console.log((0.3 - 0.1).toFixed(2));
// console.log((0.1 + 0.2).toFixed(2));

// let a = (0.3 - 0.1).toFixed(2);
// console.log(typeof(a));  // string

// console.log((0.3 * 10 - 0.1 * 10) / 10);  // 0.2

let str = "Oleksii Shevchenko";
     //    0123456789....
// let symbol_7 = str[6];
// // console.log(symbol_7); // i
// // console.log(str[7]);
// let symbol_10 = str[9] // h
// console.log(symbol_10 + symbol_7);

// str[9] = "a";
// console.log(str[9]);

// console.log(str.length);
// console.log(str[str.length - 1]); // 0 - последний символ строки
// console.log(str.at(-2)); // k - предпоследний символ
// toUpperCase / toLowerCase

// console.log(str.toLowerCase()); // oleksii shevchenko
// console.log(str.toUpperCase()); // OLEKSII SHEVCHENKO

// console.log(str.indexOf("vch")); // 11
// console.log(str.indexOf("d")); // -1 - ничего ненашло

// console.log("JavaScript".includes("D")); // false

// let password = prompt("Enter: ");
// console.log(password);
// console.log(password.trim());

// - slice — извлечение части строки
        // "JavaScript".slice(0, 4); // "Java"
        // "JavaScript".slice(4);    // "Script"
// console.log(str.slice(9, 12)); // hev
// console.log(str.slice(12));  // chenko


// - replace - перезаписывает
// let newName =  str.replace("Oleksii", "Honza"); // "Hello JS"
// console.log(newName);


// - repeat - делает повторы
    //    console.log("Ha".repeat(3)); // "HaHaHa"


// Задача 1: Форматировщик даты
// Создайте страницу, которая спросит у пользователя день, месяц и год, и выведет на страницу дату в красивом формате.
// Используйте шаблонную строку.

// alert("Доброе утро, хочешь узнать какой сегодня день?")
// let day = prompt("Введите пожалуйста число месяца");
// let month = prompt("Введите пожалуйста название месяца");
// let year = prompt("Введите пожалуйста год");

// document.body.innerHTML = `<h1>Доброе утро!</h>
//                            <p style="color:green; font-weigth: 600"> Сегодня: ${day} ${month} ${year} года</p>
//                            <p>Желаю вам хорошего дня!</p>`;



// Задача 2: Перевод температуры
// Попросите пользователя ввести температуру в градусах Цельсия.
// Переведите в Фаренгейты: F = C * 1.8 + 32
// и наоборот: С = (5 * (F - 32)) / 9
// Выведите результат на страницу.

// let c = prompt("Ведите подалуйста температуру в градусах Цельсия")
// let f = c * 1.8 + 32;
// document.body.innerHTML = `<div>Температура ${c} градусов цельсия равна ${f} градуса по Фаренгейту</div>`;

// let f = prompt("Ведите подалуйста температуру в градусах аренгейт")
// let c = (5 * (f - 32)) / 9;
// document.body.innerHTML = `<div>Температура ${f} градусов по Фаренгейту равна ${c.toFixed(2)} градуса цельсия</div>`;


// Задача 3: Округления
// Пусть есть число 3.67892
// Выведите:
//   - округление вниз
//   - вверх
//   - обычное
//   - до двух знаков после запятой

// let num = 3.67892;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(num.toFixed(2));