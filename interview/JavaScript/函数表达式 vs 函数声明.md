# 函数表达式 vs 函数声明

让我们来总结一下函数声明和函数表达式之间的主要区别。

首先是语法：如何通过代码对它们进行区分。

- **函数声明**：在主代码流中声明为单独的语句的函数。

    // 函数声明
    function sum(a, b) {
    return a + b;
    }

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 = 右侧创建的：

    // 函数表达式
    let sum = function(a, b) {
    return a + b;
    };



**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用**

一旦代码执行到赋值表达式 let sum = function… 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用**。

例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

这是内部算法的原故。当 JavaScript **准备** 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。

在处理完所有函数声明后，代码才被执行。所以运行时能够使用这些函数。

例如下面的代码会正常工作：

    sayHi("John"); // Hello, John

    function sayHi(name) {
    alert( `Hello, ${name}` );
    }

函数声明 sayHi 是在 JavaScript 准备运行脚本时被创建的，在这个脚本的任何位置都可见。

……如果它是一个函数表达式，它就不会工作：

    sayHi("John"); // error!

    let sayHi = function(name) {  // (*) no magic any more
    alert( `Hello, ${name}` );
    };

函数表达式在代码执行到它时才会被创建。只会发生在 (*) 行。为时已晚。

函数声明的另外一个特殊的功能是它们的块级作用域。

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见**

例如，想象一下我们需要依赖于在代码运行过程中获得的变量 age 声明一个函数 welcome()。并且我们计划在之后的某个时间使用它。

如果我们使用函数声明，以下则代码不能如愿工作：

    let age = prompt("What is your age?", 18);

    // 有条件地声明一个函数
    if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

    } else {

    function welcome() {
        alert("Greetings!");
    }

    }

    // ……稍后使用
    welcome(); // Error: welcome is not defined

我们怎么才能让 welcome 在 if 外可见呢？

    let age = prompt("What is your age?", 18);

    let welcome;

    if (age < 18) {

    welcome = function() {
        alert("Hello!");
    };

    } else {

    welcome = function() {
        alert("Greetings!");
    };

    }

    welcome(); // 现在可以了


或者我们可以使用问号运算符 ? 来进一步对代码进行简化：

    let age = prompt("What is your age?", 18);

    let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

    welcome(); // 现在可以了


## 什么时候选择函数声明与函数表达式？


根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。

这对代码可读性也更好，因为在代码中查找 function f(…) {…} 比 let f = function(…) {…} 更容易。函数声明更“醒目”。

……但是，如果由于某种原因而导致函数声明不适合我们（我们刚刚看过上面的例子），那么应该使用函数表达式。

## 总结

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
- 函数表达式在执行流程到达时创建。