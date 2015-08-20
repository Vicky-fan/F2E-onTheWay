/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	// function foo() {
	// 	var args = Array.from(arguments);
	// 	console.log(args);
	// }
	// foo('a', 'b', 'c');

	// console.log(Array.from({ 0: "a", 1: "b", 2: "c", length: 3 }));

	// console.log(Array.of(3, 4, 5));

	// var found = [1, 4, -3, -4].find((n) => n < 0);
	// console.log('found:', found);

	// console.log(['a', 'b', 'c'].fill(7));
	// console.log(new Array(3).fill(7));
	// console.log(['a', 'b', 'c'].fill(7, 1, 2));

	// for(let index of ['a', 'b'].keys()) {
	// 	console.log(index);
	// }

	// for (let [index, elem] of ['a', 'b'].entries()) {
	//   console.log(index, elem);
	// }

	// var a1 = [1, 2, 3, 4];
	// var a2 = [for (i of a1) i * 2];
	// console.log(a2);
	// // [1, 2, 3].includes(2);

/***/ }
/******/ ]);