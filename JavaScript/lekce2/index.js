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

console.log(str.length);
