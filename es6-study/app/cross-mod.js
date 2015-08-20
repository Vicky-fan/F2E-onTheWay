// import * as constants from './constants';
// console.log(constants.A);
// console.log(constants.B); 

import {A,C,B} from './constants';
console.log(A);
console.log(C);
console.log(B);

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
var a =  5;
var b = 10;
function tag(s, v1, v2) {
	console.log(s[0]);
	console.log(s[1]);
	console.log(v1);
	console.log(v2);

	return 'ok';
}
tag`hello ${a + b} world ${a * b}`;

console.log(String.raw`hi \n${2+3}`);

console.log(String.raw({raw: 'test'}, 0, 1, 2));
console.log(/^\u{3}$/.test('uuu'))
