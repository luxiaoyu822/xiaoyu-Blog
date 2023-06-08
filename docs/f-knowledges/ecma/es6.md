# ECMAScript 6 简介

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式
发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

## ECMAScript 和 JavaScript 的关系

一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？

要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将
JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标
准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个
版本就是 1.0 版。

该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，
Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个
名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA
，不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的
ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的

## ES6 与 ECMAScript 2015 的关系

ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？

2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。

但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。

但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的 includes 方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。

## let 和 const 命令

### let

ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。

```js
{
  let a = 10
  var b = 1
}
a // ReferenceError: a is not defined.
b // 1
```

for 循环中就很合适使用 let。

```js
for (let i = 0; i < 10; i++) {
  // ...
}
console.log(i)
// ReferenceError: i is not defined
```

使用 let 定义的变量 i 只在 for 循环体中有效

let 不允许在相同作用域内，重复声明同一个变量。

### const

const 声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const PI = 3.14
PI // 3.1415
PI = 3 // TypeError: Assignment to constant variable.
```

## 解构赋值和展开运算符

### 解构赋值

结构赋值可以快速的从对象和数组里面获取里面的成员

```js
let arr = ['zhangsan', 'lisi', 'wangwu']
let [x, y, z] = arr //可以快速获取数组中的元素，不必通过下标获取
console.log(x, y, z)
```

```js
let obj = {
  name: '李四',
  age: 23,
  address: {
    province: '江苏',
    city: '南京',
  },
  hobby: ['音乐', '篮球'],
}

let {
  name,
  age,
  address: { province, city },
  hobby: [a, b],
} = obj2
console.log(
  '我叫' +
    name +
    ',今年' +
    age +
    '岁，来自' +
    province +
    city +
    '爱好是' +
    a +
    '和' +
    b
)
```

### 展开运算符

展开运算符`...`可以快速的将一个数组或者对象赋值给另一个数组或者对象

**操作数组**

```js
let a = [1, 2, 3]
let b = [4, 5, 6]
console.log(a.concat(b))
let c = [...a, ...b]
console.log(c)

// 复制
let a = [1, 2, 3, 4]
let b = [...a]
console.log(a, b)
```

**操作对象**

```js
let obj1 = {
  name: 'zhangsan',
  age: 18,
}
let obj2 = {
  name: 'lisi', //当有key值重复时，后面的值会覆盖前面的
  address: 'nanjing',
}
let obj3 = {
  ...obj1,
  ...obj2,
}
console.log(obj3)
```

## Symbol 类型

Symbol，新的数据类型，表示一个独一无二的值

```js
//直接调用Symbol生成一个Symbol变量
let s1 = Symbol()
let s2 = Symbol()
s1 === s2 //false
```

Symbol 的用法之一，可以作为对象中的 key 值，利用 Symbol 的特性来保证 key 值不会重复

```js
let keys = {
  name: Symbol('name'), //Symbol中可以传递参数，目的为区分属性
  age: Symbol('age'),
  address: Symbol('address'),
  test: Symbol('test'),
}
let obj = {
  [keys.name]: 'wangwu',
  [keys.age]: 22,
  [keys.address]: 'nanjing',
  [keys.test]() {
    console.log('test')
  },
}
obj.name = 'lisi'
console.log(obj) //新增的name属性不会对原有的Symbol name产生影响
obj[keys.test]()
```

## Set 结构和 Map 结构

### Set 结构

Set 结构类似于数组，但成员的值都是唯一的，没有重复的值

```js
let s1 = new Set([1, 2, 3, 2, 4])
console.log(s1)
console.log([...s1]) //可以利用展开运算符将Set中的每一项放入数组
let s2 = new Set()
s2.add(1) //对应数组的put方法
s2.add(2)
s2.add(2)
s2.add(3)
console.log(s2) //Set(3) {1, 2, 3}
```

除了 add 方法外，Set 结构还有以下方法

- `size` 返回 Set 的长度
- `has` 判断 Set 中是否包含某个成员，返回一个布尔值
- `delete` 传入需要删除的成员，返回删除后的 Set 机构
- `clear` 清空 Set 结构成员

Set 结构应用示例之复杂数组去重

```js
let list = [
  1,
  2,
  2,
  'zhangsan',
  'lisi',
  'zhangsan',
  [1, 2],
  [3, 4],
  [1, 2],
  { name: 'wangwu' },
  { name: 'wangwu' },
  { name: 'zhaoliu' },
  { age: 100 },
]

function noRepeat(arr) {
  let set = new Set()
  return arr.filter(item => {
    //由于has方法不能深层次判断多维结构，需要将数组和对象序列化成JSON字符串
    let itemString = JSON.stringify(item)
    if (set.has(itemString)) {
      return false
    } else {
      set.add(itemString)
      return true
    }
  })
}
console.log(noRepeat(list))
//[1, 2, 'zhangsan', 'lisi', [1,2], [3,4], {name:'wangwu'}, {name:'zhaoliu'}, {age:100}]
```

### Map 结构

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值包括对象都可以当做键

```js
let m1 = new Map()
let o = { a: 1 }
m1.set('name', '王芳')
m1.set('age', 100)
m1.set(o, '南京') //适用对象作为键值
console.log(m1)
for (let i of m1) {
  console.log(i)
}
console.log([...m1])

//除了set方法，Map还有get,用于获取value
console.log(m1.get('name'))
console.log(m1.get(o))
//has,delete,clear 与Set结构类似
```

Map 结构还有以下方法：

- `keys` 遍历 Map 中的 key 值
- `values` 遍历 Map 中的 value 值
- `entries` 遍历 Map 中的 key 值和 value 值

## Generator 生成器函数

Generator 函数是 ES6 引入的一种新的函数类型，它可以产生一系列值，而不是一次返回一个值。
Generator 函数使用 function\* 关键字定义，可以与 yield 关键字一起使用来控制函数执行流程。

```js
function* gen() {
  console.log(111)
  yield 'aaa'
  console.log(222)
  yield 'bbb'
  console.log(333)
}
let g = gen()
let res = g.next()
console.log(res)
let res1 = g.next()
console.log(res1)
let res2 = g.next()
console.log(res2)
```

## Iterator 迭代器

ES6 规定。默认的 iterator 接口部署在数据结构的 Symbol.iterator 属性，
或者说一个数据结构只要具有 Symbol.iterator 属性，就认为是“可遍历的”
(iterable)。Symbol.iterator 属性本身是一个函数，就是当前数据结构
默认的遍历器生成函数，执行这个函数，就会返回一个遍历器。

原生默认具备 Iterator 接口的数据结构如下：

- `Array`
- `Set`
- `Map`
- `String`
- `arguments对象`
- `NodeList对象`

那么改如何让一个非线性数据结构的对象也可以支持 iterator 迭代呢?

1. 将对象模拟成线性结构

```js
let obj = {
  //将对象的key设置为数组和Set结构类似的
  0: 'zhangsan',
  1: 'lisi',
  2: 'wangwu',
  length: 3,
  //在对象的属性上添加Symbol.iterator 可迭代属性（来自于数组原型链上）
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
}
console.log(obj)
for (const iterator of obj) {
  console.log(iterator)
}
```

2. 模拟迭代器属性返回的结果

```js
let obj2 = {
  code: 200,
  name: 'user',
  userList: ['zhangsan', 'lisi', 'wangwu'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        return {
          value: this.userList[index++],
          done: index === this.userList.length + 1 ? true : false,
        }
      },
    }
  },
}
//for of调用迭代器
for (const iterator of obj2) {
  console.log(iterator)
}
```

## Promise 对象

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象

一个 Promise 对象代表一个在这个 promise 被创建出来时不一定已知值的代理。它让你能够
把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。这样使得异步方法可以像
同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未
来某个时候把值交给使用者

Promise 对象代表一个异步操作，有三种状态：

- `待定（pending）`：初始状态，既没有被兑现，也没有被拒绝。
- `已兑现（fulfilled）`：意味着操作成功完成。
- `已拒绝（rejected）`：意味着操作失败。

```js
let pro = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //在异步操作中，如果Promise的状态为fulfilled，调用resolve
    //resolve(200)
    //在异步操作中，如果Promise的状态为rejected，调用reject
     reject(404)
   }, 1000)
}) 
```
**链式调用，解决回调地狱**
```js
let pro = new Promise()
pro
.then(res => {
  console.log('success', res)
  return new Promise()
})
.then(res=>{
  console.log('success', res)
})
.catch((err) => {
  console.log('failure',err)
})
```
```js
// promise.all 参数为promise对象组成的数组 等待参数的promise全部为reslove后执行
// 返回结果为参数的promise的结果的
Promise.all([pro,pro1,pro2]).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
```
## Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

```js
//拦截对象
let obj = {}
let proxy = new Proxy(obj, {
  get(target, key) {
    console.log('get', target[key])
    return target[key] //get方法必须有返回值
  },
  set(target, key, value) {
    console.log('set', target, key, value)
    if (key === 'data') {
      obox.innerHTML = value
    }
    target[key] = value
  },
  has() {}, 
})
```