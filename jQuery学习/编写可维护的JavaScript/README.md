## 第一部分 编程风格 ##

“程序是写给人读的，只是偶尔让机器执行一下“ 		---Donald Knuth

**JSLint和JSHint用来检查编程风格**，避免不规范的操作引起代码中潜在的错误。

JS的语句要么独占一行要么以分号结尾，类似的有C、C++和Java都采用这种行结束写法，以分号结尾。

JavaScript编码风格很少提及行的长度，但是代码规范中指定**一行的长度一般不超过80个字符**。

**换行后，第二行最好有两个缩进**

**添加空行**，方法之间、方法中的局部变量和第一条语句之间、多行或单行注释之前、方法内在的逻辑片段之间，总之谨慎用之。

**变量和函数要简洁并且抓住要点**，例如命名count、length和size表明数据类型是数字，而命名name、title和message表明数据类型是字符串。但单个字符命名的变量诸如i、j和k通常在循环中使用。使用这些能够体现出数据类型的命名，易于别人和自己读懂。注意伪标准的标准。

对于**函数和命名来说，第一个单词应该是动词**，这里有一些使用动词常见的约定：

![](images/first.png)

看看例子：

	if ( isEnabled ) {

		setName("Nicholas");
	}


	if ( getName() === "Nicholas" ) {

		doSomething();
	}

**常量用大写字母加下划线来命名，下划线用来分隔单词**

	var MAX_COUNT = 10,

		URL = "http://www.baidu.com";

JS中，**构造函数是前面冠以new运算符的函数**，用来创建对象。语言本身已经包含了很多内置构造函数，比如Object和RedExp，也可以开发自己的构造函数来生成新类型，构造函数从变量和普通函数区别开来方式有命名用大写字母开始。构造函数的命名常常是名词，因为是用来创建某个类型的实例，如下：

	function Person( name ) {

		this.name = name;
	}

	Person.prototype.sayName = function() {

		alert(this.name);
	};

	var me = new Person("Nicholas");

**字符串分行，行与行之间用 + 连接**

**null**

null是一个特殊值，使用null的场景是：

用来初始化一个变量，这个变量可能赋值为一个对象。

用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。

当函数的参数期望是对象时，用作参数传入。

当函数的返回值期望是对象时，用作返回值传出。

注意：

不要使用null来检测是否传入了某个参数。

不要用null来检测一个未初始化的变量

示例：

	var person = null;

	function getPerson() {

		if ( condition ) {

			return new Person("Nicholas");
		} else {

			return null;
		}
	}

	var person = getPerson();

	if ( person !== null ) {

		doSomething();
	}

理解null最好的方式是将它当作占位符

**undefined**

undefined是一个特殊值，不同于null，不过null = undefined结果为true，不过undefined的用途和前者不同。那些没有被初始化的变量都有一个初始值即undefined，表示这个变量等待被赋值。比如：

	var person;//不妥当的写法

	console.log( person === undefined );//true

	var person;

	console.log( typeof person );//undefined

	console.log( typeof foo );//undefined

上述的代码中，person和foo都会导致typeof返回undefined，哪怕是person和foo在其他场景中的行为千差万别（语句中foo会报错，而使用person不会报错）

通过禁止使用特殊值undefined，可以有效确保只在一种情况下typeof才会返回undefined：当变量未声明。如果你使用了一个可能赋值为一个对象的变量时，其赋值为null。

	var person = null;//right way

	console.log( person === null );//true

将变量初始值赋值为null表明了这个变量的意图，他最终很可能赋值为对象。typeof运算符运算null的类型时返回object，这样就能和undefined区分开了。



