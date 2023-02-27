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
/* harmony export */   "addTodoBase": () => (/* binding */ addTodoBase),
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
  if (typeof data != "string"){
    data = JSON.stringify(data);
  }
  return data
}

function getFromLocal(key){
  return JSON.parse(localStorage.getItem(key));
}

function addProject(projectName){
  localStorage.setItem(projectName, addToLocal([]))
}

function getProject(projectName){
  return getFromLocal(projectName);
}

function addTodoBase(data){
  let baseProject = getTodoBase();
  baseProject.push(data);
  localStorage.setItem('base', addToLocal(baseProject))
  console.log(baseProject.length);
}

function getTodoBase(){
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
}

function addTodoProject(projectName,data){
  let project = getProject(projectName);
  if (projectName === 'base') {
    project = getTodoBase(projectName);
  }
  project.push(data);
  updateTodo(projectName, project);
}

function removeProject(projectName){
  let project = getFromLocal(projectName);
  if (project === null){
    return;
  }
  localStorage.removeItem(projectName);
}

function removeTodo(projectName, itemIndex){
  let project = getFromLocal(projectName);
  project.splice(itemIndex, 1);
  updateTodo(projectName, project);
}

function updateTodo(projectName, newData){
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
class Todo{
  constructor(title, description, priority){
    this.title = title;
    this.description = description;
    // this.dueDate = dueDate;
    this.priority = priority;
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo('to eat', 'eating', 'max');
const todo2 = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo('to sleep', 'sleeping', 'max');
localStorage.clear();
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('base',todo);
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('base',todo2);
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addProject)('coding');
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','crying');
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','sleeping');
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','running away');
console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','hiding');console.log(localStorage);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeTodo)('coding', 0);console.log(localStorage);
// localStorage.clear();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ29EOztBQUVsRixpQkFBaUIsdUNBQUk7QUFDckIsa0JBQWtCLHVDQUFJO0FBQ3RCO0FBQ0Esd0RBQWM7QUFDZDtBQUNBLHdEQUFjO0FBQ2Q7QUFDQSxvREFBVTtBQUNWO0FBQ0Esd0RBQWM7QUFDZDtBQUNBLHdEQUFjO0FBQ2Q7QUFDQSx3REFBYztBQUNkO0FBQ0Esd0RBQWMsb0JBQW9CO0FBQ2xDLG9EQUFVLGNBQWM7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlyc3QgaXMgZGVmYXVsdCBwcm9qZWN0IGZvciB0b2RvcyB3aXRob3V0IHBhcmVudCBwcm9qZWN0cy5cbi8vIGFuZCB1c2luZyBqc29uLCB0aGUgc3RydWN0dXJlIGNvdWxkIGJlIG5pY2UgaWYgaXQncyBzb21ldGhpbmcgbGlrZSwgXG4vLyB7ZGVmYXVsdCA6IHtcbi8vICAgdG9kb3Ncbi8vIH19XG4vLyB7cHJvamVjdDEgOiB7XG4vLyAgIHByb2plY3QxIHRvZG9zIGdvZXMgaGVyZS5cbi8vIH19XG4vLyBpZiBtb3ZpbmcgZnJvbSBvbmUgcHJvamVjdCB0byBhbm90aGVyLCBjb3B5IHRoZSBrZXkgdG8gYW5vdGhlciBhbmQgZGVsZXRlIHRoZSBvbmUgZnJvbSBoZXJlLlxuXG5mdW5jdGlvbiBhZGRUb0xvY2FsKGRhdGEpe1xuICBpZiAodHlwZW9mIGRhdGEgIT0gXCJzdHJpbmdcIil7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIGdldEZyb21Mb2NhbChrZXkpe1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpe1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgYWRkVG9Mb2NhbChbXSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgcmV0dXJuIGdldEZyb21Mb2NhbChwcm9qZWN0TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvQmFzZShkYXRhKXtcbiAgbGV0IGJhc2VQcm9qZWN0ID0gZ2V0VG9kb0Jhc2UoKTtcbiAgYmFzZVByb2plY3QucHVzaChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jhc2UnLCBhZGRUb0xvY2FsKGJhc2VQcm9qZWN0KSlcbiAgY29uc29sZS5sb2coYmFzZVByb2plY3QubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9CYXNlKCl7XG4gIGxldCBiYXNlUHJvamVjdCA9IGdldEZyb21Mb2NhbCgnYmFzZScpO1xuICBpZiAoYmFzZVByb2plY3QgPT09IG51bGwpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYXNlJywgYWRkVG9Mb2NhbChbXSkpO1xuICAgIGJhc2VQcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKCdiYXNlJyk7XG4gIH1cbiAgcmV0dXJuIGJhc2VQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb1Byb2plY3QocHJvamVjdE5hbWUsZGF0YSl7XG4gIGxldCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gJ2Jhc2UnKSB7XG4gICAgcHJvamVjdCA9IGdldFRvZG9CYXNlKHByb2plY3ROYW1lKTtcbiAgfVxuICBwcm9qZWN0LnB1c2goZGF0YSk7XG4gIHVwZGF0ZVRvZG8ocHJvamVjdE5hbWUsIHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gIGxldCBwcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKHByb2plY3ROYW1lKTtcbiAgaWYgKHByb2plY3QgPT09IG51bGwpe1xuICAgIHJldHVybjtcbiAgfVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKHByb2plY3ROYW1lLCBpdGVtSW5kZXgpe1xuICBsZXQgcHJvamVjdCA9IGdldEZyb21Mb2NhbChwcm9qZWN0TmFtZSk7XG4gIHByb2plY3Quc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gIHVwZGF0ZVRvZG8ocHJvamVjdE5hbWUsIHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvKHByb2plY3ROYW1lLCBuZXdEYXRhKXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIGFkZFRvTG9jYWwobmV3RGF0YSkpXG59IiwiZXhwb3J0IGNsYXNzIFRvZG97XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgLy8gdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBhZGRUb2RvUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVG9kbyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCd0byBlYXQnLCAnZWF0aW5nJywgJ21heCcpO1xuY29uc3QgdG9kbzIgPSBuZXcgVG9kbygndG8gc2xlZXAnLCAnc2xlZXBpbmcnLCAnbWF4Jyk7XG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmFkZFRvZG9Qcm9qZWN0KCdiYXNlJyx0b2RvKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5hZGRUb2RvUHJvamVjdCgnYmFzZScsdG9kbzIpO1xuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbmFkZFByb2plY3QoJ2NvZGluZycpO1xuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbmFkZFRvZG9Qcm9qZWN0KCdjb2RpbmcnLCdjcnlpbmcnKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywnc2xlZXBpbmcnKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywncnVubmluZyBhd2F5Jyk7XG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuYWRkVG9kb1Byb2plY3QoJ2NvZGluZycsJ2hpZGluZycpO2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5yZW1vdmVUb2RvKCdjb2RpbmcnLCAwKTtjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=