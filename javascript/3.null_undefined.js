/**
 * null 和 undefined 的区别
 * undefined 表示缺少值,就是此处应该有值，默认转为NaN
 * null 表示没有对象,转为数值为 0,常用来表示函数
 */

// 当声明的变量未被初始化时，变量的默认值为undefined
var a;        //  1.变量被声明，未赋值 就等于undefined
console.log(a);    
function fn(params) {
    console.log(params)
}
fn() //  2.调用函数时，应该被提供的参数没有提供,该参数等于undefined

var obj = { name: 'txm' }
console.log(obj.age)   // 3.对象没有赋值的属性，该属性的值为 undefined

function fn2(){}
console.log(fn2())    // 4.当函数没有返回值时，默认返回undefined 

console.log(null == undefined) // true 两者会转换为布尔值false
console.log(typeof null)       // "object"
console.log(typeof undefined)  // "undefined"
console.log(null === undefined)// false 类型不一样


// null 常用来表示函数企图返回一个不存在的对象
function fn3(params) {
    return params
}

console.log(fn3(null)) // 1.作为函数的参数，表示该函数的参数不是一个对象

Object.getPrototypeOf(Object.prototype)  // 2. 作为对象原型链上的终点

console.log('*******************')
/**
 * 题目1
 */

 var one;
 var two = null;
 console.log( one==two, one === two);  // true, false