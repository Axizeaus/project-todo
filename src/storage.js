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

export function addTodoBase(data){
  let baseProject = getTodoBase();
  baseProject.push(data);
  localStorage.setItem('base', addToLocal(baseProject))
  console.log(baseProject.length);
}

export function addProject(projectName){
  localStorage.setItem(projectName, addToLocal([]))
}

export function addTodoProject(projectName,data){
  let project = getProject(projectName);
  project.push(data);
  localStorage.setItem(projectName, addToLocal(project));
  console.log(project);
}

export function getProject(projectName){
  let project = getFromLocal(projectName);
  return project;
}

export function getTodoBase(){
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
}