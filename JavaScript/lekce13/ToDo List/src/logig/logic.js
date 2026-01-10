import "./logic_style.css";

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="title"> To Do List </h1>
    <input id="input" type="text" placeholder="Введите задачу...." >
    <button id="addBtn">Добавить</button>
  </div>
  <ul id="list"></ul>
`;