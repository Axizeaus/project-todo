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
/* harmony export */   "getTodoBase": () => (/* binding */ getTodoBase)
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

function addTodoBase(data){
  let baseProject = getTodoBase();
  baseProject.push(data);
  localStorage.setItem('base', addToLocal(baseProject))
  console.log(baseProject.length);
}

function addProject(projectName){
  localStorage.setItem(projectName, addToLocal([]))
}

function addTodoProject(projectName,data){
  let project = getProject(projectName);
  project.push(data);
  localStorage.setItem(projectName, addToLocal(project));
  console.log(project);
}

function getProject(projectName){
  let project = getFromLocal(projectName);
  return project;
}

function getTodoBase(){
  let baseProject = getFromLocal('base');
  if (baseProject === null){
    localStorage.setItem('base', addToLocal([]));
    baseProject = getFromLocal('base');
  }
  return baseProject;
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
// localStorage.clear();
// console.log(localStorage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDc0M7O0FBRXBFLGlCQUFpQix1Q0FBSTtBQUNyQixrQkFBa0IsdUNBQUk7QUFDdEI7QUFDQSxxREFBVztBQUNYLHFEQUFXO0FBQ1gsb0RBQVU7QUFDVix3REFBYztBQUNkLHdEQUFjO0FBQ2Qsd0RBQWM7QUFDZCx3REFBYzs7O0FBR2Q7QUFDQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpcnN0IGlzIGRlZmF1bHQgcHJvamVjdCBmb3IgdG9kb3Mgd2l0aG91dCBwYXJlbnQgcHJvamVjdHMuXG4vLyBhbmQgdXNpbmcganNvbiwgdGhlIHN0cnVjdHVyZSBjb3VsZCBiZSBuaWNlIGlmIGl0J3Mgc29tZXRoaW5nIGxpa2UsIFxuLy8ge2RlZmF1bHQgOiB7XG4vLyAgIHRvZG9zXG4vLyB9fVxuLy8ge3Byb2plY3QxIDoge1xuLy8gICBwcm9qZWN0MSB0b2RvcyBnb2VzIGhlcmUuXG4vLyB9fVxuLy8gaWYgbW92aW5nIGZyb20gb25lIHByb2plY3QgdG8gYW5vdGhlciwgY29weSB0aGUga2V5IHRvIGFub3RoZXIgYW5kIGRlbGV0ZSB0aGUgb25lIGZyb20gaGVyZS5cblxuZnVuY3Rpb24gYWRkVG9Mb2NhbChkYXRhKXtcbiAgaWYgKHR5cGVvZiBkYXRhICE9IFwic3RyaW5nXCIpe1xuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWwoa2V5KXtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvQmFzZShkYXRhKXtcbiAgbGV0IGJhc2VQcm9qZWN0ID0gZ2V0VG9kb0Jhc2UoKTtcbiAgYmFzZVByb2plY3QucHVzaChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jhc2UnLCBhZGRUb0xvY2FsKGJhc2VQcm9qZWN0KSlcbiAgY29uc29sZS5sb2coYmFzZVByb2plY3QubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpe1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgYWRkVG9Mb2NhbChbXSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvUHJvamVjdChwcm9qZWN0TmFtZSxkYXRhKXtcbiAgbGV0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgcHJvamVjdC5wdXNoKGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgYWRkVG9Mb2NhbChwcm9qZWN0KSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSl7XG4gIGxldCBwcm9qZWN0ID0gZ2V0RnJvbUxvY2FsKHByb2plY3ROYW1lKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvQmFzZSgpe1xuICBsZXQgYmFzZVByb2plY3QgPSBnZXRGcm9tTG9jYWwoJ2Jhc2UnKTtcbiAgaWYgKGJhc2VQcm9qZWN0ID09PSBudWxsKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFzZScsIGFkZFRvTG9jYWwoW10pKTtcbiAgICBiYXNlUHJvamVjdCA9IGdldEZyb21Mb2NhbCgnYmFzZScpO1xuICB9XG4gIHJldHVybiBiYXNlUHJvamVjdDtcbn0iLCJleHBvcnQgY2xhc3MgVG9kb3tcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAvLyB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGFkZFRvZG9CYXNlLCBhZGRQcm9qZWN0LCBhZGRUb2RvUHJvamVjdCB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCd0byBlYXQnLCAnZWF0aW5nJywgJ21heCcpO1xuY29uc3QgdG9kbzIgPSBuZXcgVG9kbygndG8gc2xlZXAnLCAnc2xlZXBpbmcnLCAnbWF4Jyk7XG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmFkZFRvZG9CYXNlKHRvZG8pO1xuYWRkVG9kb0Jhc2UodG9kbzIpO1xuYWRkUHJvamVjdCgnY29kaW5nJyk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywnY3J5aW5nJyk7XG5hZGRUb2RvUHJvamVjdCgnY29kaW5nJywnc2xlZXBpbmcnKTtcbmFkZFRvZG9Qcm9qZWN0KCdjb2RpbmcnLCdydW5uaW5nIGF3YXknKTtcbmFkZFRvZG9Qcm9qZWN0KCdjb2RpbmcnLCdoaWRpbmcnKTtcblxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==