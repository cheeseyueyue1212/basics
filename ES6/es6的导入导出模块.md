# es6的导入导出模块

## 导入通过import关键字
```js
// 只导入一个
import {sum} from "./example.js"

// 导入多个
import {sum,multiply,time} from "./exportExample.js"

// 导入一整个模块
import * as example from "./exportExample.js"
```
## 导出通过export关键字
```js
//可以将export放在任何变量,函数或类声明的前面
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

//也可以使用大括号指定所要输出的一组变量
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};

//使用export default时，对应的import语句不需要使用大括号
let bosh = function crs(){}
export default bosh;
import crc from 'crc';

//不使用export default时，对应的import语句需要使用大括号
let bosh = function crs(){}
export bosh;
import {crc} from 'crc';
```