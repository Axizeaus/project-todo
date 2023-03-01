import { Todo } from "./todo";

let todo = new Todo('learning syntex', 'a project for coding practice', 'max', 'coding');
let todo2 = new Todo('sleeping', 'a process to recharge', 'max');

localStorage.clear();
todo.createProject();
todo2.createProject();
console.log(todo.readProject());
console.log(todo2.readProject());
console.log(todo.readTodoBase());
console.log(todo2.readTodoBase());
todo.deleteProject('coding');
todo2.deleteProject('base');
console.log(localStorage);
// localStorage.clear();
