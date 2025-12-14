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

// const list = document.querySelector("#list");

// list.addEventListener("click", (e) => {
//   if (e.target.tagName !== "LI") return;

//   const clickedLi = e.target;

//   // если кликнули по УЖЕ активному элементу — toggle
//   if (clickedLi.classList.contains("active")) {
//     clickedLi.classList.remove("active");
//     return;
//   }

//   // если кликнули по другому — снимаем active со всех
//   for (const li of list.children) {
//     li.classList.remove("active");
//   }

//   // и добавляем активный только текущему
//   clickedLi.classList.add("active");
// });



//  Events forms
// const input = document.getElementById('input');

// // input.addEventListener("input", (event)=> console.log(event.target.value));
// input.addEventListener("change", (event)=> console.log(event.target.value));



// Практика
// const input = document.querySelector("#myInput");
// const output = document.querySelector("#output");

// input.addEventListener("change", (e)=>{
//   console.log(e.target.value);
//   console.log(input.value);
//   // output.textContent = input.value;
//   input.value='';
// });

// input.addEventListener("input", ()=>{
//   output.textContent = input.value;
// });

// Submit
// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");

// form.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   console.log("Отправлено", input.value)
//   input.value="";
// });

// const checkbox = document.querySelector("#inp");
// checkbox.addEventListener("change", ()=>{
// console.log(checkbox.checked);
// })

// placeholder — серый текст-подсказка.
// checked — для чекбоксов.
// files — для <input type="file">.
// checkbox.placeholder = "Enter the text"
// console.log(checkbox.placeholder)

// задача Чтение checkbox Есть форма: имя email checkbox "Согласен с правилами" При submit: Если чекбокс не отмечен — выводим ошибку.

// const form = document.querySelector('#signupForm');
// const div = document.querySelector('#error');
// const checkbox = document.querySelector('[name="agree"]');

// form.addEventListener("submit", (event)=>{
// event.preventDefault();

// if(checkbox.checked){
//   div.textContent = ""
  
// } else {
//   div.textContent = "ERROR"
//   return
// }

// console.log("Send");
// form.reset();
// })




// options

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", ()=>{
//   console.log("pressed");
// }, {once:true})

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", ()=> console.log("parent"))
// parent.addEventListener("click", ()=> console.log("parent-capture"), {capture: true})
// btn.addEventListener("click", ()=> console.log("btn-child"))

// form.addEventListener("submit", ()=>{}, {passive:false})

https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener#%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80_options






// 2. Форма логина
// Есть два поля: email и password.
// При submit:
//  - отменить поведение по умолчанию
//  - вывести в консоль объект вида:
// { email: "...", password: "..." }

// 3. Выпадающий список (select) Есть select: USA Germany Ukraine При submit вывести выбранную страну.

// 5. Создание карточки после отправки формы Форма содержит 3 поля: title description imageURL После submit создавай DOM-карточку: <div class="card"> <h3>...</h3> <p>...</p> <img src="..."> </div>