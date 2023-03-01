import { 
    addProject,
    getTodoBase, 
    getProject, 
    addTodoProject, 
    removeTodo, 
    removeProject } from "./storage";

export class Todo{
  constructor(title, description, priority, project='base'){
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  createProject(newName){
    if((this.project !== 'base') || (!newName)){
      addProject(this.project);
    } else {
      addProject(newName);
    }
  }

  createTodo(projectName,data){
    
  }

  readProject(projectName){
    if(this.project === 'base'){
      return getProject('base')
    } else if (projectName){
      return getProject(projectName)
    }
  }

  readTodoBase(){
    return getTodoBase();
  }

  deleteProject(projectName){
    if(this.project !== 'base'){
      removeProject(projectName)
    }
  }


}