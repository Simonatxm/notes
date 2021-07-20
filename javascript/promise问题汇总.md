# Promise 问题汇总

1. Promise 有什么用? 答: 拿它解决异步回调问题

2. 了解 Promise 吗？
   异步编程解决方案，三种状态：pending（进行中）、resolved（已完成）、rejected（已失败）
   promise 的特点只有异步操作结果，可以决定当前哪一种状态，任务其他操作无法改变这个状态

3. Promise 解决的痛点是什么？

- 回调地狱，代码难以维护： 嵌套回调（callback hell）
- 支持多个并发请求，获取并发请求中的数据
- 解决可读性问题
- 解决信任问题

4. Promise 如何使用？

- 创造一个 promise 实例
- Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 reject 状态的回调函数
- 可用 Promise 的 try catch 方法预防异常

5. 执行顺序
   同步程序 => promise 微任务 => 异步程序

6. promise 基本规则

（1）promise 构造函数会立即执行，而 promise.then() 内部的代码在当次事件循环的结尾立即执行（微任务）

 (2) promise 的状态一旦由等待 pending 变为成功 fulfiled 或者失败 rejected。那么当前 promise 被标记为完成，后面则不会再改变该状态。

（3）resolve函数和reject函数都将当前Promise状态改为完成，并将异步结果，或者错误结果当做参数返回

 (4) Promise.resolve(value)
 
（6）promise 对象的构造函数只会调用一次，then 方法和 catch 方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果

题目 1

```
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
    reject('error');
})

promise.then(() => {
    console.log(3);
}).catch(e => console.log(e))

console.log(4);
```

题目 2

```
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
             console.log('once')
             resolve('success')
        }, 1000)
 })
promise.then((res) => {
       console.log(res)
     })
promise.then((res) => {
     console.log(res)
 })
```

题目 3
```
const p1 = () => (new Promise((resolve, reject) => {
	console.log(1);
	let p2 = new Promise((resolve, reject) => {
		console.log(2);
		const timeOut1 = setTimeout(() => {
			console.log(3);
			resolve(4);
		}, 0)
		resolve(5);
	});
	resolve(6);
	p2.then((arg) => {
		console.log(arg);
	});

}));
const timeOut2 = setTimeout(() => {
	console.log(8);
	const p3 = new Promise(reject => {
		reject(9);
	}).then(res => {
		console.log(res)
	})
}, 0)


p1().then((arg) => {
	console.log(arg);
});
console.log(10);
```
