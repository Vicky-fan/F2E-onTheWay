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

	'use strict';

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Point = (function () {
		function Point(x, y, name) {
			_classCallCheck(this, Point);

			this.x = x;
			this.y = y;
		}

		// Object.assign(Point.prototype, {
		// 	getName () {
		// 		console.log(this.name);
		// 	}
		// })

		_createClass(Point, [{
			key: 'toString',
			value: function toString() {
				console.log('(' + this.x + ',' + this.y + ')');
			}
		}]);

		return Point;
	})();

	console.log(typeof Point);
	console.log(Point.prototype.constructor === Point);

	var point1 = new Point(1, 2);
	var point2 = new Point(3, 4);
	// point1.getName();
	point1.toString();
	console.log(point1.hasOwnProperty('x'));
	console.log(point1.hasOwnProperty('y'));
	console.log(point1.hasOwnProperty('toString'));
	console.log(point1.__proto__.hasOwnProperty('toString'));

	console.log(point1.__proto__ === point2.__proto__);

	console.log(Object.keys(Point.prototype));
	console.log(Object.getOwnPropertyNames(Point.prototype));

	console.log(Point.name);

	// let person = new Class {
	// 	constructor(name) {
	// 		this.name = name;
	// 	}
	// 	sayName() {
	// 		console.log(this.name);
	// 	}
	// }('张三');

	// person.sayName();

	// const MyClass = class Me {
	//   getClassName() {
	//     console.log(Me.name);
	//   }
	// };

	// let inst = new MyClass();
	// inst.getClassName();

	var person2 = new ((function () {
		function _class(name) {
			_classCallCheck(this, _class);

			this.name = name;
		}

		_createClass(_class, [{
			key: 'sayName',
			value: function sayName() {
				console.log(this.name);
			}
		}]);

		return _class;
	})())('李四');

	person2.sayName();

	var PointParent = function PointParent(x, y) {
		_classCallCheck(this, PointParent);

		this.x = x;
		this.y = y;
	};

	var ColorPoint = (function (_PointParent) {
		_inherits(ColorPoint, _PointParent);

		function ColorPoint(x, y, color) {
			_classCallCheck(this, ColorPoint);

			_get(Object.getPrototypeOf(ColorPoint.prototype), 'constructor', this).call(this, x, y);
			this.color = color;
		}

		_createClass(ColorPoint, [{
			key: 'getColor',
			value: function getColor() {
				console.log(this.color);
			}
		}]);

		return ColorPoint;
	})(PointParent);

	var color = new ColorPoint(1, 3, 'green');
	color.getColor();

	console.log(color instanceof ColorPoint);
	console.log(color instanceof PointParent);

/***/ }
/******/ ]);