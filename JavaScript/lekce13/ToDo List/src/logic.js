import { nanoid } from 'nanoid';

export let todos = [];

export function addTodo(text){
    const newTodo = {
        id: nanoid(3),
        text: text, 
        complied: false
    };

    todos.push(newTodo);
    console.log("Список задач", todos);
};


// Delete
export function deleteTodo(id){

    todos = todos.filter(el => el.id !== id);
    console.log(todos);
}