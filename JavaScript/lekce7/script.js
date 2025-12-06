// function welcome(name, function2){
//     function2(name)
// }

// function function2(name){
//     console.log(`Hello, ${name}`)
// }

// welcome("Alex", function2);



//forEach
// sintax
// array.forEach((element, index, arr) => {
//     //  тело функции
    
// });

// const arr1 = ["apple", "orange", "bannan"];

// arr1.forEach((el, i)=>{
//     console.log(`${el}:${i}`);
// })

// // apple : 0
// sintax
// array.forEach((element, index, arr) => {
//     //  тело функции
    
// });

// map()
// const updateArr1 = arr1.map((el)=>{
//         return el.toUpperCase();
// })
// console.log(arr1);
// console.log(updateArr1);



// const users = [
//     {name: "Alex", age: 35},
//     {name: "Oleg", age: 25},
//     {name: "Maria", age: 17}
// ];

// const updateUsers = users.map((user) => ({
//     ...user,
    // isAdult: user.age >= 18
// }))
// console.log(updateUsers);
// console.log(users);

// const html = users.map((user) => {
//     return `<h2>${user.name}</h2>
//         <p>${user.age}</p>`
// }).join("");

// console.log(html);
// document.body.innerHTML = `<div>List of users ${html}</div>`;



//filter
// sintax
// array.forEach((element, index, arr) => {
//     //  тело функции
    
// });


// const arr2 = [14, 45, 1, 78, 12];

// const biggestNum = arr2.filter(el => el >= 15);
// console.log(biggestNum);


// find()
// sintax
// array.forEach((element, index, arr) => {
//     //  тело функции
    
// });

// const foundNum = arr2.find(el => el > 15);
// console.log(foundNum);

// const foundIndex1 = arr2.findIndex(el => el > 15);
// console.log(foundIndex1);

// // Есди елемент или индекс не найден  ->  -1
// const foundIndex = arr2.findIndex(el => el === 15);
// console.log(foundIndex);  // -1


// // some() / every()
// const arr2 = [14, 45, 1, 78, 12];
// const some = arr2.some(el => el > 15);
// console.log(some); // true

// const every = arr2.every(el => el > 15);
// console.log(every); //false 

// sort()
// const arr1 = ["apple", "orange", "bannan"];
// const arrNum = [1, 74, 0, 54, 8]
// console.log(arr1.sort());
// console.log(arrNum.sort((a, b) => b - a));

// console.log(arr1.sort((a,b) => b.localeCompare(a)));


// reduce()
// sintax
// const result = array.reduce((accumulator, element, index, array) => {
//     // вернуть новое значение аккумулятора
// }, initialValue);

// const arrNum = [1, 74, 0, 54, 8];
// const sum = arrNum.reduce((total, el) => {
//     return total = total + el;
// }, 0)

// console.log(sum); // 137


// setTimeout()

// document.body.innerHTML = "Start";

// setTimeout(()=>{
// document.body.innerHTML += "<div>After 4 sec</div> <h1>Hello</h1>"
// }, 4000);

// document.body.innerHTML += "The end";

// setInterval()

// setInterval(()=>{
//     console.log("passed 2 sec")
// }, 2000)



// console.log(date.getHours(), date.getMinutes(), date.getSeconds())
// setInterval(() => {
//     const date = new Date();
//     let newHours = date.getSeconds();
//     console.log(newHours);
// }, 1000);


// setInterval(() => {
//     document.body.innerHTML = new Date().toLocaleTimeString();


// }, 1000);



// setInterval(() => {
//      const date = new Date();
    
//      const hour = new Date().getHours().toString().padStart("2", 0);
//      const min = date.getMinutes().toString().padStart("2", 0);
//      const sec = date.getSeconds().toString().padStart("2", 0);
//      document.body.innerHTML  = `<div>${hour}:${min}:${sec}</div>` 
// }, 1000);

// padStart("2", 0) // padEnd()

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// setInterval(()=>{
//     document.body.style.backgroundColor = getRandomColor();
// }, 2000)





// function discount(name, sale){
//     alert(`${name}, у тебя скидка в размере ${sale}%`)
// }

// setTimeout(discount, 2000, "Alex", 20)

// таймер обратного отсчёта

// let start = 5;
// const timer = setInterval(() => {
//     start --;
//     if (start <= 0){
//         alert("TimeOut");
//         clearInterval(timer);
//         // document.body.innerHTML = "TimeOut"
//     } else{
//         document.body.innerHTML = start;
//     }
    
// }, 1000);




// const posts = [
//     {id:1, neme: "Alex", text: "Post#1"},
//     {id:2, neme: "Farid", text: "Post#2"},
//     {id:3, neme: "Honza", text: "Post#3"},
//     {id:4, neme: "Jura", text: "Post#4"}
// ]

// const upadatePosts = posts.filter((post) => {
//    return post.id !== 2;
// })
//  console.log(upadatePosts);




const orders = [
      { id: 1, status: "paid", total: 100 },
      { id: 2, status: "pending", total: 50 },
      { id: 3, status: "paid", total: 70 },
    ];

    const paidOrders = orders.filter(order => order.status === "paid")

 console.log(paidOrders);






// Задача 11: отложенная функция с аргументами
// С помощью setTimeout вызвать функцию greet(name) через 1 секунду с аргументом "Mia".