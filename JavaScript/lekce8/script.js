// document // корневой объект
// window.document // то же самое


// const container = document.getElementById("cont");
// console.log(container);

// const container = document.getElementsByClassName("container");
// console.log(container);
// const cont2 = container.getElementsByClassName("div2");

// const container = document.getElementsByTagName("div");
// console.log(container);

// const container = document.querySelector("div");
// console.log(container);

// const items = document.querySelectorAll(".item");
// console.log(items);

// const list = document.querySelector("#list"); // array
// console.log(list);

// const items = document.querySelectorAll(".item");
// console.log(items[0]);

// const firstItem = list.querySelector("#list > li:first-child");
// console.log(firstItem);

// const logo = document.querySelector("#logo");
// logo.src = "https://imgd.aeplcdn.com/600x337/n/cw/ec/131825/be-6-exterior-right-front-three-quarter-6.png?isig=0&q=80";
// logo.alt = "this another picture";
// logo.id = "id2";
// logo.width = "200";
// console.log(logo);


// const div2 = document.querySelector(".div2");
// div2.textContent = "Hello IT Step!"
// console.log(div2.textContent);

// div2.style.color = "green";
// div2.style.fontSize = "36px";
// console.log(div2.style);

// div2.classList.add("div3"); // добавляет класс
// div2.classList.remove("div2"); // удаляет класс
// div2.classList.toggle("div1"); // переключатель - если есть заберёт, если нет - добавит
// div2.classList.replace("div1", "newClass"); //перезаписование класса


// const title = document.createElement("h1");
// const paragraph = document.createElement("p");
// const btn = document.createElement("button");

// title.textContent = "Hello";
// paragraph.textContent = "description";
// btn.textContent = "Click me!";

// btn.classList.add("btn");

// // const sec = document.querySelector("#sec");
// // console.log(sec);
// const section = document.createElement('section');
// section.append(title, paragraph, btn);


// insertAdjacentHTML
// Схема позиций для insertAdjacentHTML
    // <!-- beforebegin -->
    //     <div class="container">
    // <!-- afterbegin -->
    //     содержимое
    // <!-- beforeend -->
    //     </div>
    // <!-- afterend -->
// logo.insertAdjacentElement("afterend", section);
// sec.insertAdjacentHTML("afterbegin", "<h1>Ahoj</h1>");



// task 3 Создать список
// Создай через JavaScript ul с 5 элементами li (текст: "Элемент 1", "Элемент 2" и т.д.)

// const list = document.createElement("ul");

// for(let i=1; i<=5; i++){ 
//     const item = document.createElement("li");
//     item.textContent = `Element ${i}`;
//     list.append(item);
// }

// document.body.appendChild(list);



// Задание 5: Удаление элементов
//         <ul id="list">
//         <li>Элемент 1</li>
//         <li class="remove-me">Элемент 2</li>
//         <li>Элемент 3</li>
//         <li class="remove-me">Элемент 4</li>
//         <li>Элемент 5</li>
//         </ul>

//     Удали через JavaScript:
//        - Все элементы с классом "remove-me"
//        - Первый элемент списка

// const rems = document.querySelectorAll(".remove-me");
// // console.log(rem);
// // rems[0].remove();
// rems.forEach(item => item.remove());

// const list  = document.querySelector("#list");
// // console.log(list);
// list.firstElementChild.remove();


// Задание 7: Создать таблицу
// Создай через JavaScript таблицу 3x3:
// <table>
//   <tr>
//     <td>1</td>
//     <td>2</td>
//     <td>3</td>
//   </tr>
//   <tr>
//     <td>4</td>
//     <td>5</td>
//     <td>6</td>
//   </tr>
//   <tr>
//     <td>7</td>
//     <td>8</td>
//     <td>9</td>
//   </tr>
// </table>

// const table = document.createElement('table');
// let count = 1;
// for (let i=1; i<=3; i++){
//     const tr = document.createElement('tr');
//     for (let j=1; j<=3; j++){
//         const td = document.createElement('td');
//         td.textContent = count;
//         count ++;
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// document.body.appendChild(table);



// Задание 10: Создать карточки товаров
// Создай через JavaScript 3 карточки товаров со следующей структурой:
// <div class="product">
//   <img src="product1.jpg" alt="Товар 1">
//   <h3>Товар 1</h3>
//   <p class="price">1000 крон</p>
// </div>

// Данные товаров:
// Товар 1, product1.jpg, 1000 крон
// Товар 2, product2.jpg, 2000 крон
// Товар 3, product3.jpg, 3000 крон


const products = [
    {id:1, name:"Товар 1", img:"product1.jpg", price: "1000 cz" }, 
    {id:2, name:"Товар 2", img:"product2.jpg", price: "1000 cz" }, 
    {id:3, name:"Товар 3", img:"product3.jpg", price: "1000 cz" }
]

products.forEach(product => {const div = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
h3.textContent = product.name;
img.textContent = product.img;
div.append(img, h3);
document.body.appendChild(div)
})

