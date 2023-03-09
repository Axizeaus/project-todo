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

export function createTodo(data){
  console.log(data);
}