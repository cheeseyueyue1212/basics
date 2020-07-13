# es6 -class 类的继承使用

## Class继承
Class 可以通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多
```js
class Animate {
	constructor() {
    	// 默认返回实例对象 this
    }
}
class Dog extends Animate {
	constructor() {
		super()
    }
}
```
子类必须在 constructor 方法中调用super方法，否则新建实例时会报错，子类就得不到 this 对象。这是因为子类自己的 this 对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工。如果不调用 super 方法，子类就得不到this对象。
    ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到 this上面（所以必须先调用super方法），然后再用子类的构造函数修改 this。

### 1. this 关键字的使用
在子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有 super 方法才能调用父类实例。
```js
class Animate {
	constructor(x, y) {
    	// 默认返回实例对象 this
    }
}
class Dog extends Animate {
	constructor(x, y, z) {
		this.z = z    //  ReferenceError
		super(x, y)   //  this 只能在super() 方法调用之后再使用
		this.z = z 
    }
}
```
### 2. 父类的静态方法会被子类继承
通过子类的类名去调用继承的父类静态方法
```js
class Animate {
	constructor() {
	    // 默认返回实例对象 this
	}
	static show() {
	    console.log('我是show方法')
	}
}

class Dog extends Animate {
	constructor() {
		super()
	}
}
var dog = new Dog()
Dog.show()     //  我是show方法
```

### 3. 子类中重写父类的方法
如果在子类中也写入 num 方法，和父类中的方法重名，这样就会覆盖父类的 num 方法
```js
class Animate {
	constructor() {
	    // 默认返回实例对象 this
	}
	num() {
	    console.log('我是父类的num方法')
	}
}

class Dog extends Animate {
    constructor() {
        super()
    }
    num() {
        console.log('我是子类的num方法')
    }
}
var dog = new Dog()
dog.num()     //  我是子类的num方法
```
如果不想覆盖而是想引用父类的 num 方法，那么就在子类的 num 方法中通过 super 来调用父类的 num 方法，super.num()
```js
class Dog extends Animate {
    constructor() {
        super()
    }
    num() {
    	super.num()  //  调用父类的 num() 方法
        console.log('我是子类的num方法')
    }
}
var dog = new Dog()
dog.num()     

//  我是父类的num方法
//  我是子类的num方法
```
### 4. Object.getPrototypeOf()
Object.getPrototypeOf方法可以用来从子类上获取父类。因此，可以使用这个方法判断，一个类是否继承了另一个类
```js
Object.getPrototypeOf(Dog) === Animate   // true
```

## super 关键字
super这个关键字，既可以当作**函数使用**，也可以**当作对象使用**
### 1. super作为函数使用
super 作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。并且，super() 只能用在子类的构造函数之中。
```js
class Animate {}
class Dog extends Animate {
	constructor() {
		super()
	}
}
```
**注意**： super 虽然代表了父类 Animate 的构造函数，但是返回的是子类 Dog 的实例，即 super 内部的 this 指的是子类 Dog 的实例，因此 super() 在这里相当于Animate.prototype.constructor.call (this)
### 2. super作为对象使用
super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
```js
class Animate {
	constructor() {
		this.x = 2
		this.fn = function() {
			console.log('我是父类实例的方法')
		}
	}
	num() {
		console.log('我是父类的num方法')
	}
}
class Dog extends Animate {
	constructor() {
		super()
	}
	toString() {
    	super.num()   //  调用父类的 num() 方法
    	console.log(super.x)  
        console.log(super.fn) 
        console.log(this.x)
        this.fn()  
	}
}
var dog = new Dog()
dog.toString()

//  我是父类的num方法   
//  undefined
//  undefined
//  2
//  我是父类实例的方法
```
子类 Dog 当中的 super.num()，就是将 super 当作一个对象使用。这时，super 在普通方法之中，指向Animate.prototype，所以 super.num() 就相当于 Animate.prototype.num()
**注意**： 由于super指向父类的原型对象，所以定义在父类 Animate 实例上的方法或属性，是无法通过 super 调用的。