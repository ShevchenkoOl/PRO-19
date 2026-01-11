import { addTodo, deleteTodo, todos, updateTodo } from './logic';
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


addBtn.addEventListener("click", () => {
  const textInput = input.value;

  if(editId !== null){
    updateTodo(editId, textInput);
    editId = null;
  } else {
    addTodo(textInput);
  }

renderTodoList();
addBtn.textContent = "Добавить"
input.value = '';

  // if(textInput){
  // addTodo(textInput);
  // renderTodoList();
  // input.value = '';
  // };
});

let editId = null;

list.addEventListener("click", (event) => {
  const id = event.target.id;

  if(event.target.classList.contains('edit')){
    const findId = todos.find(el => el.id === id);
    if(findId){
      input.value = findId.text;
      addBtn.textContent = "Сохранить";
      input.focus();
      editId = id;
    }

  } else if (event.target.classList.contains('del')){
      deleteTodo(id);
      renderTodoList();
  };

  //  console.log(event.target.id);
  // if(event.target.classList.contains('del')){
  //     const id = event.target.id;

  //     deleteTodo(id);
  //     renderTodoList();
  // }
})