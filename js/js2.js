
/**
 * 实现一个$attr(name,value)遍历
 * 属性name
 * 值为value的元素集合
 * 
 * 例如下面示例
 */

function $attr(property, value) {
    // 获取当前页面的所有标签
    let elements = document.getElementsByTagName('*'),
    arr = [];
    // [].forEach.call(elements, item => {} );
    elements = Array.from(elements); //=> 把非数组转换为数组
    elements.forEach(item => {
        let itemValue = item.getAttribute(property);
        if(property === 'class'){
            //=>样式类属性名要特殊处理
            new RegExp("\\b"+value+"\\b").test(itemValue) ? arr.push(item) : null;
            return;
        }
        if(itemValue === value) {
            //=> 获取的值和传递的值校验成功: 当前就是我们想要的
            arr.push(item)
        }
    })

    return arr;
}

let ary = $attr('id', 'AAA');
 
/**英文字母汉字组成的字符串，用正则给英文单词前后加空格 */