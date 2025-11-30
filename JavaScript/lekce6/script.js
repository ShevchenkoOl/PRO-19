// function welcome(){
//     return "Hello World!"
// }

// let abc = welcome();

// console.log(abc);
// console.log(welcome());
// document.body.innerHTML = abc;

// function sum(a, b){
//     // return a + b
//     console.log(a+b) // 12
// }

// let sum2 = sum(5, 7);
// console.log("sum2 = ", sum2); // sum2 =  undefined

// параметр по умолчанию
// function sum(a, b=5){
//     return a + b
//     // return "Hello World!"
// }

// console.log(sum(14));

// неопределённое количество параметров
// sum(1,4,78);

// function sum(...a){
//     // for (i in a){
//     //     console.log(a[i])
//     // }
//     // return

//     for (i of a){
//         console.log(i)
//     }
//     return
// }

// // sum(1,4,78);

// sum() - вызов функции
// sum - ссылка на функцию

// const sum = function(name){
//     return(`Hello ${name}!`)
// }

// console.log(sum("Alex"));

// arrow function стрелочная функция
// const sum = (a, b) => a + b;
// console.log(sum(45, 74));  // Cannot access 'sum' before initialization at script.js:61:13

// const sum = (a, b) => {
//     let result = a + b;
//     return result
// };

// // 5. написать функции которая принимает параметр обьект и возвращает сумму значений.
// // объект:
// const salaries = {
//   Alex: 1200,
//   Tom: 1800,
//   Bob: 1500
// };
// // console.log(Object.values(salaries));

// // Найди сумму всех зарплат.

// function salary(obj){
//     let total = 0;
//     let newArr = Object.values(obj)
//     for (v in newArr){
//         total += newArr[v];
//     }
//     return total;
// }

// let result = salary(salaries);
// console.log(salary(salaries)); // 4500
// document.body.innerHTML = `<h1 class="title">Суииа всех зарплат наших работников равна: ${result} czk</h1>`

// 1. Напиши функцию greetUser, которая принимает объект:
// { name: "Alex", age: 25 }
// и выводит строку: Привет, Alex! Тебе 25 лет.
// Используй деструктуризацию объекта внутри функции.
// const greetUser = (obj) => {
//     const {name, age} = obj;
//     return `Hello ${name}, you are ${age} years old!`;
// }

// console.log(greetUser({ name: "Alex", age: 25 }))

// 3. Напиши функцию hasProperty(obj, key), которая принимает объект и строку. Функция должна вернуть:
//  		- true — если свойство существует
//  		- false — если нет

// const hasProperty = (obj, key) => key in obj;

// const obj = {
//     name: "Alex",
//     age: 25
// }

// console.log(hasProperty(obj, "city")); // false

// 5. Напиши функцию filterByLength(arr, minLen), которая принимает:
//       - массив строк
//       - минимальную длину строки
// И возвращает новый массив, где только строки длиннее minLen.

// function filterByLength(arr, minLen) {
//   let newArr = [];
//   for (i of arr) {
//     if (i.length > minLen) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// const arr = ["car", "apple", "desk", "drfetgd", "jghsdjfhjsafhkjsfhkj", "jhgsdaj"];
// let minLen = 3;

// let kakuito = filterByLength(arr, minLen);

// let item = '';
// for (el of kakuito){
//     item += `<li>${el}</li>`
// }
// document.body.innerHTML = `<ul>${item}</ul>`;


// 6. Напиши функцию createUser(name, age), которая возвращает объект:

// {
//   id: <случайное число от 1 до 1000>,
//   name: "",
//   age: 0,
//   isActive: true
// }
// ID генерируй внутри функции с помощью Math.random().

// const createUser = (name, age) => {
//     return {
//             id: Math.floor(Math.random() * 1000) + 1,
//             name: name,
//             age: age,
//             isActive: Boolean(Math.round(Math.random()))   //Math.random()>0.5
//     }

// }

// console.log(createUser("Alex", 25));


// 9. Напиши функцию merge(obj1, obj2), которая возвращает НОВЫЙ объект, содержащий свойства обоих:
// merge({a:1}, {b:2}) → {a:1, b:2}
// const merge = (obj1, obj2) => {
//     return {...obj1, ...obj2}
// }

// console.log(merge({a:1, b:4}, {b:2})) // {a:1, b:2}




const users = [
  { name: "Alex", online: true },
  { name: "Maria", online: false },
  { name: "Oleg", online: true }
];

// Напиши функцию getOnlineUsers(users), которая возвращает новый массив имён пользователей, которые online.

function getOnlineUsers(users) {
    let newArr = [];
    for(let user of users){
        if (user.online){
            newArr.push(user.name)
        }
    }
    return newArr;
}
 console.log(getOnlineUsers(users));

