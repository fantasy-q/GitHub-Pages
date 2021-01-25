# 第八章 对象、类与面向对象编程

## 目录
- [第八章 对象、类与面向对象编程](#第八章-对象类与面向对象编程)
  - [目录](#目录)
  - [理解对象](#理解对象)
    - [属性类型](#属性类型)
    - [合并对象](#合并对象)
    - [增强语法 Enhanced Syntax](#增强语法-enhanced-syntax)
    - [对象解构](#对象解构)
  - [创建对象](#创建对象)
    - [设计模式](#设计模式)
      - [原型模式](#原型模式)

## 理解对象
### 属性类型
- **数据**属性和**访问器**属性都是对象的属性，可以直接访问
  
  - `PropertyName_` 中的下划线一般表示**不希望**被对象方法外部访问
  - 访问器属性一般用于**设置一个值, 还会影响其他值**的场景
  
- 属性的属性 Property Attributes, 不能直接访问
  - [[Configurable]]
  - [[Enumerable]]
  - [[Writable]]
    - `true` by default
  - [[Get]] & [[Set]]
    - `undefined` by default
  - [[Value]]

- 方法归纳
  ```
  Object.definePropertie()
  Object.defineProperties()
  Object.getOwnPropertyDescriptor()
  Object.getOwnPropertyDescriptors()
  ```
### 合并对象

- 合并 merge, 或称混入 mixin
  - `object.assign` 浅复制
  - 不能转移 getter 和 setter
  - Identity & Equality
    - `Obeject.is()`
    - 

### 增强语法 Enhanced Syntax

- ECMAScript6 为定义和操作对象新增了很多及其有用语法糖 syntactical tools
  - 属性值简写: **属性名**和**值变量名**一样, 可简写
  - 可计算属性: 在对象字面量中使用动态属性名或**属性变量**, `[Property_Variable]`
  - 简写方法名
  - 

### 对象解构

- 暂时看不懂有什么用, 先知道有这么个东西就行了

## 创建对象
- ES5.1 之前没有正式支持 OOP, 比如类和继承
  - 使用原型式继承模拟
- ES6 开始正式支持
  - ES 6的类不过就是封装了 ES5.1 构造函数加原型继承的语法糖 syntactical abstraction
- 在学类之前, 先理解 ES5.1 时使用的方法总是有益无害的
### 设计模式
- 工厂模式 Factory Pattern
  
  - 普通函数
  
- 构造函数模式

  - 构造函数也是函数, 与普通函数唯一不同就是通过 `new` 调用
  - ECMAScript 中函数是对象
    - 用构造函数定义的示例, 方法同名但不相等
    - 做同样的事情, 没必要定义多个函数实例
    - 解决方法: 把函数定义放到构造函数外
      - 但会影响全局作用域, 需要原型模式解决

- 相关操作

  ```
  .constructor
  i instanceof O
  ```

#### 原型模式

每个函数都会创建一个 `prototype` 属性, 是一个对象

- 理解原型

  - **构造函数**和**构造函数原型**

    - **构造函数**也是函数, 也有 `prototype` 属性, 即**构造函数原型**
    - 实例与**构造函数原型**有直接联系

  - 构造函数: `Constructor()`

    - 属性: `prototype` 指向构造函数的**原型对象**
      - 该**原型对象**有一个 `constructor` 属性, 指向构造**函数**

    - **循环引用**
      - `Constructor().prototype.constructor === Constructor()`

  - 正常的原型链都会终止于 `Object.prototype`
		```js
      Constructor().prototype.__proto__ === Object.prototype
      Constructor().prototype.__proto__.constructor === Object
      Object.prototype.__proto__ === null
		```
  	
  - 构造函数, 原型对象和实例是 3 个完全不同的**对象**, 关系如下:
    ```
    Constructor()
    [[Prototype]]
    Instance
    
    Instance.__proto__ === Constructor().prototype
    __proto__ ==> [[Prototype]]
    ```
  