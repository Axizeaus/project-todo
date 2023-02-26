import { Todo } from "./todo";
import { addTodoBase, addProject, addTodoProject } from "./storage";

const todo = new Todo('to eat', 'eating', 'max');
const todo2 = new Todo('to sleep', 'sleeping', 'max');
localStorage.clear();
addTodoBase(todo);
addTodoBase(todo2);
addProject('coding');
addTodoProject('coding','crying');
addTodoProject('coding','sleeping');
addTodoProject('coding','running away');
addTodoProject('coding','hiding');


console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);