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

	// /*   demo 1 */
	// {
	// 	let a = 10;
	// 	var b = 1;
	// }
	// // console.log(a);
	// console.log(b);

	// /*   demo 2 */
	// var a = [];
	// for (var i = 0; i < 10; i++) {
	// 	a[i] = function () {
	// 		console.log(i);
	// 	};
	// }
	// console.log(a[6]())

	// var a = [];
	// for (let i = 0; i < 10; i++) {
	//   a[i] = function () {
	//     console.log(i);
	//   };
	// }
	// a[6]();

	// /*   demo 3 */
	// function do_something0 () {
	// 	console.log(foo);
	// 	var foo = 2;
	// }
	// do_something0();

	// function do_something () {
	// 	console.log(foo);
	// 	let foo = 2;
	// }
	// do_something();

	//    demo 4
	//  if (1) {
	//  	console.log(typeof x);
	//  	let x;
	//  }

	// /*   demo 5 */
	//  if (true) {
	//  	tmp = 'abc';
	//  	console.log(tmp); // error

	//  	let tmp;
	//  	console.log(tmp); // undefined

	//  	tmp = 123;
	//  	console.log(tmp); // 123

	//  };

	//  /* demo 6 */
	//  function f() {
	//  	console.log('I am outside!');
	//  }
	//  (function () {
	//  	if (false) {
	//  		function f() {
	//  			console.log('I am inside!');
	//  		}
	//  	}
	//  	f(); // I am outside
	//  }());

	//   /* demo 7 */
	//   const PI = 3.1415;
	//   // console.log(PI);

	//   PI = 3;
	//   console.log(PI);

/***/ }
/******/ ]);