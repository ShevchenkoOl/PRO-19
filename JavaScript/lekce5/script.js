// const students = ["Alena", "Zhenja", "Vlad", "Sergei", "Alexsandr", "Farid", "Jusif"];
// //                   0        1         2       3            4          5       6

// console.log(students[3]);
// students[2] = "Alex";

// console.log(students);
// // students = ["Alena", "Zhenja", "Vlad", "Serg", "Alex"]; // нельзя изменять цедый массив если он обьявлен как const, let - можна!
// // console.log(students); 

// console.log(students.length);  // 7

// split(delimiter) преобразует строку в массив, «разбивая» её с помощью разделителя delimiter;
// join(delimiter) объединяет элементы массива в строку;

// let str = "Hello world!";
// let arr = str.split("");
// console.log(arr);  // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']


// let arr1 = str.split(" ");
// console.log(arr1);  //["Hello", "World!"]

// let arr2 = str.split("l");
// console.log(arr2);  // ['He', '', 'o wor', 'd!']

// let arr = ["Apple", "Orange"];
// let str = arr.join(", ");
// console.log(str);  // Apple, Orange

// let str = "Hello";
// let arr = str.split("");
// arr[4] = "Q";
// // console.log(arr[3]);
// console.log(arr.join(""));

// let arr = ["JavaScript", "React", "Node.js", "Angular"];
// console.log(arr.indexOf("Re")); // -1
// console.log(arr.indexOf("React")); // 1

// console.log(arr.includes("Python")); // false
// console.log(arr.includes("JavaScript")); // true
// if(arr.includes("Python") || arr.includes("Angular")){
//     console.log("Что-то есть")
// } else {
//     console.log("Ничего нет!")
// }

// if(arr.includes("Python") && arr.includes("Angular")){
//     console.log("Что-то есть")
// } else {
//     console.log("Ничего нет!")
// }

// push / unshift(...elements) — добавляет один или несколько элементов в конец / в начало массива. Возвращает новую длину массива.

// console.log(arr);
// arr.push(true);  // добавляет один или несколько элементов в конец
// console.log(arr); 

// arr.unshift(false); // добавляет один или несколько элементов в конец
// console.log(arr);

// pop() / shift() — удаляет последний / первый элемент массива и возвращает его. Если массив пустой — возвращает undefined;

// console.log(arr.pop()); // Angular
// console.log(arr.shift()); // JavaScript
// console.log(arr);  // ['React', 'Node.js']

// slice(begin, end) - копирование частей массива, возвращает новый массив, содержащий копию части исходного массива, не изменяя его.
// begin — индекс первого элемента для копирования.
// end — индекс элемента, до которого копируются элементы, не включая его;

// console.log(arr.slice(1, 2)); // ['React']
// console.log(arr.slice(2)); // ['Node.js', 'Angular'] - если один параметр это оолько начало копии
// console.log(arr.slice(-1)); // отсчет идёт с конца. ['Angular']
// console.log("JavaScript".slice(-4));


// let arr = ["JavaScript", "React", "Node.js", "Angular"];
// splice(position, num, ...items) - удаление и вставка элементов, изменяет исходный массив:
// position — индекс первого элемента для удаления.
// num — количество удаляемых элементов.
//  ...items — элементы для вставки (опционально).

// arr.splice(1, 2); // вырезали "React", "Node.js"
// console.log(arr); // осталось ['JavaScript', 'Angular']

// arr.splice(1); // вырезает начиная с указанного индекса
// console.log(arr); // осталось ['JavaScript', 'Angular']

// arr.splice(-1); // вырезает только последний элемент
// console.log(arr); // осталось ["JavaScript", "React", "Node.js"]

// arr.splice(1, 2, "Django", "Vite", "Ruby");
// console.log(arr);  // ['JavaScript', 'Django', 'Vite', 'Ruby', 'Angular']



// concat() - объединяет два или больше массивов в один. Он не изменяет массив, на котором вызывается, а возвращает новый;
// let arr = ["JavaScript", "React", "Node.js", "Angular"];
// let arr2 = ["JavaScript", "Apple", "Car"];

// let newArr = arr.concat(arr2);
// console.log(arr);
// console.log(newArr); // ['JavaScript', 'React', 'Node.js', 'Angular', 'JavaScript', 'Apple', 'Car']

// for - когда нам важен игдекс
// for(let i=0; i<newArr.length; i++){
//     console.log(i, newArr[i]);
// }

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//         console.log(i, arr[i]);
//     }


//    for (const value of newArr) {
//         console.log(value);}


// let str = "Hello";
//    for (const value of str) {
//         console.log(value);
//     }


    // const arr = [1, 2, 3];
    // arr[0] = 100;   // можно
    // arr.push(4);    // можно
    // arr = [9, 9, 9]; // ❌ ошибка — нельзя переназначать весь массив

    // // ✅ let — можно менять и содержимое массива, и переназначать переменную
    // let arr = [1, 2, 3];
    // arr[0] = 100; // можно
    // arr.push(4);  // можно
    // arr = [9, 9, 9]; // ✔ можно — новая коллекция 



// let user = {
//     name: "Alex",
//     age: 25,
//     isOnline: true,
//     favoriteCity: ["Prague", "Odessa", "Brno"],
//     stat: {
//         likes: 45214,
//         downloads: 1452,
//     }
// }

// console.log(user.isOnline); // true
// console.log(user.favoriteCity[0]); // Prague
// console.log(user.stat.downloads);  // 1452

let user = {
    "name-user": "Alex",
    "age": 25,
    "is online": true,
    "favoriteCity": ["Prague", "Odessa", "Brno"],
    "stat": {
        "likes": 45214,
        "downloads": 1452,
    }
}

// console.log(user['name-user']); // Alex
// console.log(user['stat']['downloads']); // 1452

// let catName = "name-user";
// console.log(user[catName]);  // Alex

// user['name-user'] = "Viktor";
// console.log(user['name-user']); // Viktor
// user['location'] = "Plzen";
// console.log(user);

// delete user["stat"]["likes"]

// console.log(delete user["stat"]["like"]); // true
// console.log(user);

//  for ... in 

// for(let value in user){
//     // console.log(key)
//     let key = user[value];
//     console.log(key, value)
// };


// // Object.keys(obj) - принимает объект и возвращает массив ключей его собственных свойств. Если объект не имеет значения, метод вернёт пустой массив;
// let arrKeys = Object.keys(user);
// console.log(arrKeys); // ['name-user', 'age', 'is online', 'favoriteCity', 'stat', 'location']

// // Object.values(obj) - принимает объект и возвращает массив значений. Если объект не имеет значения, метод вернёт пустой массив;
// let arrValues = Object.values(user);
// console.log(arrValues); // ['Viktor', 25, true, Array(3), {…}, 'Plzen']

// // Object.entries(obj) - принимает объект и возвращает массив записей, каждый элемент которого, будет ещё один массив из 2-х элементов: имени свойства и значения этого свойства с объекта obj.
// let arr = Object.entries(user);
// console.log(arr);   //  [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]


let user2 = {
    age: 25,
    name: "Alex",
    isOnline: true,
    favoriteCity: ["Prague", "Odessa", "Brno"],
    stat: {
        likes: 45214,
        downloads: 1452,
    }
}

let {age, name, isOnline, car="Pragu"} = user2;
age = 45;
console.log(age);
console.log(user2);
console.log(car);

let arr = [14, 15, 78, 8];
let {first, second, third} = arr;
first = "Alex";
console.log(first);
console.log(arr);