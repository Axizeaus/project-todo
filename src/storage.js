// first is default project for todos without parent projects.
// and using json, the structure could be nice if it's something like, 
// {default : {
//   todos
// }}
// {project1 : {
//   project1 todos goes here.
// }}
// if moving from one project to another, copy the key to another and delete the one from here.

function addToLocal(data){
  if (typeof data != "string"){
    data = JSON.stringify(data);
  }
  return data
}

function getFromLocal(key){
  return JSON.parse(localStorage.getItem(key));
}

export function addProject(projectName){
  localStorage.setItem(projectName, addToLocal([]))
}

export function getProject(projectName){
  return getFromLocal(projectName);
}

export function addTodoBase(data){
  let baseProject = getTodoBase();
  baseProject.push(data);
  localStorage.setItem('base', addToLocal(baseProject))
  console.log(baseProject.length);
}

export function getTodoBase(){
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
}

export function addTodoProject(projectName,data){
  let project = getProject(projectName);
  if (projectName === 'base') {
    project = getTodoBase(projectName);
  }
  project.push(data);
  updateTodo(projectName, project);
}

export function removeProject(projectName){
  let project = getFromLocal(projectName);
  if (project === null){
    return;
  }
  localStorage.removeItem(projectName);
}

export function removeTodo(projectName, itemIndex){
  let project = getFromLocal(projectName);
  project.splice(itemIndex, 1);
  updateTodo(projectName, project);
}

function updateTodo(projectName, newData){
  localStorage.setItem(projectName, addToLocal(newData))
}