import { todos } from "./logic";

export function renderTodoList(){
    const list = document.querySelector("#list");
    list.innerHTML = '';

    todos.forEach((todo) => {
            const li = document.createElement("li");

            li.innerHTML = `
            <span>${todo.text}</span>
            <button class="del" id="${todo.id}">Удалить</button>
            <button class="edit" id="${todo.id}">Редактировать</button>
            `;

            list.appendChild(li);

    })
}