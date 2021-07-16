/** 1.call 和 apply的区别是什么，哪个性能更好一些？**/

// fn.call(obj,10,20,30)
// fn.apply(obj,[10,20,30])

/*   答：call 和 apply 都是原型function上的方法,每个函数作为function类的实例，都可以调取原型上call和apply上的方法
 *    都是用来改变函数中this的指向，区别就是函数传递参数不同，call是一个一个传参，apply接受数组形式的参数.
 *   call的性能要比apply好那么一些（尤其是传递给函数的参数超过三个的时候），所以后期开发的时候，可以使用call多一些
 */

//  let arr = [10, 20, 30],
//     obj = {};
//     function fn(x, y, z) {}
//     fn.apply(obj,arr); //=> x=10 y=20 z=30
//     fn.call(obj,arr);  //=? [10,20,30] y=z=undefined
//     fn.call(obj,...arr)
// console.time 可以测试出一段程序的执行时间

/** 2.编写一条正则，用来验证此规则：1个6~16位的字符串，必须同时包含有大小写字母和数字**/

/** 3.英文字母汉字组成的字符串，用正则给英文单词前后加空格**/

let str = "no作弄jj，can花季护航",
    reg = /\b[a-z]+\b/ig;
str = str.replace(reg, value=>{
    return  " " + value + " "
}).trim();
console.log(str)

/** 4.实现 (5).add(3).minus(2), 使其输出结果为: 6**/

var val = 12;
function fun1() {
    console.log(val)
    var val = 20;
    console.log(val);
}

fun1();