# 第六章 集合引用类型

## 目录

- [第六章 集合引用类型](#第六章-集合引用类型)
  - [目录](#目录)
  - [对象 Object](#对象-object)
  - [数组 Array](#数组-array)
    - [方法](#方法)
      - [排序](#排序)
      - [操作](#操作)
      - [搜索和位置](#搜索和位置)
  - [定型数组 Typed Array](#定型数组-typed-array)
    - [ArrayBuffers](#arraybuffers)
    - [DataViews](#dataviews)
    - [Typed Arrays](#typed-arrays)
  - [映射 Map](#映射-map)
  - [弱映射 WeakMap](#弱映射-weakmap)
    - [用途](#用途)
  - [集合 Set](#集合-set)
  - [弱集合 WeakSet](#弱集合-weakset)
  - [迭代与扩展操作符](#迭代与扩展操作符)

## 对象 Object

- 最常用的类型, 很适合存储和交换数据
- 使用**字面量**定义对象时, 不会调用构造函数

## 数组 Array

- 动态大小, 任意类型

  - 每个槽位可以存放**不同类型**的数据

  ```
  Array.from([string || set || map || iterator || object])
  Array.of(arguments)
  ```

- 数组空位

  ```
  const options = [1,,,,5];
  // ES6 [1, undefined, undefined, undefined, 5]
  ```

- 数组索引
  
- `length` 属性是可写的, 用于添加或删除元素
  
- 数组检测: `Array.isArray()`

### 方法

- 迭代器: `keys()`, `values()`, `entries()`, 

- 复制和填充: `fill()`, `copyWinthin()`

- 转换: `toLocalString()`

- 栈: `push()`, `pop()`

- 队列: `shift()`, `push()`

- 迭代

  ```
  every()
  filter()
  forEach()
  map()
  some()
  ```

- 归并

  ```
  (previous, current, index, array)
  reduce()
  reduceRight()  // Right to Left
  ```

  

#### 排序

- 反向排列: `reverse()`

- 按字符串升序排列: `sort()`

  ```
  sort((a, b) => a < b ? a > b ? -1 : 0);
  ```

#### 操作

- `concat()`
  - 添加
  - force-flattening: `Symbol.isConcatSpreadable`
- `splice()`
  - 删除, 插入和替换

#### 搜索和位置

- 严格相等

- 断言查找

  ```
  predicate(element, index, array)
  find()
  findIndex()
  ```

## 定型数组 Typed Array

- **特殊**的包含数值类型的**数组**

### ArrayBuffers

- 所有**定型数组**及**视图**引用的基本单位
- 类似于 `C/C++` 的 `malloc()`

### DataViews

### Typed Arrays

- 与普通数组类似, 但不能合并, 复制和修改
  - 即不能使用 `push(), pop(), splice()` 等方法
  - 但提供了 `set(), subarray()` 两个新方法

## 映射 Map

- ES6 新增特性, 真正的**键值存储**机制, 与 `Object` 有细微的差异
- 可以使用**任何类型**作为**键**
- `Map` 实例会维护键值对的**插入顺序**

|                       |            Map            |        Object         |
| :-------------------- | :-----------------------: | :-------------------: |
| Memory Profile        |         **150%**          |         100%          |
| Insertion Performance |    **slightly faster**    |  roughly comparable   |
| Lookup Performance    |    roughly comparable     | **more advantageous** |
| Delete Performance    | **overwhelming favorite** |       notorious       |

- 除了**查找**之外都是 `Map` 比较好

## 弱映射 WeakMap

- ES6 新增特性, API 是 `Map` 的子集, `Weak` 指的是**垃圾回收**对待**键**的方式

- `WeakMap` 的**键**只能是 `Object` 或 继承自 `Object` 的类型

  - 书里说可以使用**对象包装**后的**原始值**做为**键**, 但实践中会报错

  ```js
  const stringKey = new String("key1");
  const wm3 = new WeakMap([
  stringKey, "val1"
  ]);
  # TypeError: Invalid value used as weak map key
  ```

  - `set(), get(), has(), delete()`

- **弱键**: 弱映射的键**不属于**正式的引用, 不会阻止**垃圾回收**
- **不可迭代键**
  - **键值对**任何时候都可能被销毁, 没必要提供**迭代**以及**销毁**方法
  - 即使代码能访问 `WeakMap` 实例, 也没办法看到**内容**
  - 之所以限制**对象作为键**, 是为了保证通过**键对象的引用**才能获取值

### 用途

- 实现真正的**私有变量**
- DOM 节点元数据

## 集合 Set

- ES6 新增特性, 集合类型, 像是加强型的 `Map`
  - `Collection` 也被翻作集合, 注意区分
- `Set` 会维护**顺序**
  - `keys() === values() === [Symbol.iterator]`
- 定义正式集合操作
  - 详见同目录文件 `03-Defining..Operation.js` 及 `XSet.js`

## 弱集合 WeakSet

- `WeakSet` 就是 `WeakMap` 的 `Set` 版本, 只不过 `Weak` 指的是**值**

## 迭代与扩展操作符

- 4 种 `native collection reference` 类型定义了默认**迭代器**:

  - `Array`, `All typed arrays`, `Map`, `Set`

  - 详见同目录文件 `Iteration..Operator.js` 
  
  

