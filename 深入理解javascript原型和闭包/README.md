# 深入理解JavaScript原型和闭包


### 一切皆对象
在这里，抛开值类型不谈，咱们来说说引用类型

``` JavaScript
  console.log(typeof function() {})  // function
  console.log(typeof [1, 'a', true])   // object
  console.log(typeof {a: 10, b: 20})   // object
  console.log(typeof null)   // object
  console.log(typeof new Number(10))   // object
  var fn = function () { };
  console.log(fn instanceof Object);  // true
```

函数是一种对象，但是函数却不像数组一样——你可以说数组是对象的一种，因为数组就像是对象的一个子集一样。但是函数与对象之间，却不仅仅是一种包含和被包含的关系，函数和对象之间的关系比较复杂，甚至有一点鸡生蛋蛋生鸡的逻辑

**对象都是通过函数创建的**
``` JavaScript
function Fn() {
  this.name = 'cyn';
  this.year = 2017
}
var fn1 = new Fn();
```
这说明对象可以通过函数来创建。

但为什么说**对象都是通过函数创建的**的呢，其实形如 ` var obj = { a: 10, b: 20} `之类的都是语法糖！
``` JavaScript
//var obj = { a: 10, b: 20 };
//var arr = [5, 'x', true];
// 本质上实际是
var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array();
arr[0] = 5;
arr[1] = 'x';
arr[2] = true;

console.log(typeof (Object));  // function
console.log(typeof (Array));  // function
// 对象都是通过函数创建的
```

