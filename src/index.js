import { Todo } from "./todo";
import { add_todo_base } from "./storage";

const todo = new Todo('to eat', 'eating', 'max');
const todo2 = new Todo('to sleep', 'sleeping', 'max');
localStorage.clear();
add_todo_base(todo);
add_todo_base(todo2);
console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);