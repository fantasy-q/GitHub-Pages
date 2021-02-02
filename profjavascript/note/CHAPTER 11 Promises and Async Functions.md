# 第十一章 期约与异步函数

- 异步日志输出: `setTimeout(console.log, 0, ...params)`

## 目录
- [第十一章 期约与异步函数](#第十一章-期约与异步函数)
  - [目录](#目录)
  - [异步编程](#异步编程)
    - [同步 vs. 异步](#同步-vs-异步)
    - [旧有异步模式](#旧有异步模式)
  - [期约](#期约)
    - [期约基础](#期约基础)
  - [异步函数](#异步函数)

## 异步编程

- <ruby>同步<rt>Synchronous</rt></ruby>和<ruby>异步<rt>Asynchronous</rt></ruby>的<ruby>对立统一<rt>Duality</rt></ruby>是计算机科学的一个基本概念
  - 在 JavaScript 这种<ruby>单线程<rt>Single-thread</rt>事件循环模型<rt>event loop model</rt></ruby>, 更是代码要依赖的核心机制
- **异步**行为是为了优化因更大的<ruby>计算吞吐量<rt>computational throughput </rt></ruby>而带来的<ruby>高时延操作<rt>high latency operations</rt></ruby>
  - 但异步操作**不是**必须密集计算或高时延操作

### 同步 vs. 异步

- **同步**行为对应内存中顺序执行的处理器指令
  - 容易分析代码在任意时刻的状态
- **异步**行为类似于系统中断
  - 异步是**必要**的, 向远程服务器发送请求并等待响应, 就会出现长时间等待

### 旧有异步模式

- 异步行为向来是 JavaScript 重要但**丑陋**的基石
  - 早期只支持定义回调函数, 通常会深度嵌套 — <ruby>回调<rt>callback</rt>地狱<rt>hell</rt></ruby>
- 模式
  1. 异步返回值
     - 返回值作为回调的参数
  2. 失败处理
     - 成功回调和失败回调
  3. 嵌套异步回调
     - 如果异步值依赖另一个异步值, 则需要**嵌套回调**
     - such a structure became nearly **unmaintainable**

## 期约

- **<ruby>期约<rt>Promise</rt></ruby>**是对尚不存在结果的一个**<ruby>替身<rt>surrogate entity</rt></ruby>**
  - **<ruby>终局<rt>eventual</rt></ruby>**, **<ruby>期许<rt>future</rt></ruby>**, **<ruby>延迟<rt>delay</rt></ruby>**, **<ruby>迟付<rt>deferred</rt></ruby>**都是当时对这个概念进行描述的术语
- Promise / A+ 规范
  - 早期期约机制在 jQuery 和 Dojo 中式以 Deferred API 的形式出现的
  - 2010后, CommonJS 项目实现的 Promise / A+ 规范 日益流行起来

### 期约基础

1. 期约状态机

   期约是一个有**状态**的对象: 

   - **<ruby>待定<rt>pending</rt></ruby>**: 最初始状态, 可以**<ruby>落定<rt>settled</rt></ruby>**为的**兑现**或**拒绝**
     - 过程不可逆, 也不保证会改变状态
   - **<ruby>兑现<rt>fulfill</rt></ruby>** / **<ruby>解决<rt>resolved</rt></ruby>**: 代表**成功**
   - **<ruby>拒绝<rt>rejected</rt></ruby>**: 代表**失败**

2. 解决值, 拒绝理由, 期约用例

   - 作用: 抽象地表示一个异步操作
   - 期约兑现有私有内部**值**, 拒绝有私有内部**理由**, 默认 `undefined`

3. 执行器控制期约状态

   - 执行器函数: 初始化期约行为, 控制最终状态

- **期约**是同步对象, 是异步执行模式地**媒介**
  - 代码以异步模式执行, 则唯一交互方式就是异步结构, 即期约

### 期约的实例方法

p444

## 异步函数

- `ES8` 新增 `async/await` 是期约模式在函数中的应用
  - 让同步方式写的代码能够异步执行

### 异步函数基础

- `async`: 声明异步函数
  - 异步函数始终返回期约对象