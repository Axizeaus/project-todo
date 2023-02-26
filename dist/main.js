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
/* harmony export */   "add_todo_base": () => (/* binding */ add_todo_base)
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

function add_todo_base(data){
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
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.add_todo_base)(todo);
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.add_todo_base)(todo2);
console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1k7O0FBRTFDLGlCQUFpQix1Q0FBSTtBQUNyQixrQkFBa0IsdUNBQUk7QUFDdEI7QUFDQSx1REFBYTtBQUNiLHVEQUFhO0FBQ2I7QUFDQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpcnN0IGlzIGRlZmF1bHQgcHJvamVjdCBmb3IgdG9kb3Mgd2l0aG91dCBwYXJlbnQgcHJvamVjdHMuXG4vLyBhbmQgdXNpbmcganNvbiwgdGhlIHN0cnVjdHVyZSBjb3VsZCBiZSBuaWNlIGlmIGl0J3Mgc29tZXRoaW5nIGxpa2UsIFxuLy8ge2RlZmF1bHQgOiB7XG4vLyAgIHRvZG9zXG4vLyB9fVxuLy8ge3Byb2plY3QxIDoge1xuLy8gICBwcm9qZWN0MSB0b2RvcyBnb2VzIGhlcmUuXG4vLyB9fVxuLy8gaWYgbW92aW5nIGZyb20gb25lIHByb2plY3QgdG8gYW5vdGhlciwgY29weSB0aGUga2V5IHRvIGFub3RoZXIgYW5kIGRlbGV0ZSB0aGUgb25lIGZyb20gaGVyZS5cblxuZnVuY3Rpb24gYWRkVG9Mb2NhbChkYXRhKXtcblxuICBpZiAodHlwZW9mIGRhdGEgIT0gXCJzdHJpbmdcIil7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsKGtleSl7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkX3RvZG9fYmFzZShkYXRhKXtcbiAgbGV0IGJhc2VQcm9qZWN0ID0gZ2V0VG9kb0Jhc2UoKTtcbiAgYmFzZVByb2plY3QucHVzaChkYXRhKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jhc2UnLCBhZGRUb0xvY2FsKGJhc2VQcm9qZWN0KSlcbiAgY29uc29sZS5sb2coYmFzZVByb2plY3QubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb0Jhc2UoKXtcblxuICBsZXQgYmFzZVByb2plY3QgPSBnZXRGcm9tTG9jYWwoJ2Jhc2UnKTtcbiAgaWYgKGJhc2VQcm9qZWN0ID09PSBudWxsKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFzZScsIGFkZFRvTG9jYWwoW10pKTtcbiAgICBiYXNlUHJvamVjdCA9IGdldEZyb21Mb2NhbCgnYmFzZScpO1xuICB9XG4gIHJldHVybiBiYXNlUHJvamVjdDtcbn1cbiIsImV4cG9ydCBjbGFzcyBUb2Rve1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KXtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIC8vIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgYWRkX3RvZG9fYmFzZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCd0byBlYXQnLCAnZWF0aW5nJywgJ21heCcpO1xuY29uc3QgdG9kbzIgPSBuZXcgVG9kbygndG8gc2xlZXAnLCAnc2xlZXBpbmcnLCAnbWF4Jyk7XG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmFkZF90b2RvX2Jhc2UodG9kbyk7XG5hZGRfdG9kb19iYXNlKHRvZG8yKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9