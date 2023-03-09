import { createTodo } from "./storage";

class Todo{
  constructor(title, description, list='base'){
    this.title = title;
    this.description = description;
    this.list = list;
  }

  createTodo(){
    createTodo(this);
  }

  readTodo(){

  }

  updateTodo(){

  }

  deleteTodo(){

  }
  
}