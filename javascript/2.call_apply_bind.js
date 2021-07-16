var name = 'window'

var sayName = function (params) {
    console.log('my name is:' + this.name + ', my params is ' + params)
}

sayName('window param')

var callObj = { name: 'call' };
sayName.call(callObj, 'call param');

var applyObj = { name: 'apply' };
sayName.apply(applyObj, ['apply param'])

var bindObj = { name: 'bind' };
var bindFn = sayName.bind(bindObj, 'bind param');
bindFn();

console.log('********call/apply/bind 的区别*************')
/**
 * call/apply/bind 的区别
 */

// 三个函数作用都是将函数绑定到上下文中，修改this的执行，不同在于语法不同。
// call 接受多个参数列表
// apply 接受一个包含多数参数的数组
// bind() 创建新的函数，在bind()被调用时，新函数this被指定为bind的第一个参数，其余参数作为新参被调用
console.log('********编程题1：封装函数f，使f的this指向指定的对象*************')
/**
 * 编程题1：封装函数f，使f的this指向指定的对象
 */

function bindThis(f, oTarget) {
    //bind 实现
    return f.bind(oTarget)

    // call 实现
    //  return function(x,y,z){
    //     return f.call(oTarget,x,y,z) 
    //  }

    // apply 实现
    // arguments 是传递给函数的参数的类数组对象
    // return function(){
    //     return f.apply(oTarget,arguments)
    // }
}


var r = bindThis(function (a, b) {
    return this.test + a + b
}, { test: 2 })(2, 3)
console.log('******** 编程题2*************')
/**
 * 编程题2： 
 * 实现函数 callIt，调用之后满足如下条件
 * 1、返回的结果为调用 fn 之后的结果
 * 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 */

function callIt(fn) {
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    let result = fn.apply(null, args)
    return result
}

function testCallIt () { 
    var a = 1,
        b = 2,
        c = 3; 
    var test = function (first, second, third) { 
        return first === a && second === b && third === c; 
    }; 
    return callIt(test, a, b, c);
 }
 console.log(testCallIt()) // true

 /**
 * 编程题3： 
 *  将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
 * 输入：
 *   alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
 * 输出：
 *   Yo, Rebecca!
 */
function alterContext(fn, obj) {
    return fn.call(obj)
}
