# 第五章 基本引用类型

**引用类型**有点像**类**, 但和类不是一个概念

## 目录

## Date

- -`Date` 将日期保存为 `UTC` 协调世界时 `1970-01-01 00:00:00 ~ Now` 的毫秒数

	```javascript
	Date.Parse()
	Data.UTC(year, month [day, hours, minutes, seconds])
	// zero-based month (0-11)
	// 这两个函数会被构造函数隐式调用
	```

### 方法

太多了, 不一一列出, 按需查找相应资料

- 继承的方法

  - `Date` 类型重写了这些方法, 返回的结果可能取决于浏览器, 不适合用于显示

  ```javascript
  toLocaleString()
  toString()
  valueOf()
  ```

- 格式化方法

  - 专门用于格式化日期, 返回 `string`

  ```javascript
  toDateString()
  toTimeString()
  toLocaleDateString()
  toLocaleTimeString()
  toUTCString()
  ```

- 组件方法

  ```javascript
  getFullYear()
  getMonth(), (0 represents January)
  getDate(), the day of the month (1 through 31)
  getDay(), the date’s day of the week (0 represents Sunday)
  ```

## RegExp

- `ECMAScript` 通过 `RegExp` 支持正则表达式类型

  ```js
  let expression = /pattern/flags;
  let pattern = new RegExp(pattern, flags);
  ```


### 属性和方法

- 实例

  ```
  global
  sticky
  flags
  lastIndex
  exec()
  test()
  ```

- 构造函数

## 原始包装类型

- 不推荐显示创建

### Boolean

### Number

### String

## 单例内置对象

### Global

- URI-Encoding

  ```
  encodeURI()
  decodeURI()
  encodeURIComponent()
  decodeURIComponent()
  ```

- eval()

- Global 对象属性

- window 对象

### Math