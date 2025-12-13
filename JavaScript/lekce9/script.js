// const btn = document.querySelector('#btn');

// const handleClick1 = () => console.log('The button was pressed first time!');
// const handleClick2 = () => console.log('The button was pressed second time!');
// const handleClick3 = () => console.log('The button was pressed third time!')


// const removeSecondEvent = () => {
//     console.log('Код выполниться, второй callback - будет удалён');
//     btn.removeEventListener("click", handleClick2);
//     btn.removeEventListener("click", removeSecondEvent)
// }


// btn.addEventListener("click", handleClick1);
// btn.addEventListener("click", handleClick2);
// btn.addEventListener("click", handleClick3);

// btn.addEventListener("click", removeSecondEvent)


// 1. При клике мыши в рандомном месте счётчик прибавляет +1:
// <div id="count">Кликов: 0</div>

// const btn = document.querySelector('#btn');
// const result = document.querySelector('#result');

// let total = 0;
// const addClick = () => {
//     total++;
//     result.textContent = `Количество кликов: ${total}`
// }

// btn.addEventListener("click", addClick);
// document.addEventListener("click", addClick);


// 2. При нажатии на квадратик, в рамдомном порядке окрашываеться его фон:

// const box = document.querySelector("#box");

// function changeColors(){
//     return `rgb(
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}
//     )`
// };

// // function changeColors(){
// //     return `#${}`
// // };

// box.addEventListener("click", ()=>box.style.backgroundColor = changeColors());

// 3. Написать программу, которая:
//     - при нажатии Start начинает менять цвет фона каждые 2 секунды
//     - при нажатии Stop — останавливает смену и оставляет последний цвет

// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');

// function changeColors(){
//     return `rgb(
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)}
//     )`
// };

// let setIntervalId = null;

// start.addEventListener("click", () => {
//     if(setIntervalId !== null) {
//         console.log("Следуйщее нажание");
//         return;
//      }

// setIntervalId = setInterval(() => {
//     document.body.style.backgroundColor = changeColors()
// }, 1000)

// });

// stop.addEventListener("click", () => {

// clearInterval(setIntervalId);
// setIntervalId = null;

// })


// const btn = document.querySelector('#btn');

// btn.addEventListener("click", (event) => {
//     console.log(event);
// })

// const box = document.querySelector('#box');
// box.addEventListener("click", (e)=>{
//     console.log("target", e.target);
//     console.log("currentTarget", e.currentTarget);
// })


// document.addEventListener("keydown", (e)=>{
//     console.log("key", e.key);
//     console.log("code", e.code);
// });



// 1. Отслеживание движения мыши Выводи в div текущие координаты мыши: X: 123, Y: 455.

// document.addEventListener("mousemove", (event) =>{
//     console.log(event.clientX);
//     console.log(event.clientY);
// });

// Список: определить, по какому LI кликнули Есть список UL с 5 элементами.
// При клике выводи: event.target.textContent

const list = document.querySelector("#list");

list.firstChild is 
// list.addEventListener("click", (e)=>{
//     console.log(e.target);

// //     if(e.target.tagName === "LI"){
// //         console.log(e.target.textContent);
// //     }
    
// //    for (const li of list.children){
// //     li.classList.remove("active")
// //    }
// // if(e.target.className !== "active"){
// //     e.target.classList.add("active");
// // } else {
// //      e.target.classList.remove("active");
// // }
// });




