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
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
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
  project.push(data);
  localStorage.setItem(projectName, addToLocal(project));
  console.log(project);
}

function removeProject(projectName){
  let project = getFromLocal(projectName);
  if (project === null){
    return;
  }
  localStorage.removeItem(projectName);
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
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoBase)(todo);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoBase)(todo2);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addProject)('coding');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','crying');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','sleeping');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','running away');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTodoProject)('coding','hiding');

console.log(localStorage);

(0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeProject)('coding');

console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNxRDs7QUFFbkYsaUJBQWlCLHVDQUFJO0FBQ3JCLGtCQUFrQix1Q0FBSTtBQUN0QjtBQUNBLHFEQUFXO0FBQ1gscURBQVc7QUFDWCxvREFBVTtBQUNWLHdEQUFjO0FBQ2Qsd0RBQWM7QUFDZCx3REFBYztBQUNkLHdEQUFjOztBQUVkOztBQUVBLHVEQUFhOztBQUViO0FBQ0E7QUFDQSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJzdCBpcyBkZWZhdWx0IHByb2plY3QgZm9yIHRvZG9zIHdpdGhvdXQgcGFyZW50IHByb2plY3RzLlxuLy8gYW5kIHVzaW5nIGpzb24sIHRoZSBzdHJ1Y3R1cmUgY291bGQgYmUgbmljZSBpZiBpdCdzIHNvbWV0aGluZyBsaWtlLCBcbi8vIHtkZWZhdWx0IDoge1xuLy8gICB0b2Rvc1xuLy8gfX1cbi8vIHtwcm9qZWN0MSA6IHtcbi8vICAgcHJvamVjdDEgdG9kb3MgZ29lcyBoZXJlLlxuLy8gfX1cbi8vIGlmIG1vdmluZyBmcm9tIG9uZSBwcm9qZWN0IHRvIGFub3RoZXIsIGNvcHkgdGhlIGtleSB0byBhbm90aGVyIGFuZCBkZWxldGUgdGhlIG9uZSBmcm9tIGhlcmUuXG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWwoZGF0YSl7XG4gIGlmICh0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiKXtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKGtleSl7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBhZGRUb0xvY2FsKFtdKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE5hbWUpe1xuICByZXR1cm4gZ2V0RnJvbUxvY2FsKHByb2plY3ROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9CYXNlKGRhdGEpe1xuICBsZXQgYmFzZVByb2plY3QgPSBnZXRUb2RvQmFzZSgpO1xuICBiYXNlUHJvamVjdC5wdXNoKGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFzZScsIGFkZFRvTG9jYWwoYmFzZVByb2plY3QpKVxuICBjb25zb2xlLmxvZyhiYXNlUHJvamVjdC5sZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0Jhc2UoKXtcbiAgbGV0IGJhc2VQcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKCdiYXNlJyk7XG4gIGlmIChiYXNlUHJvamVjdCA9PT0gbnVsbCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jhc2UnLCBhZGRUb0xvY2FsKFtdKSk7XG4gICAgYmFzZVByb2plY3QgPSBnZXRGcm9tTG9jYWwoJ2Jhc2UnKTtcbiAgfVxuICByZXR1cm4gYmFzZVByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvUHJvamVjdChwcm9qZWN0TmFtZSxkYXRhKXtcbiAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgcHJvamVjdC5wdXNoKGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgYWRkVG9Mb2NhbChwcm9qZWN0KSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gIGxldCBwcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKHByb2plY3ROYW1lKTtcbiAgaWYgKHByb2plY3QgPT09IG51bGwpe1xuICAgIHJldHVybjtcbiAgfVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0TmFtZSk7XG59IiwiZXhwb3J0IGNsYXNzIFRvZG97XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgLy8gdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBhZGRUb2RvQmFzZSwgYWRkUHJvamVjdCwgYWRkVG9kb1Byb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHRvZG8gPSBuZXcgVG9kbygndG8gZWF0JywgJ2VhdGluZycsICdtYXgnKTtcbmNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ3RvIHNsZWVwJywgJ3NsZWVwaW5nJywgJ21heCcpO1xubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5hZGRUb2RvQmFzZSh0b2RvKTtcbmFkZFRvZG9CYXNlKHRvZG8yKTtcbmFkZFByb2plY3QoJ2NvZGluZycpO1xuYWRkVG9kb1Byb2plY3QoJ2NvZGluZycsJ2NyeWluZycpO1xuYWRkVG9kb1Byb2plY3QoJ2NvZGluZycsJ3NsZWVwaW5nJyk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywncnVubmluZyBhd2F5Jyk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywnaGlkaW5nJyk7XG5cbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbnJlbW92ZVByb2plY3QoJ2NvZGluZycpO1xuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==