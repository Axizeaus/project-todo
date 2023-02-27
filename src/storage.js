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
  // Turn the data into string and return the data.
  if (typeof data != "string"){
    data = JSON.stringify(data);
  }
  return data
}

function getFromLocal(key){
  // Get the item from localStorage and parse then return it.
  return JSON.parse(localStorage.getItem(key));
}

export function addProject(projectName){
  // Add the project to the localStorage with value being an empty array.
  localStorage.setItem(projectName, addToLocal([]))
}

export function getProject(projectName){
  // Get the project from the localStorage. Return null if the project isn't there.
  return getFromLocal(projectName);
}

export function getTodoBase(){
  // Get the base project, if it doesn't exit, create one.
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
}

export function addTodoProject(projectName,data){
  // Add data to the projectName
  let project = getProject(projectName);
  if (projectName === 'base') {
    project = getTodoBase(projectName);
  }
  project.push(data);
  updateTodo(projectName, project);
}

export function removeProject(projectName){
  // Remove the whole project from the local Storage.
  let project = getFromLocal(projectName);
  if (project === null){
    return;
  }
  localStorage.removeItem(projectName);
}

export function removeTodo(projectName, itemIndex){
  // Remove the entry of itemIndex from the project Name
  let project = getFromLocal(projectName);
  project.splice(itemIndex, 1);
  updateTodo(projectName, project);
}

function updateTodo(projectName, newData){
  // Update the localStorage with new Data.
  localStorage.setItem(projectName, addToLocal(newData))
}