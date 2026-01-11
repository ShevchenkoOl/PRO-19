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

//update

export function updateTodo(id, text){
    const findId = todos.find(el => el.id === id);

    findId.text = text;

}