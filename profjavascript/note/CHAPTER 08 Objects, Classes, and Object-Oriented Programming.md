# 第八章 对象、类与面向对象编程

## 目录

- [第八章 对象、类与面向对象编程](#第八章-对象类与面向对象编程)
  - [目录](#目录)
  - [理解对象](#理解对象)
    - [属性类型](#属性类型)
    - [合并对象](#合并对象)
    - [增强语法](#增强语法)
    - [对象解构](#对象解构)
  - [创建对象](#创建对象)
    - [设计模式](#设计模式)
      - [原型模式](#原型模式)
        - [理解原型](#理解原型)
        - [原型层级](#原型层级)
      - [对象迭代](#对象迭代)
  - [继承](#继承)
    - [原型链](#原型链)
    - [继承方式](#继承方式)
  - [类](#类)
    - [类定义](#类定义)
    - [类构造函数](#类构造函数)
    - [实例, 原型和类成员](#实例-原型和类成员)
    - [继承](#继承-1)

## 理解对象
### 属性类型

- **数据**属性和**访问器**属性都是对象的属性，可以直接访问
  
  - `PropertyName_` 中的下划线一般表示**不希望**被对象方法外部访问
  - 访问器属性一般用于**设置一个值, 还会影响其他值**的场景
  
- 属性的属性 `(Property Attributes)`, 不能直接访问
  - [[Configurable]]
  - [[Enumerable]]
  - [[Writable]]
    - `true` by default
  - [[Get]] & [[Set]]
    - `undefined` by default
  - [[Value]]

- 方法归纳
  ```
  Object.defineProperty(object, property, descriptor)
  Object.defineProperties(object, descriptors)
  Object.getOwnPropertyDescriptor(object, property)
  Object.getOwnPropertyDescriptors(object)
  ```
### 合并对象

- 合并 merge, 或称混入 mixin
  - `object.assign` 浅复制
  - 不能转移 getter 和 setter
  - Identity & Equality
    - `Obeject.is()`
    - 

### 增强语法

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

##### 理解原型

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
  ```js
  Constructor()
  [[Prototype]]
  [INSTANCE]
  
  [INSTANCE].__proto__ === Constructor().prototype
  __proto__ -> [[Prototype]]
  ```

##### 原型层级

- 通过对象访问属性, 先搜索**实例**本身, 没找到再搜索**原型**
- 实例属性会**遮蔽**原型上的同名属性

```js
// 确定某个属性是在实例 (true) 还是原型上
hasOwnProperty()

// 属性在实例或原型中
[name] in [object]

// 属性在原型中
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);
}

// 获取属性
Obeject.keys()	// 可枚举
Object.getOwnPropertyNames()	// 枚举无关
Object.getOwnPropertySymbols()	// 符号键
```

- 属性枚举顺序
  - `for-in` 和 `Object.keys()` 顺序不确定

#### 对象迭代

- 原型语法

```js
// 添加
Constructor.prototype.[PROPERTY] = 'property';
// 重写
Constructor.prototype = {
	[PROPERTY]: 'property',
}
```

- 原型的动态性
  - **重写**会切断**最初原型**与**构造函数**的联系

- 原生对象原型
  - **原型模式**是实现所有**原生引用类型**的模式
  - 通过**原生对象原型**, 可以取得默认方法的引用, 或定义新方法
  - **不推荐**直接修改原生对象原型, **建议**创建自定义类**继承**
- 原型的问题
  - 原型上的所有**属性**都在实例上**共享**
  - 若原型属性包含**引用**, 在一个实例上修改, 会影响所有实例

## 继承

- 很多面向对象语言支持: **接口继承**和**实现继承**
  - 前者继承**方法签名**, 后者继承**实际方法**
  - `ECMAScript` 中函数没有签名, 不能实现接口继承

### 原型链

- `ECMA-252` 把**原型链**定义为 `ECMAScript` 的主要继承方式

- 用书上的例子, 做了一个稍微直观点的[图解](..\practice\Chapter08\03-Inheritance\01-PrototypeChaining\PrototypeChaining\PrototypeChaining.html), 配合控制台慢慢看

- **字面量**会**重写**被赋值的对象

- 原型链的**问题**
  - 原型中的**引用值**会在所有实例间**共享**

  - 子类 `SubType` 实例化时不能给超类 `SuperType` 传参

### 继承方式

-  构造函数盗用
  - 构造函数盗用 (Constructor Stealing) 用于解决原型**引用值共享**的问题

    - 基本思路: 在子类构造函数中调用 `call` 超类构造函数

    ```js
    function SubType() {
     // inherit from SuperType
     SuperType.call(this);
    }
    ```

    - 又称**对象伪装** (Object Masquerading) 或**经典继承** (Classical Inheritance)

  - 子类**可以**向超类**传递参数**

  - 子类**不能**访问超类原型上的**方法**

- **组合继承**综合了原型链和构造函数盗用
  
  - 即使用**原型链**继承原型属性和方法, 使用**盗用**继承实例属性
  - 也叫伪经典继承 (Pseudo-classical Inheritance)

- **原型式继承** (Prototypal Inheritance)
  
  - 引用值会共享
- **寄生式继承** (Parasitic Inheritance)

- **寄生式组合继承** 

## 类

- 前面了解了如何只使用 `ECMAScript 5` 的特性, 模拟**类**的行为

  - 各种策略都有自己的问题, 实现继承的代码显得冗长
  - `ECMAScript 6` 引入 `class` 关键字正式定义**类**的能力

  - 但实际上仍然时原型还构造函数的概念

### 类定义

- **定义类**两种主要方式

  ```js
  // class declaration
  class Person {}

  // class expression
  const Animal = class { };
  ```
  
  - 函数声明可以提升, 但类定义**不能提升** (hoist)
  - 函数受函数作用域限制, 类受**块作用域**限制
  
- 类的组成

  ```js
  // Valid empty class definition
  class Foo {}
  // Valid class definition with constructor
  class Bar {
   constructor() {}
  }
  // Valid class definition with getter
  class Baz {
   get myBaz() {}
  }
  // Valid class definition with static method
  class Qux {
   static myQux() {}
  } 
  ```

### 类构造函数

- `contructor` 关键字用于定义类构造函数
- 实例化 (使用 `new`)
  1. 在内存中创建一个**新对象** `new_obj`
  2. ``new_obj.[[Prototype]] -> [Constructor].prototype`
  3. `this -> new_obj`
  4. 执行**构造函数**内部的代码
  5. `return tmp_obj || new_obj`

- **类**就是一种特殊的函数

### 实例, 原型和类成员

- 实例成员
- 原型方法与访问器
- 静态类方法
- 非函数原型和类成员
- 迭代器与生成器

### 继承
