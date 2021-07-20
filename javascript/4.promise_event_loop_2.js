/**
 * 宏任务和微任务
 * 宏任务
 *    分类：script全部代码,setTimeout,setInterval、I/O,UI Rendering
 *    1. 宏任务所处的队列就是宏任务队列
 *    2. 第一个宏任务队列中只有一个任务：执行主线程的js代码
 *    3. 宏任务队列可以有多个
 *    4. 当宏任务队列的任务全部执行完成以后会查看是否有微任务，如果有执行微任务中的所有任务
 * 微任务
 *    分类：new Promise().then (回调) process.nextTick(Node独有)
 *    1.微任务所处的队列就是微任务队列
 *    2.只有一个微任务队列
 *    3.在上一个宏任务队列执行完毕后，如果有微任务队列就会执行微任务队列中的所有任务
 */

//  例子1
// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

//  例子2
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

/**
 * 答案输出
 */
// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

/**
 * JS 运行机制的理解
 * 代码执行开启一个全局调用栈（主栈）运行环境，在执行过程中同步任务的代码立即执行，
 * 遇到异步任务将异步回调注册到任务队列中，等待同步代码执行完毕后查看异步任务，
 * 未完成拿到主栈开始执行
 */