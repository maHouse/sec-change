## 学习JavaScript数据结构和算法 ##
#### 1.控制结构 ####
①、条件语句

if...else以及变形

②、循环

③、面向对象编程OOP

	var Book = function(title,page) {
		this.title = title;
		this.page = page
	}//还有一种就是new出来

#### 2.数组 ####
数组是最简单的内存数据结构，在JS里我们可以存储不同类型的值

把值放到第一个位置上，数组的长度增加，length由原来的length变为length+1，这个新的值则是length-length的地方，实现原理是：

	for ( var i = numbers.length; i >= 0; i-- ) {
	
		numbers[ i ] = numbers[ i - 1 ];
	}
	
	numbers[0] = -1; 

JS仅仅支持一维数组，不支持矩阵，但可以用嵌套数组来实现矩阵或多维数组，参照于乘法口诀

**排序**


sort排序


	numbers.sort( function( a, b ) {
	
		return a - b;
	} );

等价于

	function compare( a, b ) {
		if ( a < b ) { return -1 };
		if ( a > b ) { return 1 };
		return 0;
	}

	numbers.sort( compare );

自定义排序

我们可以对任何对象类型的数组排序

#### 3.栈 ####
数组里面我们可以在其任意位置上删除或添加元素，但有时候我们需要一种在添加或删除元素时有更多控制的数据结构。有两种数据结构类似于数组，但在添加和删除元素时更为可控，他们就是栈和队列。

栈是一种后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端叫做栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

last input first output 

栈也被用在编程语言的编译器和内存中保存变量、方法调用等。


 **栈的创建**

创建一个类表示栈，先声明这个类：

	function Stack() { //各种属性和方法的声明 }

首先，需要一种数据结构来保存栈里的元素，可以选择数组：

	var items = [];

下面为栈声明一些方法：

	push(element(s)):添加一个或多个新元素到栈顶

	pop():移除栈顶的元素，同时返回被移除的元素

	peek():返回栈顶的元素，不对栈做任何修改（不会移除栈顶的元素，仅仅返回它）

	isEmpty():如果栈里没有任何元素就返回true，否则返回false
	
	clear():移除栈里的所有元素

	size():返回栈里的元素个数。和数组的length属性类似

实现的第一个方法就是push，往栈里添加新元素，只会添加新元素到栈顶，也就是栈的末尾

	this.push = function( element ) {

		items.push( element );
	}
实现pop方法，遵从LIFO原则，移除的是最后添加进去的元素
	
	this.pop = function() {
		return items.pop();
	}

只能用push和pop方法添加和删除栈中的元素，我们的栈也就遵从了LIFO原则，一些额外的辅助方法，如果我们想知道栈里最后添加的元素是什么，可以用peek方法，这个方法返回栈顶的元素

	this.peek = function() {
	
		return items[items.length-1];
	}

实现isEmpty方法，如果栈为空返回true，否则返回false

	this.isEmpty = function() {

		return items.length == 0;
	}

使用isEmpty就能简单的判断内部数组的长度是否为0。

对于集合，最好用size代替length，因为栈的内部使用数组保存元素，所以简单的返回栈的长度

	this.size = function() {

		return items.length;
	}

clear方法的实现，用来移除栈里所有的元素，把栈清空

	this.clear = function() {

		items = [];
	}
也可以用pop方法，把数组元素全部移除，实现了clear

检查栈里的内容，用辅助方法，print。把栈里的元素都输出到控制台

	this.print = function() {
		
		console.log(items.toString());
	}

OK!完成了创建栈。

栈的完整代码

	function Stack() {
	
		var items = [];

		this.push = function( element ) {
			items.push( element );
		};
		
		this.pop = function() {
			
			return items.pop();
		};

		this.peek = function() {
			
			return items[ items.length-1];
		};
		this.isEmpty = function() {
			
			return items.length == 0;
		};
		this.size = function() {
			
			return items.length;
		};
		this.clear = function() {
			
			items = [];
		};
		this.print = function() {
		
			console.log( items.toString() );
		};
	}

使用Stack类

首先，初始化Stack类，并验证栈是否为空，输出true，因为还没有往栈里添加元素

	var stack = new Stack();
	console.log(stack.isEmpty());

接下来，往栈里添加一些元素，可以是任意类型的元素

	stack.push(5);
	stack.push("1");

如果调用peek方法，将会输出字符串“1”，因为是最后一个添加的元素

	console.log(stack.peek());

再添加一个元素：

	stack.push(11);
	console.log(stack.size());
	console.log(stack.isEmpty());

我么往栈里添加了11，调用size方法，输出为3，调用isEmpty方法，会看到输出了false，因为栈里有3个元素，不是空栈，最后添加一个元素：

	stack.push(15);

#### 实战 ####
生活中我们使用十进制，计算机科学里所有内容都是用二进制数字表示的（0和1），计算机并没有十进制和二进制相互转化的能力。

把十进制转化为二进制，我们可以将十进制数字和2整除，直到结果是0为止

	function divideBy2(decNumber) {
		
		var remStack = new Stack(),
			rem,
			binaryString = '';
	
		while (decNumber > 0) {
			rem = Math.floor(decNumber % 2);
			remStack.push(rem);
			decNumber = Math.floor(decNumber / 2);
		}

		while (!remStack.isEmpty()){
			binaryString += remStack.pop().toString();
		}
		return binaryString;
	}

当结果满足和2做整除的条件，我们会获得当前结果和2的余数，放到栈里。然后让结果和2做整除。JS有数字类型。不会区分是整数还是浮点数。因此用Math.floor函数让除数法的操作仅返回整数部分，最后用pop方法把栈中的元素都移除，把出栈的元素变成连接成字符串。


**实例平衡圆括号和汉诺塔**

### 4.队列 ###

队列遵循FIFO（First In First Out），先进先出原则，是一组有序的项。队列在尾部添加新元素，并在顶部移除元素。新添加的元素必须排在队列的末尾。

**创建队列**

从基本的声明类开始：

	function Queue() {
		
		//属性和方法
	}

首先需要一个用于存储队列中元素的数据结构。我们用数组：

	var items = [];

队列可用的方法

	enqueue( elements ):向队列尾部增加一个或多个新的项
	
	dequeue():移除队列的第一项，并返回被移除的元素

	front():返回队列中第一个元素--最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息--与Stack类的peek方法类似

	isEmpty():如果队列不包含任何元素，返回true,否则返回false

	size():返回队列包含的元素个数，与数组的length属性类似

先实现enqueue方法，负责向队列里添加新元素，只能向队列的末尾添加

	this.enqueue = function( element ) {

		items.push( element );
	}

由于队列遵循先进先出原则，最先添加的项也是最先被移除，我们用shift方法来实现，会从数组中移除储存在索引0的元素。

	this.dequeue = function() {

		return items.shift();
	}

我们用enqueue和dequeue方法来添加和移除元素，确保了Queue类遵循先进先出原则。

如果想知道队列最前面的项是什么，可以用front方法

	this.front = function() {

		return items[];
	}

下一个是isEmpty方法，如果队列为空返回true，否则返回false

	this.size = function() {
		
		return items.length;
	}

增加一个print方法

	this.print = function() {

		console.log( items.toString() );
	}

完整的代码：

	function Queue() {
	
		var items = [];
	
		this.enqueue = function( element ) {
			items.push( element );
		};
		
		this.dequeue = function() {
			return items.shift();
		};
		
		this.front = function() {
			return items[0];
		};

		this.isEmpty = function() {
			return items.length == 0;
		};

		this.clear = function() {
			items = [];
		};

		this.size = function() {
			return items.length;
		};

		this.print = function() {
		
			concole.log( items.toString() );
		};
	}

使用Queue类（队列类）

首先就是实例化刚刚创建的Queue类，并进行验证（是否为空）

	var queue = new Queue();
	console.log( queue.isEmpty() );

接下来添加元素进去，可以是任何类型的元素

	queue.enqueue("John");
	queue.enqueue("Jack");
