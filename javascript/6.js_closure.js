/**
 * 闭包的理解
 */

 function func1(){
     var n = 999;
 }
 //console.log(n)   // n is not defined

function func(){
    var n = 999;
    add = function(){
        n++
    }
    // 闭包show函数
    function show(){
        return n
    }
    return show;
}
var tempShow = func();
console.log(tempShow());
add();
console.log(tempShow());

var name = "The window";
var object = {
    name: "my object",
    getNameFunc : function(){
       // var that = this;
        return function(){
            return this.name
          // return that.name
        }
    }
}

var temp = object.getNameFunc().bind(object);
console.log(temp()) // the window

