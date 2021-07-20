// promise 使用

// console.log('script start');

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0);

// Promise.resolve().then(function(){
//     console.log('promise 1')
// }).then(function(){
//     console.log('promise 2')
// });

// console.log('script end')

// var promise = Promise.resolve();
// promise.then(()=>{
//     throw new Error("BOOM!");
// }).then((success)=>{
//     console.log(success);
//     throw new Error("Another Boom!");
// }, (error)=>{
//     console.log(error);
// });

// 题目1
const promise = new Promise((resolve, reject) => {
    console.log(1);
    // resolve();
    console.log(2);
    reject('error');
})

promise.then(() => {
    console.log(3);
}).catch(e => console.log(e))

console.log(4);

 

// 题目2

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//          console.log('once')
//          resolve('success')
//     }, 1000)
// })
// promise.then((res) => {
//    console.log(res)
//  })
// promise.then((res) => {
//  console.log(res)
// })

// const p1 = () => (new Promise((resolve, reject) => {
// 	console.log(1);
// 	let p2 = new Promise((resolve, reject) => {
// 		console.log(2);
// 		const timeOut1 = setTimeout(() => {
// 			console.log(3);
// 			resolve(4);
// 		}, 0)
// 		resolve(5);
// 	});
// 	resolve(6);
// 	p2.then((arg) => {
// 		console.log(arg);
// 	});

// }));
// const timeOut2 = setTimeout(() => {
// 	console.log(8);
// 	const p3 = new Promise(reject => {
// 		reject(9);
// 	}).then(res => {
// 		console.log(res)
// 	})
// }, 0)


// p1().then((arg) => {
// 	console.log(arg);
// });
// console.log(10);