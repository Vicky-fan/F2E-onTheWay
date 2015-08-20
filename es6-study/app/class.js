class Point {
	constructor(x, y, name) {
		this.x = x;
		this.y = y;
	}
	toString() {
		console.log( '(' + this.x + ',' + this.y + ')');
	}
}

// Object.assign(Point.prototype, {
// 	getName () {
// 		console.log(this.name);
// 	}
// })

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


let person2 = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('李四');

person2.sayName();

class PointParent {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class ColorPoint extends PointParent {
	constructor(x, y, color) {
		super(x,y);
		this.color = color;
	}
	getColor() {
		console.log(this.color);
	}
}

var color = new ColorPoint(1, 3, 'green');
color.getColor();

console.log(color instanceof ColorPoint);
console.log(color instanceof PointParent);