/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodoProject": () => (/* binding */ addTodoProject),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "getTodoBase": () => (/* binding */ getTodoBase),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
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

function addProject(projectName){
  // Add the project to the localStorage with value being an empty array.
  localStorage.setItem(projectName, addToLocal([]))
}

function getProject(projectName){
  // Get the project from the localStorage. Return null if the project isn't there.
  return getFromLocal(projectName);
}

function getTodoBase(){
  // Get the base project, if it doesn't exit, create one.
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
}

function addTodoProject(projectName,data){
  // Add data to the projectName
  let project = getProject(projectName);
  if (projectName === 'base') {
    project = getTodoBase(projectName);
  }
  project.push(data);
  updateTodo(projectName, project);
}

function removeProject(projectName){
  // Remove the whole project from the local Storage.
  let project = getFromLocal(projectName);
  if (project === null){
    return;
  }
  localStorage.removeItem(projectName);
}

function removeTodo(projectName, itemIndex){
  // Remove the entry of itemIndex from the project Name
  let project = getFromLocal(projectName);
  project.splice(itemIndex, 1);
  updateTodo(projectName, project);
}

function updateTodo(projectName, newData){
  // Update the localStorage with new Data.
  localStorage.setItem(projectName, addToLocal(newData))
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


class Todo{
  constructor(title, description, priority, project='base'){
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  createProject(newName){
    if((this.project !== 'base') || (!newName)){
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addProject)(this.project);
    } else {
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addProject)(newName);
    }
  }

  createTodo(projectName,data){
    
  }

  readProject(projectName){
    if(this.project === 'base'){
      return (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProject)('base')
    } else if (projectName){
      return (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectName)
    }
  }

  readTodoBase(){
    return (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getTodoBase)();
  }

  deleteProject(projectName){
    if(this.project !== 'base'){
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectName)
    }
  }


}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo('learning syntex', 'a project for coding practice', 'max', 'coding');
let todo2 = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo('sleeping', 'a process to recharge', 'max');

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRXFDOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG9EQUFVO0FBQ2hCLE1BQU07QUFDTixNQUFNLG9EQUFVO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG9EQUFVO0FBQ3ZCLE1BQU07QUFDTixhQUFhLG9EQUFVO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFEQUFXO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHVEQUFhO0FBQ25CO0FBQ0E7OztBQUdBOzs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qjs7QUFFOUIsZUFBZSx1Q0FBSTtBQUNuQixnQkFBZ0IsdUNBQUk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlyc3QgaXMgZGVmYXVsdCBwcm9qZWN0IGZvciB0b2RvcyB3aXRob3V0IHBhcmVudCBwcm9qZWN0cy5cbi8vIGFuZCB1c2luZyBqc29uLCB0aGUgc3RydWN0dXJlIGNvdWxkIGJlIG5pY2UgaWYgaXQncyBzb21ldGhpbmcgbGlrZSwgXG4vLyB7ZGVmYXVsdCA6IHtcbi8vICAgdG9kb3Ncbi8vIH19XG4vLyB7cHJvamVjdDEgOiB7XG4vLyAgIHByb2plY3QxIHRvZG9zIGdvZXMgaGVyZS5cbi8vIH19XG4vLyBpZiBtb3ZpbmcgZnJvbSBvbmUgcHJvamVjdCB0byBhbm90aGVyLCBjb3B5IHRoZSBrZXkgdG8gYW5vdGhlciBhbmQgZGVsZXRlIHRoZSBvbmUgZnJvbSBoZXJlLlxuXG5mdW5jdGlvbiBhZGRUb0xvY2FsKGRhdGEpe1xuICAvLyBUdXJuIHRoZSBkYXRhIGludG8gc3RyaW5nIGFuZCByZXR1cm4gdGhlIGRhdGEuXG4gIGlmICh0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiKXtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKGtleSl7XG4gIC8vIEdldCB0aGUgaXRlbSBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgcGFyc2UgdGhlbiByZXR1cm4gaXQuXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gIC8vIEFkZCB0aGUgcHJvamVjdCB0byB0aGUgbG9jYWxTdG9yYWdlIHdpdGggdmFsdWUgYmVpbmcgYW4gZW1wdHkgYXJyYXkuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBhZGRUb0xvY2FsKFtdKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE5hbWUpe1xuICAvLyBHZXQgdGhlIHByb2plY3QgZnJvbSB0aGUgbG9jYWxTdG9yYWdlLiBSZXR1cm4gbnVsbCBpZiB0aGUgcHJvamVjdCBpc24ndCB0aGVyZS5cbiAgcmV0dXJuIGdldEZyb21Mb2NhbChwcm9qZWN0TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvQmFzZSgpe1xuICAvLyBHZXQgdGhlIGJhc2UgcHJvamVjdCwgaWYgaXQgZG9lc24ndCBleGl0LCBjcmVhdGUgb25lLlxuICBsZXQgYmFzZVByb2plY3QgPSBnZXRGcm9tTG9jYWwoJ2Jhc2UnKTtcbiAgaWYgKGJhc2VQcm9qZWN0ID09PSBudWxsKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFzZScsIGFkZFRvTG9jYWwoW10pKTtcbiAgICBiYXNlUHJvamVjdCA9IGdldEZyb21Mb2NhbCgnYmFzZScpO1xuICB9XG4gIHJldHVybiBiYXNlUHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9Qcm9qZWN0KHByb2plY3ROYW1lLGRhdGEpe1xuICAvLyBBZGQgZGF0YSB0byB0aGUgcHJvamVjdE5hbWVcbiAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgaWYgKHByb2plY3ROYW1lID09PSAnYmFzZScpIHtcbiAgICBwcm9qZWN0ID0gZ2V0VG9kb0Jhc2UocHJvamVjdE5hbWUpO1xuICB9XG4gIHByb2plY3QucHVzaChkYXRhKTtcbiAgdXBkYXRlVG9kbyhwcm9qZWN0TmFtZSwgcHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgLy8gUmVtb3ZlIHRoZSB3aG9sZSBwcm9qZWN0IGZyb20gdGhlIGxvY2FsIFN0b3JhZ2UuXG4gIGxldCBwcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKHByb2plY3ROYW1lKTtcbiAgaWYgKHByb2plY3QgPT09IG51bGwpe1xuICAgIHJldHVybjtcbiAgfVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHByb2plY3ROYW1lLCBpdGVtSW5kZXgpe1xuICAvLyBSZW1vdmUgdGhlIGVudHJ5IG9mIGl0ZW1JbmRleCBmcm9tIHRoZSBwcm9qZWN0IE5hbWVcbiAgbGV0IHByb2plY3QgPSBnZXRGcm9tTG9jYWwocHJvamVjdE5hbWUpO1xuICBwcm9qZWN0LnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICB1cGRhdGVUb2RvKHByb2plY3ROYW1lLCBwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyhwcm9qZWN0TmFtZSwgbmV3RGF0YSl7XG4gIC8vIFVwZGF0ZSB0aGUgbG9jYWxTdG9yYWdlIHdpdGggbmV3IERhdGEuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBhZGRUb0xvY2FsKG5ld0RhdGEpKVxufSIsImltcG9ydCB7IFxuICAgIGFkZFByb2plY3QsXG4gICAgZ2V0VG9kb0Jhc2UsIFxuICAgIGdldFByb2plY3QsIFxuICAgIGFkZFRvZG9Qcm9qZWN0LCBcbiAgICByZW1vdmVUb2RvLCBcbiAgICByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgY2xhc3MgVG9kb3tcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdD0nYmFzZScpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgLy8gdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGNyZWF0ZVByb2plY3QobmV3TmFtZSl7XG4gICAgaWYoKHRoaXMucHJvamVjdCAhPT0gJ2Jhc2UnKSB8fCAoIW5ld05hbWUpKXtcbiAgICAgIGFkZFByb2plY3QodGhpcy5wcm9qZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkUHJvamVjdChuZXdOYW1lKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVUb2RvKHByb2plY3ROYW1lLGRhdGEpe1xuICAgIFxuICB9XG5cbiAgcmVhZFByb2plY3QocHJvamVjdE5hbWUpe1xuICAgIGlmKHRoaXMucHJvamVjdCA9PT0gJ2Jhc2UnKXtcbiAgICAgIHJldHVybiBnZXRQcm9qZWN0KCdiYXNlJylcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lKXtcbiAgICAgIHJldHVybiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIH1cbiAgfVxuXG4gIHJlYWRUb2RvQmFzZSgpe1xuICAgIHJldHVybiBnZXRUb2RvQmFzZSgpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgaWYodGhpcy5wcm9qZWN0ICE9PSAnYmFzZScpe1xuICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICB9XG4gIH1cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5sZXQgdG9kbyA9IG5ldyBUb2RvKCdsZWFybmluZyBzeW50ZXgnLCAnYSBwcm9qZWN0IGZvciBjb2RpbmcgcHJhY3RpY2UnLCAnbWF4JywgJ2NvZGluZycpO1xubGV0IHRvZG8yID0gbmV3IFRvZG8oJ3NsZWVwaW5nJywgJ2EgcHJvY2VzcyB0byByZWNoYXJnZScsICdtYXgnKTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG50b2RvLmNyZWF0ZVByb2plY3QoKTtcbnRvZG8yLmNyZWF0ZVByb2plY3QoKTtcbmNvbnNvbGUubG9nKHRvZG8ucmVhZFByb2plY3QoKSk7XG5jb25zb2xlLmxvZyh0b2RvMi5yZWFkUHJvamVjdCgpKTtcbmNvbnNvbGUubG9nKHRvZG8ucmVhZFRvZG9CYXNlKCkpO1xuY29uc29sZS5sb2codG9kbzIucmVhZFRvZG9CYXNlKCkpO1xudG9kby5kZWxldGVQcm9qZWN0KCdjb2RpbmcnKTtcbnRvZG8yLmRlbGV0ZVByb2plY3QoJ2Jhc2UnKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==