/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module) => {

eval("class View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n\n    this.setupBoard();\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    // install a handler on the `li` elements inside the board.\n    this.$el.on(\"click\", \"li\", ( event => {\n      const $square = $(event.currentTarget);\n      this.makeMove($square);\n    }));\n  }\n\n  makeMove($square) {\n    const pos = $square.data(\"pos\");\n    const currentPlayer = this.game.currentPlayer;\n\n    try {\n      this.game.playMove(pos);\n    } catch (e) {\n      alert(\"This \" + e.msg.toLowerCase());\n      return;\n    }\n\n    $square.addClass(currentPlayer);\n\n    if (this.game.isOver()) {\n      // cleanup click handlers.\n      this.$el.off(\"click\");\n      this.$el.addClass(\"game-over\");\n\n      const winner = this.game.winner();\n      const $figcaption = $(\"<figcaption>\");\n\n      if (winner) {\n        this.$el.addClass(`winner-${winner}`);\n        $figcaption.html(`You win, ${winner}!`);\n      } else {\n        $figcaption.html(\"It's a draw!\");\n      }\n\n      this.$el.append($figcaption);\n    }\n  }\n\n  setupBoard() {\n    const $ul = $(\"<ul>\");\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        let $li = $(\"<li>\");\n        $li.data(\"pos\", [rowIdx, colIdx]);\n\n        $ul.append($li);\n      }\n    }\n\n    this.$el.append($ul);\n  }\n}\n\nmodule.exports = View;\n\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const View = __webpack_require__(/*! ./ttt-view */ \"./src/ttt-view.js\");\n\n$(() => {\n    // Your code here\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;