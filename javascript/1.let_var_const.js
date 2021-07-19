/**
 * let var const 的区别
 * var 声明的变量，其作用域为该语句所在的函数内，且存在变量提升的现象
 * let 声明的变量，其作用域为该语句所在的代码块内，不存在变量提升
 * const 声明的变量不允许修改
 */

// 什么是变量提升？
// JavaScript 中，函数及变量的声明都将被提升到函数的最顶部
// JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明

// console.log(a); // undefined  ===>  a已声明还没赋值，默认得到undefined值
// var a = 100;
// console.log(b);
// let b = 200;
// console.log(c); 
// const c = 300;

// function fn() {
//     // var d 会提升到if 语句前面
//     if(true){
//         console.log(d + ' now')
//     }else{
//         var d = 1;
//         console.log(2)
//     }
//     const e = 200;
//     e = 300
//     console.log(e + ' now const')  // const 声明时候必须赋值
// }
// fn();   // a => undefined  

//同一作用域下let和const不能声明同名变量，而var可以
// const f = 200;
// const f = 300;
// console.log(f);

for (let i = 0; i < 5; i++) {
    console.log('i', i)
    setTimeout(() => {
        console.log('setTimeout i',i)
    }, 1000);
}
// 0 1 2 3 4

for (var j = 0; j< 5; j++) {
    console.log('j', j)
    setTimeout(() => {
        console.log('setTimeout j',j)
    }, 1000);
}

// 55555