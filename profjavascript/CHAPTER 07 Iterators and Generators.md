# 第七章 迭代器与生成器

- The term “**iteration**” is derived from the Latin *itero*, meaning “**repeat**” or “**do again**.” 
- 在**软件**语境中, **迭代**意指按**顺序**反复多次执行一段程序, 且通常有个终止的期望

## 目录

- [第七章 迭代器与生成器](#第七章-迭代器与生成器)
  - [目录](#目录)
  - [迭代](#迭代)
  - [迭代器模式](#迭代器模式)
    - [可迭代协议](#可迭代协议)

## 迭代

- **计数循环**是一种最简单的**迭代**
- **循环**是迭代的基础
- **迭代**在**有序集** (ordered collections) 上进行
  - 为区分 `collections` 和 `Set`, 记前者为**集**, 后者为**集合**
- **数组**通过**递增索引**来迭代
  - 不适用与其他数据结构
  - 需要一种能进行**通用迭代**的方式, 即**迭代器模式**

## 迭代器模式

- **迭代器模式** (ECMAScript) 把正式实现了 `Iterable` 接口的**结构**称作 `iterable`

- `iterable` 不一定是集对象, 可以是有**类似行为**的其他数据结构
- `迭代器 iterator` 和 `可迭代对象 iterable`
  - `iterator` 是按需创建的**一次性对象**, 关联一个 `iterable`
  - `iterator` 无需了解 `iterable` 的结构, 只要知道如何取得**连续的值**

### 可迭代协议

- 实现了 `Iterable` 接口的内置类型
   - Strings
   - Arrays
   - Maps
   - Sets
   - The `arguments` object
   - Some DOM collection types like `NodeList`

- 接收 `iterable` 的原生语言特性
  - `for...of` loop 
  - Array destructuring 
  - The spread operator `...`
  - `Array.from() `
  - Set construction `new Set()`
  - Map construction `new Map()`
  - `Promise.all()`, which expects an `iterable` of promises 
  - `Promise.race()`, which expects an `iterable` of promises 
  - The `yield*` operator, used in generators

### 迭代器协议

- `iterator` 是实时的, 若 `iterable` 在迭代期间被修改, 变化亦会反映到迭代器上

- `iterator` 的概念比较模糊, 可以指代
  - **通用迭代**: a generalized `iteration` concept
  - **接口**: an `interface`
  - **迭代器类型**: formal `iterator-type` classes

### 自定义迭代器