/**
 * 创建数组的基本方式
 * 1. 使用Array构造函数
 * 2. 使用数组字面量表示法
 */
var colors = new Array(20);
colors = new Array("red","blue")

var colors2 = ['red2','blue'];

/**
 * 检测数组1
 * 一个网页或者一个全局作用域可以使用instanceof
 */
  var value = colors
 if(value instanceof Array) {}

 /**
  * 检测数组2
  * 为了解决实际存在多个框架，包含两个以上的全局执行环境，从而从在两个不同的Array构造函数
  * 可以使用 Array.isArray()
  */

  if(Array.isArray(value)) {}

  /**
   * 检测数组3
   * 更好兼容检测数组
   */

   function isArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]"
   }

   /**
    * 转换方法
    * toLocaleString() toString() valueOf()
    */

    console.log(colors.toString())
    console.log(colors.valueOf())
    console.log(colors)
    //alert(colors.valueOf())

    /**
     *数组方法
    * 栈方法：push()、pop()
    * 队列方法：shift()、 unshift()
    * 重排序方法：reverse()、sort()
    * 操作方法：concat()、slice()、splice()
    * 位置方法：indexOf() lastIndexOf()
    */

   colors.unshift('yellow','green')
   console.log('unshift',colors)

   colors.shift()
   console.log('shift',colors)

   var values = [6,1,2,3,4,5]
   values.reverse();
   colors.reverse();

   console.log('reverse', values,colors)
   
   values.sort();
   colors.sort();   
   console.log('sort', values,colors)

   console.log(colors,colors2) 
   colors3 = colors.concat("1",['2','3']);
   console.log('colors3 cancat',colors3) 
   console.log('colors',colors)
   
   /**
    * 数组迭代方法
    * every() 每一项返回true => true
    * some()  任一项返回true => true
    * filter() 返回true的项组成的数组
    * forEach() 无返回值
    * map 返回调用结果组成的数组
    * 
    * 归并方法
    * reduce()
    * reduceRight()
    */
    console.log(values)
    var sum = values.reduce(function(prev, cur, index, array){
        console.log(cur,index)
            return prev + cur
    },20);
    console.log(sum)


    /**
     * 为 Array 对象添加一个去除重复项的方法
     * 输入：[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
     * 输出: [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
     */
    Array.prototype.uniq = function () {
        let result = [];
        let flags = true;
        for(let i = 0;i < this.length;i++){
            let item = this[i];
            if(result.indexOf(item) == -1){
                if(this[i] != this[i] && typeof(this[i]) === 'number'){
                    if(flags){
                        result.push(this[i])
                        flags = false
                    }
                }else{
                    result.push(item)
                }
            }
        }
        return result
    }
    var array = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
    var newArr = array.uniq();
    console.log(newArr)