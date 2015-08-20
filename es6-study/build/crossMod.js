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
/***/ function(module, exports, __webpack_require__) {

	// import * as constants from './constants';
	// console.log(constants.A);
	// console.log(constants.B);

	'use strict';

	var _templateObject = _taggedTemplateLiteral(['hello ', ' world ', ''], ['hello ', ' world ', '']),
	    _templateObject2 = _taggedTemplateLiteral(['hi \n', ''], ['hi \\n', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var _constants = __webpack_require__(1);

	console.log(_constants.A);
	console.log(_constants.C);
	console.log(_constants.B);

	// let [head, ...tail] = [1,2,3,4,5];
	// console.log(tail);

	// let [x, y] = [1, 2, 3];
	// console.log(x,y)

	// let[a, [b], d] = [1, [2, 3], 4];
	// console.log(b)

	// function move ({x=0, y=0} = {}) {
	// 	console.log(x,y);
	// }
	// move({x: 3});
	// move({x: 3, y: 4});
	// move({});
	// move();

	// console.log('\u{41}\u{42}\u{43}')

	// var s = 'hello world!';
	// console.log(s.startsWith('world', 6));
	// console.log(s.endsWith('l',2));
	// console.log(s.includes('l'));
	// console.log(s.repeat(3));

	// 模板字符串
	// var name = 'vicky';
	// document.write(`
	// 	In JavaScript '\n' is a line-feed.
	// 	\`Yo\` World!
	// `);

	// var x = 1;
	// var y = 2;
	// console.log(`${x} + ${y} = ${x+y}`)
	// function fn() {
	// 	return 'hello world!';
	// }
	// console.log(`foo ${fn()} bar`);
	//
	// 标签模板
	var a = 5;
	var b = 10;
	function tag(s, v1, v2) {
		console.log(s[0]);
		console.log(s[1]);
		console.log(v1);
		console.log(v2);

		return 'ok';
	}
	tag(_templateObject, a + b, a * b);

	console.log(String.raw(_templateObject2, 2 + 3));

	console.log(String.raw({ raw: 'test' }, 0, 1, 2));
	console.log(/^\u{3}$/.test('uuu'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var A = 1;
	exports.A = A;
	var B = 2;
	exports.B = B;
	var C = 3;
	exports.C = C;

/***/ }
/******/ ]);