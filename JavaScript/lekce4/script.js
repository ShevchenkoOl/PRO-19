// console.log(5 > 3); // true

// Определение сезона
// Пользователь вводит число месяца (1–12).
// Выведите: зима, весна, лето, осень.

// let num = 5;
// if (num === 12 || num === 1 || num === 2){
//     console.log("Winter");
// } else if (num === 3 || num === 4 || num === 5){
// console.log("Spring");
// } else if (num === 6 || num === 7 || num === 8){
// console.log("Summer");
// } else if (num === 9 || num === 10 || num === 11){
// console.log("Autumn");
// } else {
//     console.log("Error");
// }

// if (num <= 2 || num === 12) {
//      console.log("Winter");
// } else if (num > 2 && num <= 5) {
//      console.log("Winter");
// }

let num = 8;
// if (num === 1){
//     console.log("Monday");
// } else if (num === 2){
//     console.log("Tuesday");
// } else if (num === 3){
//     console.log("Wednesday");
// } else if (num === 4){
//     console.log("Thursday");
// } else if (num === 5){
//     console.log("Friday");
// } else if (num === 6){
//     console.log("Sartudayy");
// } else if (num === 7){
//     console.log("Sunday");
// } else{
//     console.log("Error");
// }

//    switch(num) {
//         case 1:
//              console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//          case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Sartuday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Error");
//     }

// let mounth = prompt("");
// let mounth = new Date().getMonth();
// console.log(mounth);
// switch (mounth) {
//   case 11:
//   case 0:
//   case 1:
//     console.log("Winter");
//     break;
//   case 2:
//   case 3:
//   case 4:
//     console.log("Spring");
//     break;
//   case 5:
//   case 6:
//   case 7:
//     console.log("Summer");
//     break;
//   case 8:
//   case 9:
//   case 10:
//      console.log("Autumn");
//     break;
// //   default:
// //     console.log("Error");
// }


// console.log(typeof(new Date().getMonth()));
// document.body.innerHTML = new Date().getMonth();


// let age = Number("");
// let age = prompt(" ")


// switch(true){
//     case isNaN(age):
//     console.log("Вы ввели не число");
//     break;

//     case 0:
//     console.log("Возраст не может быть меньше или равно нулю");
//     break;

//     case "":
//     console.log("Задайте пожалуйста свой возраст");
//     break;

//     case age >= 18:
//         console.log("Вход разрешён");
//     break;

//     default:
//     console.log("Вход запрешён");
// }

// i = i + 1 -> i++

// ================================================================================
//               АРИФМЕТИЧЕСКИЕ СОКРАЩЕНИЯ В JAVASCRIPT
// ================================================================================

// ┌──────────┬─────────────────┬──────────────────┬────────────┐
// │ Оператор │  Полная форма   │      Пример      │  Результат │
// ├──────────┼─────────────────┼──────────────────┼────────────┤
// │   +=     │   i = i + n     │ i = 5; i += 3    │   i = 8    │
// │   -=     │   i = i - n     │ i = 10; i -= 4   │   i = 6    │
// │   *=     │   i = i * n     │ i = 3; i *= 5    │   i = 15   │
// │   /=     │   i = i / n     │ i = 20; i /= 4   │   i = 5    │
// │   %=     │   i = i % n     │ i = 17; i %= 5   │   i = 2    │
// │   **=    │   i = i ** n    │ i = 2; i **= 3   │   i = 8    │
// │   ++     │   i = i + 1     │ i = 5; i++       │   i = 6    │
// │   --     │   i = i - 1     │ i = 5; i--       │   i = 4    │
// └──────────┴─────────────────┴──────────────────┴────────────┘

// for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }

// for (let i= 1; i <= 20; i+=2) {
//     console.log(i);
// }

// sumu 1 do 20
// let sum = 0;

// for(let i= 1; i <= 20; i++){
//     sum = sum + i
// }
// console.log(sum);

// let str = "JavaScriptReactAlenaFarid";
// for(let i= 0; i <= str.length-1; i++){
//     console.log(str[i].toUpperCase());
// }

// for(let i= 0; i <= str.length-1; i++){
//     if (str[i] === str[i].toUpperCase()){
//         console.log(str[i])
//     }
// }

// let i = 0;
// while(i <= 10){
//     console.log(i)
    // i++
// }


//     let userPasswrod; 

//     while (userPasswrod !== "admin123") {
//         userPasswrod = prompt("Вндите пароль");
//         console.log("Введите правильный пароль");
//     }
// console.log("Позлравляю!");

// break и continue — это вспомогательные операторы управления циклами
//             - break — остановить цикл полностью
//             - continue — пропустить текущую итерацию

// for (let i = 10; i >= 0; i--){
//     if (i === 5){
//         continue
//     }
//     console.log(i)
// }

// let i = 0;
// while(i <= 10){
//     if (i === 7){
//        break;
//     }
//     console.log(i)
//         i++
// }

// console.log("Hello");

let i = 0;
while(i <= 10){
    if (i === 7){
    console.log("Мы нашли 7");
          continue;
         i++
    }
    console.log(i)
        i++
}

// Найти количество гласных в слове

// let word = "JavaScript kjhhjkhkj khkhjkaddera";
// let cout = 0;
// let glas = "ajeuioy"

// for (let i=0; i<=word.length-1; i++){
//     if(glas.includes(word[i].toLowerCase())){
//         cout++
//     }
// }
// console.log(cout);
// // "JavaScript".includes("Script"); 