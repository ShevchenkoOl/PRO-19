import { addTodo, deleteTodo } from './logic';
import { renderTodoList } from './render';
import './style.css';



document.querySelector('#app').innerHTML = `
  <div>
    <h1> To Do List </h1>
    <input id="input" type="text" placeholder="Введите задачу...." >
    <button id="addBtn">Добавить</button>
  </div>
  <ul id="list"></ul>
`;


const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");


addBtn.addEventListener("click", (event) => {
  const textInput = input.value;

  if(textInput){
  addTodo(textInput);
  renderTodoList();
  input.value = '';

  };
});



list.addEventListener("click", (event) => {
  //  console.log(event.target.id);
  if(event.target.classList.contains('del')){
      const id = event.target.id;

      deleteTodo(id);
      renderTodoList();
  }
})