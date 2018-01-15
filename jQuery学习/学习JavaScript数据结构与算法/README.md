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

**优先队列**

元素的添加和移除是有优先级的，实际的例子是机场登机有头等舱和商务舱与经济舱的区别，医院有急诊室的区别

实现一个优先队列，有两种选项：设置优先级，然后在正确的位置添加元素；或者用入列操作添加元素，然后按照优先级移除它们，示例中我们将会在正确的位置添加元素，因此可以对他们使用默认的出列操作：

	function PriorityQueue() {
	
		var items = [];
		
		function QueueElement ( element, priority ) {
			
			this.element = element;
			this.priority = priority;
		
		}

		this.enqueue = function( element, priority ){
			
			var queueElement = new QueueElement( element, priority );
			
			if ( this.isEmpty ) {
				items.push( queueElement );
			} else {
				var added = false;
				for (var i = 0; i < items.length; i++) {
					if ( queueElement.priority < items[i].priority ) {
						items.splice(i, 0, queueElement);
						added = true;
						break;
					}
				}
				if ( !added ) {
					items.push(queueElement);
				}
			}
		}
	}

默认的Queue类和PriorityQueue类实现上的区别是，要向PriorityQueue添加元素，要创建一个特殊的元素。这个元素包含了要添加到队列的元素（可以是任意类型）以及在队列中的优先级。

如果队列为空，可以直接将元素入列，否则，就需要比较该元素与其他元素的优先级。当找到一个比要添加的元素的Priority值更大（优先级更低）的项时，就把新元素插入到它之前（所以，对于其他优先级相同，但是先添加到队列的元素，我们遵循同样的先进先出原则）。要做到这一点，我们只需要用splice方法即可，一旦找到priority值更大的元素，就插入新元素并终止循环。这样，队列也就根据优先级排序了。

如果要添加的元素priority值大于任何已有的元素，把它添加到队列的末尾就行。

	var priorityQueue = new PriorityQueue();
	priorityQueue.enqueue("John", 2);
	priorityQueue.enqueue("Jack", 1);
	priorityQueue.enqueue("Camila", 1);
	priorityQueue.print();

第一个添加的元素是优先级为2的John。因为此前队列为空，所以他是队列中唯一的元素。接下来，添加了优先级为1的Jack。由于Jack的优先级高于John，它就成为了队列中的第一个元素，然后添加了优先级也为1的Camila。优先级相同被放到Jack之后

我们这里实现的优先队列成为最小优先队列，因为优先的值较小的元素被放置到队列最前面。最大优先队列与之相反。

**循环队列--击鼓传花**

孩子们围成一个圈，把花尽快的传给旁边的人，某一时刻传花停止，花在谁的手里，谁退出圆圈，知道剩下一个孩子

	function hotPotato( nameList, num ) {
		
		var queue = new Queue();
		for ( var i = 0; i < nameList.length; i++ ) {
		
			queue.enqueue( nameList[i] );
		}

		var eliminated = '';
		while( queue.size() > 1 ) {
		
			for ( var i = 0; i < num; i++ ) {
				queue.enqueue(queue.dequeue());
			}
			
			eliminated = queue.dequeue();
			console.log( eliminated + '在游戏中淘汰' );
		} 
		
		return queue.dequeue();
	}

	var names = ['John','Jack','Camila','Ingrid','Carl'];
	var winner = hotPotato(names, 7);
	console.log('胜利者:' + winner);

我们要用到Queue类，首先把所有的名字加入到队列，给定一个数字，然后迭代队列。从队列开头移除一项，再将其添加到队列的末尾，模拟击鼓传花（如果你把话给了旁边的人，你的危险就解除了）。一旦传递次数达到给定的数字，拿着花的人就被淘汰了（从队列中移除）。最后只剩下一个人的时候，就是胜者了。

### 5.链表 ###

第二章我们学习了数组这种数据结构，数组是一种很简单的存储数据序列的数据结构。下面我们会学习如何实现和使用链表这种动态的数据结构，这意味着我们可以从中任意添加或移除项，它会按需进行扩容。

要存储多个元素，数组或列表可能是最常用的数据结构，每种语言收实现了数组，这种数据结构非常方便，提供了一个便利的[]语法来访问她的元素。然而同样也是有缺点的：大多数语言中，数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素。

**链表存储有序的元素集合，****但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和指向下一个元素的引用（也成为指针或链接）组成。**如下图：

![](images/linkedlist.png)

相对于传统的数组，链表的一个好处是，添加和移除元素的时候不需要移动其他元素。然而，链表需要使用指针，因此实现链表需要额外注意。数组的另一个细节是可以直接访问任何位置的任何元素，而想要访问链表中的一个元素，需要从头（表头）开始迭代列表直到找到所需的元素。

现实中也有一些链表的例子。例如康加舞队，每个人是一个元素，手就是链向下一个人的指针。可以向队列中增加人--只要找到想加入的点，断开连接，插入一个人，再重新连接起来。

另一个例子就是寻宝游戏。你有一条线索，这条线索是指向寻找下一个线索的地点的指针。你顺着这条链接去下一个地点，得到另一个指向再下一处的线索。得到列表中间的线索的唯一办法，就是从起点（第一条线索）顺着列表寻找。

还有个说明列表的最流行的例子，就是火车。一列火车是由一系列车厢组成。每节车厢都相互连接，你很容易分离一节车厢，改变它的位置，添加或移除它。每节车厢都是列表的元素，车皮间的连接就是指针，开始搞起链表和双向链表吧

**创建一个链表**

看看我们的LinkedList类的骨架

	function LinkedList() {
		
		var Node = function( element ) {
			this.element = element;
			this.next = null;
		};
		
		var length = 0,
			head = null;
		
		this.append = function( element ) {};
		this.insert = function( position, element ) {};
		this.removeAt = function( position ) {};
		this.remove = function( element ) {};
		this.indexOf = function( element ) {};
		this.isEmpty = function() {};
		this.size = function() {};
		this.toString = function() {};
		this.print = function() {};
	}

LinkedList数据结构还需要一个Node辅助类。Node类表示要加入列表的项。它包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点项的指针。

LinkedList类也有存储列表项的数量的length属性

另一个重要的是，我们还要存储第一个节点的引用。为此可以把这个引用存储在一个成为head的变量中

然后就是LinkedList类的方法。

	append(element):向列表中添加一个新的项
	
	insert(position,element):向列表的特定位置插入一个新的项
	
	remove(element):从列表中移除一项

	indexOf(element):返回元素在列表中的索引，如果列表中没有该元素则返回-1

	removeAt(position):从列表中的特定位置移除一项

	isEmpty():如果链表中不包含任何元素，则返回true，如果链表的长度大于0返回false

	size():返回链表包含的元素的个数。与数组的length属性类似

	toString():由于列表中使用了Node类，就要重新写继承JS对象默认的toString方法，让其只输出元素的值

#### 向链表尾部追加元素 ####
向LinkedList对象尾部添加一个元素时，可能有两种情况：列表为空，添加的是第一个元素，或者不为空，向其追加元素。

我们实现的append方法：

	this.append = function( element ) { 
		
		var node = new Node( element ),
			current;

		if ( head === null ) {

			head = node;
		} else {
			current = head;
			
			while( current.next ) {
				
				current = current.next;
			}

			current.next = node;
		}

		length++;
	};

首先需要做的是把element作为值传入，创建Node项

先来实现第一个场景：向为空的列表添加一个元素。当我们创建一个LinkedList对象时，head会指向null

如果head元素为null（列表为空），就意味着在向列表中添加第一个元素。因此要做的就是让head元素指向node元素。下一个node元素将会自动成为null

向一个空列表中添加一个元素

![](images/12.png)

列表的最后一个节点的下一个元素始终是null

要向列表的尾部添加一个元素，首先需要找到最后一个元素，记住，我们只有第一个元素的引用，因此要循环访问列表，直到最后一项。为此，我们需要一个指向列表中current项的变量。循环访问列表时，当current.next元素为null时，我们就知道已经到达列表尾部。然后要做的就是让当前（也就是最后一个）元素的next指针指向想要添加到列表的节点。

![](images/1.png)

而当一个Node元素被创建时，它的next指针总是null

我们可以通过以下代码来使用和测试目前创建的数据结构：
	
	var list = new LinkedList();
	
	list.append(15);
	list.append(10);

**从链表中移除元素**

现在，我们看看如何从LinkedList对象中移除元素。移除元素也有两种场景：第一种是移除第一个元素，第二种是移除第一个以外的任一元素。我们要实现两种remove方法：第一种是从特定位置移除一个元素，第二种是根据元素的值移除元素。

根据给定位置移除一个元素的方法的实现：

	this.removeAt = function( position ) {
		
		if ( position > -1 && position < length ) {
			
			var current = head,
				previous,
				index = 0;
			
			if ( position === 0 ) {
				
				head = current.next;
			} else {
				
				while ( index++ < position ) {
					
					previous = current;
					current = current.next;	
				}
				
				previous.next = current.next;
			}
		
			length--;
		
			return current.element;
	
		} else {
		
			return null;
		}	
	};

该方法要得到需要移除的元素的位置，就要验证这个位置是否有效，从0到列表的长度（size - 1，因为索引是从0开始的）都是有效的位置，如果不是有效的位置，就返回null（意思就是没有从列表中移除元素）。


我们要从列表中移除第一个元素：

![](images/21.png)

因此，如果要移除第一个元素，就要让head指向列表的第二个元素。我们将用current变量创建一个对列表中第一个元素的引用--我们还会用它来迭代列表。这样current变量就是列表中第一个元素的引用。如果head赋为current.next，就会移除第一个元素。

现在，假设我们要移除列表的最后一项或中间的某一项。为此，需要依靠一个细节来迭代列表，直到到达目标位置（我们用一个用于内部控制和递增的index变量）：current变量总是为对所循环列表的当前元素的引用。我们还需要一个当前元素的前一个元素的引用；它被命名为previous

因此，要从列表中移除当前元素，要做的就是将previous.next和current.next链接起来。这样，当前元素就会被丢弃到计算机内存中，等待着被垃圾回收器清除。

移除最后一个元素：

![](images/22.png)

对于最后一个元素，当我们在跳出循环时，current变量将是对列表中最后一个元素的引用（要移除的元素）。current.next的值将是null（因为它是最后一个元素）。由于还保留了对previous元素的引用（当前元素的前一个元素），previous.next的值将变为current.next。

![](images/2.png)

current变量是将要移除元素的引用。previous变量是要移除的前一个元素的引用。那么要移除current元素，需要做的就是将previous.next与current.next链接起来。逻辑是好使的

**在任意位置插入一个元素**

接下里实现insert方法，使用这个方法可以在任意位置插入一个元素

	this.insert = function( position, element ) {

		if ( position >= 0 && position <= length ) {
			
			var node = new Node( element ),
				current = head,
				previous,
				index = 0;
			
			if ( position === 0 ) {
				
				node.next = current;
				head = node;
			} else {
			
				while ( index++ < position ) {
				
					previous = current;
				
					current = current.next;
				}
		
				node.next = current;
				previous.next = node;
			}
		
			length++;
	
			return true;
		} else {
			return false;
		}
	};

由于我们处理的是位置，就要检查越界值，如果越界了就返回false值，表示没有添加项到列表中

现在我们要处理不同的场景。第一种场景，需要在列表的起点添加一个元素，也就是第一个位置

![](images/first-ofLinkedList.png)

current变量是对列表中第一个元素的引用。要做的是把node.next的值设为current（列表中第一个元素）。现在head和node.next都指向了current。接下来要做的就是把head的引用改为node，这样列表中就有了一个新元素。

接下来处理第二种场景：在列表中间或尾部添加一个元素。首先我们要循环访问列表，找到目标位置。当跳出循环时，current变量将是对想要插入新元素的位置之后一个元素的引用，而previous将是对想要插入新元素的位置之前一个元素的引用。

这种情况下，我们要在previous和current之间添加新项。因此，首先把新项（node）和当前项链接起来，然后改变previous和current之间的链接。我们还要让previous.next指向node。

![](images/56previous.png)

如果我们试想向最后一个位置添加一个新元素，previous将是对列表最后一项的引用，而current将是null。这种情况下，node.next将指向current，而previous.next将指向node，这样列表中就有了一个新的项

![](images/56.png)

首先把node.next的值指向current，然后把previous.next的值指向node

**实现其他方法**

toString

它会把LinkedList对象转换成一个字符串，下面就是toString方法的实现：

	this.toString = function() {
		
		var current = head,
			string = '';
		

		while ( current ) {
			string = current.element;
			current = current.next;
		}
		
		return string;
	}

首先，要访问列表中的所有元素，就要有个起点，也就是head。我们会把current变量当作索引，控制循环访问列表。我们还要初始化用于拼接元素值得变量。

接下来就是循环访问列表中的每个元素。我们要用current来检查元素是否存在（如果列表为空，或是到达列表中最后一个元素的下一位（null），while循环中的代码就不会执行）。然后我们就得到了元素的内容，将其拼接到字符串中，最后，继续迭代下一个元素。

最后，返回列表中内容的字符串。

**indexOf方法**

indexOf是我们下一个要实现的方法。indexOf方法接受一个元素的值，如果元素找到就返回它的位置，否则返回-1.

	this.indexOf = function( element ) {
		
		var current = head,
			index = -1;

		while( current ) {

			if ( element === current.element ) {
				return index;
			}
			
			index++;
			
			current = current.next;
		}

		return -1;
	};

我们需要一个变量来帮助我们循环访问变量，这个变量就是current，他的初始值是head（列表的第一个元素--我们还要一个index变量来计算位置数。然后循环访问元素，检查当前元素是否是我们要找的。如果是，就返回它的位置，否则的话就继续计数，检查列表中的下一个节点。

如果列表为空，或到达列表的尾部（current = current.next将是null），循环就不会执行，如果没找到值，就返回-1

	this.remove = function(element) {

		var index = this.indexOf(element);
		
		return this.removeAt(index);
	};

我们已经有一个移除给定位置的一个元素的removeAt方法。现在有了indexOf方法，如果传入元素的值，就能找到他的位置，然后调用removeAt方法并传入找到的位置。

**isEmpty、size、getHead方法**


	this.isEmpty = function() {

		return length === 0;
	};

	this.size = function() {

		return length;
	};

	this.getHead = function() {

		return head;
	};

head变量是LinkedList类的私有变量（这意味着她不能在LinkedList实例外部被访问和更改，只有通过LinkedList实例才可以）。但如果我们需要在类的实现外部循环访问列表，就要提供一种获取类的第一个元素的方法。

#### 双向链表 ####

链表有多种不同的类型，就包括双向链表。双向链表和普通链表的区别是，链表中，一个节点只有链向下一个元素，双向链表，链表是双向的：一个链向下一个元素，另一个链向前一个元素

如图：

![](images/double8.png)

先从实现DoublyLinkedList类开始所需的变动开始：

	function DoublyLinkedList() {
		
		var Node = function( element ) {

			this.element = element;
			this.next = null;
			this.prev = null;
		};

		var length = 0;
		var head = null;
		var tail = null;

		//方法
	}

这里LinkedList类和DoublyLinkedList类之间的区别是，Node类有prev属性，一个新的指针，并且也有用来保存对列表最后一项的引用的tail属性。

双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。我们也可以访问一个特定节点的下一个或前一个元素。在单项链表中，如果迭代列表时错过了要找的元素，就要从头开始再找，双向链表就不用了。

**在任意位置插入一个新元素**

与单项链表相似，区别是，链表只要控制一个next指针，双向链表要控制next和prev两个指针。

算法如下：

	this.insert = function( position, element ) {
		
		if ( position >= 0 && position <= length ) {

			var node = new Node( element ),

				current = head,
				previous,
				index = 0;

			if ( position === 0 ) {

				if ( !head ) {

					head = node;
					tail = node;
				} else {

					node.next = current;
					current.prev = node;
			
					head = node;
				}
			} else if ( position === length ) {

				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			} else {
				
				while ( index++ < position ) {

					previous = current;

					current = current.next;
				}
		
				node.next = current;
				previous.next = node;

				current.prev = node;
				node.prev = previous;
			}

			length++;
			return true;
		} else {

			return false;
		}
	};

在列表的第一个位置插入一个新元素。如果列表为空，只需要把head和tail指向这个新节点，如果不为空，current变量将是对列表中第一个元素的引用。就像单向链表中，把node.next设置为current，而head将指向node（它将成为列表中的第一个元素）。不同之处是我们还要指向上一个元素的指针设置一个值。current.prev指针将由指向null变为指向新元素。node.prev指针已经是null，因此不需要更新任何东西。

如图：

![](images/double7.png)

假如我们要在列表的最后一项添加一个新元素。这是一个特殊情况，因为我们还控制着指向最后最后一个元素的指针（tail）。current变量将引用最后一个元素。然后开始建立第一个链接：node.prev将引用current。current.next指针将指向node（由于构造函数，node.next已经指向了null），最后一件事就是更新tail，它将由指向current变为指向node。

如图：

![](images/double6.png)

第三种情况是：在列表中间插入一个元素。就像之前的方法中，迭代列表，直到到达要找的位置。我们将在current和previous元素之间插入新元素。首先，node.next将指向current，而previous.next将指向node，这样就不会丢失节点之间的链接。然后要处理所有的链接：current.prev将指向node，而node.prev将指向previous。

如图：

![](images/double5.png)

我们可以改进insert和remove两个方法。如果position大于length / 2，最好从尾部开始迭代，性能改进

**从任意位置移除元素**

从双向链表中移除元素跟链表相似。唯一的区别是还要设置前一个位置的指针

	this.removeAt = function( position ) {

		if ( position > -1 && position < length ) {

			var current = head,
			
				previous,

				index = 0;

			if ( position === 0 ) {

				head = current.next;

				if ( length === 1 ) {


					tail = null;

				} else {

					head.prev = null;
		
				}
			} else if ( position === length-1 ) {

				current = tail;

				tail = current.prev;

				tail.next = null;

			} else {

				while ( index++ < position ) {

					previous = current;

					current = current.next;
				}

				previous.next = current.next;
	
				current.next.prev = previous;

			}

			length--;

			return current.element;

		} else {

			return null;
		}

	};


我们要处理三种情况：从头部、中间和尾部移除元素。

第一种：current变量是对列表中第一个元素的引用，也就是我们想要移除的元素。需要做的是改变head的引用，将current改为下一个元素（current.next)。但我们还要更新current.next指向上一个元素的指针（因为第一个元素的prev指针是null）。因此，把head.prev的引用改为null(因为head也只想列表中新的第一个元素，或者也可以用current.next.prev).由于还需要控制tail的引用，我们可以检查要移除的元素是否是第一个元素，如果是，只需要把tail设为null。

如图：

![](images/double4.png)

第二种：既然已经有了对最后一个元素的引用（tail），我们就不需要为找到他而进行迭代列表。这样我们也就可以把tail的引用赋给current变量。接下来，需要把tail的引用更新为列表中倒数第二个额元素（current.prev，或tail.prev）。既然tail指向了倒数第二个元素，我们就只需要把next指针更新为null（tail.next=null)

如图：

![](images/double3.png)

第三种：首先迭代列表，直到达到要找的位置。current变量所引用的就是要移除的元素。那么要移除他，我们就可以通过更新previous.next和current.next.prev的引用，在列表中跳过他。因此，previous.next将指向current.next，而current.next.prev将指向previous

如图：

![](images/double2.png)

**循环列表**

循环列表可以向链表一样只有单项引用，也可以向双向链表一样有双向引用，循环链表和链表之间的唯一区别是，最后一个元素指向下一个元素的指针（tail.next)不是null，而是指向了第一个元素（head），如图

![](images/double1.png)


### 集合 ###

数组（列表）、栈、队列和链表是顺序数据结构，这章就看看集合这种数据结构

集合是由一组无序且唯一（不能重复）的项组成。这个数据结构使用了有限集合的数学概念。学习中我们要知道数学中的集合的相关特性，如空集、表示方式，以及操作（交集、并集、差集）。

**创建一个集合**

这章我们的学习要以Set类为基础了，Set类是ECMAScript6的。Set类的骨架是：

	function Set() {

		var items = {};
	}


我们用对象而不是数组来实现集合，下面看看声明一些集合可用的方法


	add(value):向集合中添加一个新的项

	remove(value):从集合中移除一个值

	has(value):如果集合中有这个值，返回true，否则返回false

	clear():移除集合中的所有项

	size():返回集合中包含元素的数量，与数组的length类似

	values():返回一个包含集合中所有值的数组

**has(value)方法**

因为这个方法会被add、remove方法调用就先实现这个方法

	this.has = function(value) {
		
		return value in items;
	}

我们用对象来存储集合的值，可以用JS的in操作符来验证给定的值是否是items对象的属性

更好的实现方法如下：

	this.has = function(value) {
		
		return items.hasOwnProperty(value);
	}

所有JS对象都有hasOwnProperty方法，这个方法返回一个表明对象是否具有特定属性的布尔值

**add方法**

	this.add = function(value) {
		
		if (!this.has(value)) {

			items[value] = value;
			return true;
		}

		return false;
	}

对于给定的value，可以检查它是否存在集合中。如果不存在，就把value添加到集合中，返回true，表示添加了这个值。如果已经有了这个值，返回false，表示没有添加它

**remove和clear方法**

	this.remove = function(value) {

		if ( this.has(value) ) {

			delete items[value];
		
			return true;
		}
		
		return false;
	};

在remove方法中，我们会验证给定的value是否存在于集合中，存在就从集合中移除value，并返回true，表示值被移除；否则返回false


既然用对象来存储集合中的items对象，就可以简单地使用delete操作符从items对象移除属性

使用Set类的示例

	var set = new Set();

	set.add(1);

	set.add(2);

执行之后打印出来会是Object { 1: 1, 2: 2 },
可以看到，这是一个有两个属性的对象。属性名就是添加到集合的值，同时也是属性值

要移除集合中所有值，可以用clear方法

	this.clear = function() {

		items = {};
	}

要重置items对象，需要做的是把一个空对象重新赋值给它。也可以迭代集合，用remove方法依次移除所有值

**size方法**

三种实现方法

第一种用length变量，每当使用add或remove时控制它，就像上一章使用LinkedList类一样

第二种，使用JS内建的Object类的一个内建函数

	this.size = function() {

		return Object.keys(items).length;
	};

JS的Object类有一个keys方法，它返回一个包含给定对象所有属性的数组。在这种情况下，可以使用这个数组的length属性来返回items对象的属性个数。

第三种手动提取items对象的每个属性，记录属性的个数并返回这个数字。这个方法可以在任何浏览器运行，并与之前的代码等价

	this.sizeLegacy = function() {

		var count = 0;
		
		for ( var prop in items ) {

			if ( items.hasOwnProperty(prop) ) {

				++count;
			}
		};
		
		return count;
	};

遍历items对象的所有属性，检查它们是否是对象自身的属性。如果是，就递增count变量的值，最后在结束的时候返回这个数字

不能简单的使用for-in语句遍历items对象的属性，递增count变量的值，还要用has方法验证items对象是否具有该属性，因为对象的原型包含了额外的属性（属性既有继承自JS的Object类的，也有属于对象自身，未用于数据结构的）。

**values方法**

values方法用了相同的逻辑，提取items对象的所有属性，以数组形式返回：

	this.values = function() {

		return Object.keys(items);
	};

以上代码是受浏览器版本的限制的，通用的版本如下：

	this.valuesLegacy = function() {

		var keys = [];

		for ( var key in items ) {

			keys.push(key);
		}

		return keys;
	};

遍历items对象的所有属性，把它们添加到一个数组中，并返回这个数组

**使用Set类**

现在数据结构已经完成，开始使用

	var set = new Set();

	set.add(1);

	console.log(set.values());

	console.log(set.has(1));

	console.log(set.size());

	set.add(2);

	console.log(set.values());

	console.log(set.has(2));

	console.log(set.size());

	set.remove(1);

	console.log(set.values());

	set.remove(2);

	console.log(set.values());

现在我们有了一个和ES6很相似的Set类，也可以用数组代替对象，存储元素

#### 集合操作 ####

并集：给定的两个集合，返回一个包含两个集合所有元素的新集合

交集：给定的两个集合，返回一个包含两个集合共有元素的新集合

差集：对于给定的两个集合，返回一个包含所有存在于第一个集合而不存在于第二个集合的元素的新集合

子集：验证一个给定集合是否是另一个集合的子集

**并集**

至于数学表达的形式和方式不在赘述，直接看代码，来实现Set类的union方法

	this.union = function(otherSet) {

		var unionSet = new Set();

		var values = this.values();

		for ( var i = 0; i < values.length; i++ ) {

			unionSet.add(values[i]);

		}

		values = otherSet.values();

		for ( var i = 0; i < values.length; i++ ) {

			unionSet.add(values[i]);
		}

		return unionSet;
	};


测试代码

	var setA = new Set();

	setA,add(1);

	setA.add(2);

	setA.add(3);

	var setB = new Set();

	setB.add(3);

	setB.add(4);

	setB.add(5);

	setB.add(6);

	var unionAB = setA.union(setB);

	console.log(unionAB.values());

输出为["1", "2", "3", "4", "5", "6"]。元素3在A和B中都存在，它在集合中只出现一次。

**交集**

	this.intersection = function(otherSet) {
		
		var intersectionSet = new Set();

		var values = this.values();

		for ( var i = 0; i < values.length; i++ ) {

			if ( otherSet.has( values[i] ) ) {

				intersectionSet.add( values[i] );
			}
		}

		return intersectionSet;
	}

intersection方法需要找到当前Set实例中，所有也存在于给定Set实例中的元素。首先创建一个新的Set实例，这样就能用它返回共有的元素。接下来，遍历当前Set实例所有的值，验证它们是否也存在于otherSet实例。可以用这一章前面实现的has方法来验证元素是否存在于Set实例中。然后，如果这个值也存在于另一个Set实例中，就将其添加到创建的intersectionSet变量中，最后返回它

测试

	var setA = new Set();

	setA.add(1);

	setA.add(2);

	setA.add(3);

	var setB = new Set();

	setB.add(2);

	setB.add(3);

	setB.add(4);

	var intersectionAB = setA.intersection(setB);

	console.log(intersectionAB.values());

输出["2", "3"]

**差集**

两个集合AB，差集表示A-B，A中没有和B相同的元素

	this.difference = function(otherSet) {
		
		var differenceSet = new Set();

		var values = this.values();

		for ( var i = 0; i < values.length; i++ ) {

			if ( !otherSet.has( values[i] ) ) {

				differenceSet.add( values[i] );
			} 
		}

		return differenceSet;
	};

intersection方法会得到所有同时存在于两个集合的值。而difference方法会得到所有存在于集合A但不存在于B的值。因此这两个方法在实现上唯一的区别是行。只获取不存在于otherSet实例中的值，而不是也存在于其中的值

测试

	var setA = new Set();

	setA.add(1);

	setA.add(2);

	setA.add(3);

	var setB = new Set();

	setB.add(2);

	setB.add(3);

	setB.add(4);

	var differenceAB = setA.difference(setB);

	console.log( differenceAB.values() );

**子集**

集合A是B的子集

	this.subset = function( otherSet ) {

		if ( this.size() > otherSet.size() ) {

			return false;
		} else {

			var values = this.values();
			
			for ( var i = 0; i < values.length; i++ ) {

				if ( !otherSet.has( values[i] ) ) {

					return false;
				}
			}
			
			return true;
			}
	};

首先要验证当前Set实例的大小，如果当前实例中的元素比otherSet实例更多，它就不是一个子集。子集的元素个数需要小于或等于要比较的集合

接下来要遍历集合中的所有元素，验证这些元素也存在于otherSet中，如果任何元素不存在于otherSet中，就意味着它不是一个子集，返回false。如果所有元素都存在于otherSet中，行就不会被执行，那么就返回true

测试

	var setA = new Set();

	setA.add(1);

	setA.add(2);

	var SetB = new Set();

	setB.add(1);

	setB.add(2);

	setB.add(3);

	var setC = new Set();

	setC.add(2);

	setC.add(3);

	setC.add(4);

	console.log( setA.subset(setB) );

	console.log( setA.subset(setC) );

我们有3个集合：setA是setB的子集，因此输出true，然而setA不是setC的子集，因此输出false


### 字典和散列 ###

字典和散列表是用来存储唯一值（不重复的值）的数据结构。集合、字典和散列表可以存储不重复的值。集合中的重点是每个值本身，并作为主要元素。字典中我们用[键, 值]的形式来存储数据。散列表中也是一样。不同的地方我们后续说。

**字典**

字典中，存储的是[键, 值]对，其中键名是用来查询特定元素的。字典和集合很相似，集合以[值, 值]得形式来存储元素，字典则是以[键, 值]的形式来存储元素。字典有时也称作映射。

**创作一个字典**

与Set类类似，ES6同样包含了一个Map类的实现，即我们说的字典

Dictionary类的骨架：

	function Dictionary() {

		var items = {};
	}

与Set类类似，我们将在一个Object的实例而不是数组中存储元素，声明的方法有

	set(key, value):向字典中添加新元素

	remove(key):通过使用键值来从字典中移除键值对应的数据值

	has(key):如果某个键值存在于这个字典中，则返回true，反之返回false

	get(key):通过键值查找特定的数值并返回

	clear():将这个字典中的所有元素全部删除

	size():返回字典中所有元素的数据量，类似于数组的length属性

	keys():将字典中所包含的所有键名以数组形式返回

	values():将字典中所包含的所有数值以数组形式返回

**1.has和set方法**

	this.has = function(key) {

		return key in items;

	};

与实现Set类一样，我们使用JS的in操作符来验证一个key是否是items对象的一个属性，set方法的实现

	this.set = function(key, value) {

		items[key] = value;
	};

该方法接受一个key和一个value作为参数。我们将value设为items对象的key属性的值，它可以用来给字典添加一个新的值，或用来更新一个已有的值

**2.remove方法**

与Set类不同的是我们将先搜索key不是value

	this.remove = function(key) {

		if ( this.has(key) ) {

			delete items[key];
			return true;
		}
		return false;
	};

然后我们可以用JS的remove操作符从items对象中移除key属性


**get和values方法**

如果我们想在字典中查找一个特定的项，并检索它的值，方法如下

	this.get = function(key) {

		return this.has(key) ? items[key] : undfined;
	};
get方法首先会验证我们想要检索的值是否存在（通过检查key值），如果存在将返回该值，反之将返回一个undefined值。

values方法。以数组的形式返回字典中所有values实例的值

	this.values  = function() {

		var values = {};

		for ( var k in items ) {

			if ( this.has(k) ) {

				values.push(items[k]);
			}
		}
		
		return values;
	};

首先，我们遍历items对象的所有属性值，为确定值存在，我们使用has函数来验证key确实存在，然后将它的值加入values数组。最后，我们就能返回所有找到的值。

**clear、size、keys和getItems方法**

clear、size和keys这些方法和Set类是完全一样的，最后我们验证items属性输出的值。我们可以实现一个返回items变量的方法，叫做getItems

	this.getItems = function() {

		return items;
	}

**使用Dictionary类**

首先我们创建一个Dictionary类的实例，然后给它添加三条电子邮件地址。我们将会使用这个dictionary实例来实现一个电子邮件地址簿

	var dictionary = new Dictionary();

	dictionary.set('Gandary', 'gandary@email.com');

	dictionary.set('John', 'john@email.com');

	dictionary.set('Tyrion', 'tyrion@email.com');

执行下面的结果返回true

	console.log(dictionary.has('Gandary'));

下面的代码将输出3，因为我们添加了3个元素

	console.log(dictionary.size());

执行如下代码

	console.log(dictionary.keys());

	console.log(dictionary.values()):

	conaole.log(dictionary.get('Tyrion'));

输出的结果

	["Gandary", "John", "Tyrion"]
	
	["gandary@email.com", "john@email.com", "tyrion@email.com"]

	tyrion@email.com

最后执行

	dictionary.remove('John');

	console.log(dictionary.keys());

	console.log(dictionary.values());

	console.log(dictionary.getItems());

输出结果

	["Gandary", "Tyrion"]
	
	["gandary@email.com", "tyrion@email.com"]

	Object {Gandary:"gandary@email.com", Tyrion: "tyrion@email.com"}

移除了一个元素，现在的dictionary实例只包含了两个元素。最下面的表现了items对象的内部结构

**散列表**

首先会看到HashTable类，也叫做HashMap类，是Dictionary类的一种散列表表现方式

散列算法的作用是尽可能快的在数据结构中找到一个值，之前的章节中你已经知道如果要在数据结构中获得一个值（使用get方法），需要遍历整个数据结构来找到它。如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后返回该值在表中的地址。

举个例子，我们使用在前一节中使用的电子邮件地址簿。我们将要使用最常见的散列函数---“lose lose”散列函数，方法是简单地将每个键值中的每个字母的ASCII值相加。

![](images/hashtable.png)

**创建一个散列表**

我们将使用数组来表示我们的数据结构，该数据结构和上个话题中的图表所用的非常相似

骨架

	function HashTable() {

		var table = [];
	}

然后添加方法，我们给每个类实现三个基础方法

	put(key, value):项散列表添加一个新的项（也能更新散列表）

	remove(key):根据键值从散列表中移除值

	get(key):返回根据键值检索到的特定的值

实现这些方法之前我们首先要实现第一个方法是散列函数，它是HashTable类中的一个私有方法

	var loseloseHashCode = function(key) {

		var hash = 0;

		for ( var i = 0; i < key.length; i++ ) {

			hash += key.charCodeAt(i);
		}

		return hash % 37;
	};

给定一个key参数，我们就能根据组成key的每个字符的ASCII码值得和得到一个数字。所以，首先需要一个变量来存储这个总和。然后，遍历keybingjiangcongASCII表中查到的每个字符对应的ASCII值加到hash变量中（可以使用JS的String类中的charCodeAt方法）。最后，返回hash值。为了得到比较小的数值，我们会使用hash值得一个任意数做除法的余数（mod）。

有了散列函数，我们就实现put方法

	this.put = function(key, value) {

		var position = loseloseHashCode(key);

		console.log(position + '-' + key);

		table[position] = value;
	};

首先，根据给定的key，我们需要根据所创建的散列函数计算出它在表中的位置。为了便于展示信息，我们将计算出的位置输出至控制台。由于它不是必须的，我们也可以将这行代码移除。然后要做的，是将value参数添加到用散列函数计算的对应的位置上。

从HashTable实例中查找一个值也很简单，为此我们实现一个get方法

	this.get = function( key ) {

		return table[loseloseHashCode(key)];
	};

首先，我们会使用所创建的散列函数来求出给定key所对应的位置。这个函数会返回值得位置，因此我们所要做的就是根据这个位置从数组table中获得这个值

我们要实现的最后一个方法是remove方法

	this.remove = function(key) {

		table[loseloseHashCode(key)] = undefined;
	};

要从HashTable实例中移除一个元素，只需要求出元素的位置（可以用散列函数来获取）并赋值为unfined

对于HashTable类来说，我们不需要像ArrayList类一样从table数组中将位置也移除。由于元素分布于整个数组范围内，一些位置会没有任何元素占据，并默认为unfined值。我们也不能将位置本身从数组中移除（这回改变其他元素的位置），否则，当下次需要获得或移除一个元素的时候，这个元素会不在我们用散列函数求出的位置上。

**使用HashTable类**

测试HashTable类

	var hash = new HashTable();

	hash.put('Gandalf', 'gandalf@email.com');

	hash.put('John', 'john@email.com');

	hash.put('Tyrion', 'tyrion@email.com');

执行结果

	19 - Gandalf

	29 - John

	16 - Tyrion

下图的图表展现了包含这三个元素的HashTable数据结构

![](images/hashtable2.png)

测试get方法

	console.log(hash.get('Gandalf'));

	console.log(has.get('Loiane'));

输出结果

	gandalf@email.com

	undefined
由于Gandalf是一个在散列表中存在的键，get方法将会返回它的值。由于Loiane是一个不存在的键，当我们试图在数组中根据位置来获取值得时候（一个有散列表生成的位置），返回值将会是unfined（即不存在）。

然后，我们试图从散列表中移除Gandalf

	hash.remove('Gandalf');

	console.log(hash.get('Gandalf'));

由于Gandalf不再存在于表中，hash.get('Gandalf')方法将会在控制台上给出undefined的输出结果

**散列表和散列集合**

散列表和散列映射是一样的，在一些编程语言中，还有一种叫做散列集合的实现。散列集合是由一个集合构成，但是插入、移除或获取元素时，使用的散列函数。我们可以使用本章节中实现的所有代码来实现散列集合，不同之处是，不再添加键值对，而是只插入值而没有键。例如，可以使用散列集合来存储所有的英语单词（不包括它们的定义）。和集合相似，散列集合只存储唯一的不重复的值。

**处理散列表中的冲突**

有时候，一些键会有相同的散列值。不同的值在散列表中对应相同的位置的时候，我们称之为冲突，例如下面代码的结果

	var hash = new HashTable();

	hash.put('Gandalf', 'gandalf@email.com');

	hash.put('John', 'johnsnow@email.com');

	hash.put('Tyrion', 'tyrion@email.com');

	hash.put('Aaron', 'aaron@email.com');

	hash.put('Dnnie', 'donnie@email.com');

	hash.put('Ana', 'ana@email.com');

	hash.put('Jonathan', 'jonathan@email.com');

	hash.put('Jamie', 'jamie@email.com');

	hash.put('Sue', 'sue@email.com');

	hash.put('Mindy', 'mindy@email.com');

	hash.put('Paul', 'paul@email.com');

	hash.put('Nathan', 'nathan@email.com');	

输出结果

	19 - Gandalf

	29 - John

	16 - Tyrion

	16 - Aaron

	13 - Dnnie

	13 - Ana

	5 - Jonathan

	5 - Jamie

	5 - Sue

	32 - Mindy

	32 - Paul

	10 - Nathan	
注意，Tyrion和Aaron有相同的散列值。还有几个也是

那HashTable实例会怎样呢？执行之前的代码后散列表会有哪些值呢？

我们用个print方法，在控制台上输出HashTable中的值

	this.print = function() {
	
		for ( var i = 0; i < table.length; ++i ) {

			if ( table[i] !== undefined ) {

				console.log(i + ":" + table[i]);
			}
		}

	};

首先，遍历数组中的所有元素，当某个位置上有值得时候，会在控制台输出位置和对应的值

	hash.print();
	
	5:sue@email.com
	
	10:nathan@email.com

	13:ana@email.com

	16:aaron@email.com

	19:gandalf@email.com

	29:johnsnow@email.com

	32:paul@email.com

Johnathan、Jamie和Sue有相同的散列值，也就是5，由于Sue是最后一个被添加的，Sue将是在HashTable实例中占据位置5的元素，。首先，Johnathan会占据这个位置，然后Jamie会覆盖它，然后Sue会再次覆盖。其他冲突的元素也是一样的原因

使用一个数据结构来保存数据的目的显然不是去丢失数据，而是通过某种方法将它们全部保存起来，因此，这种情况发生时，我们也有解决方案：分离链接、线性探查和双散列，我们说前两种。

**1.分离链接**

分离链接方法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的最简单的方法，但在HashTable实例之外还需要额外的存储空间。

例如，我们在之前的测试代码中使用分离链接的话，输出的结果如下图

![](images/vp.png)

在位置5上，将会包含3个元素的LinkedList实例；在位置13、16和32上，将会有包含两个元素的LinkedList实例；在位置10、19和29上，将会有包含单个元素的LinkedList实例。

对于实现一个使用了分离链接的HashTable实例，我们需要一个新的辅助类来表示将要加入LinkedList实例的元素。我们管它叫做ValuePair类（在HashTable类内部定义）

	var ValuePair = function(key, value) {

		this.key = key;

		this.value = value;

		this.toString = function() {

			return '[' + this.key + '-' + this.value + ']';
		}
	};

这个类只会将key和value存储在一个Object实例中。我们也重写了toString方法，以便之后在浏览器控制台输出结果。

**put方法**

我们实现第一个方法，put方法

	this.put = function(key, value) {

		var position = loseloseHashCode(key);
		
		if ( table[position] == undefined ) {

			table[position] = new LinkedList();
		}

		table[position].append( new ValuePair(key, value) );
	};

这个方法，将验证要加入的新元素的位置是否已经被占据。如果这个位置是第一次被加入元素，我们将会在这个位置上初始化一个LinkedList类的实例。然后，使用append方法向LinkedList实例添加一个ValuePair实例。

**get方法**

然后，我们实现用来获取特定值得get方法

	this.get = function(key) {

		var position = loseloseHashCode(key);

		if (table[position] !== undefined) {

			var current = table[position].getHead();

			while(current.next) {

				if ( current.element.key === key ) {

					return current.element.value;
			
				}
	
				current = current.next;

			}

			if ( current.element.key === key ) {

				return current.element.value;
			}
		}

		return undefined;
	};

我们要做的第一个验证，是确定在特定的位置上是否有元素存在，如果没有，则返回一个undefined表示HashTable实例中没有找到这个值。如果在这个位置上有值存在，我们知道这是一个LinkedList实例。现在要做的是遍历这个链表来寻找我们需要的元素。在遍历之前先要获取链表表头的引用，然后就可以从链表的头部遍历到尾部（current.next将会是null）。

Node链表包含next指针和element属性。而element属性又是ValuePair的实例，所以它又有value和key属性。可以通过current.element.next来获取Node链表的key属性，并通过比较它来确定它是否就是我们要找的键。（这就是要使用ValuePair这个辅助来来存储元素的原因，我们不能简单地存储值本身，这样就不能确定哪个值对应着特定的键。）如果key值相同，就返回Node的值；如果不相同，就继续遍历链表，访问下一个节点。

如果要找的元素是链表的第一个或最后一个节点，那么就不会进入while循环的内部。因此，需要在行处理这种特殊的情况。

**remove方法**

使用分离链表方法从HashTable实例中移除一个元素和之前在本章实现的remove方法有一些不同。现在使用的是链表，我们需要从链表中移除一个元素。

	this.remove = function(key) {

		var position = loseloseHashCode(key);

		if ( table[position] !== undefined ) {

			var current = table[position].getHead();

			while(current.next) {

				if ( current.element.key === key ) {

					table[position].remove(current.element);
		
					if ( table[position].isEmpty() ) {

						table[position] = undefined;
					}
				
					return true;

				}

				current = current.next;
			}


			if (current.element.key === key) {


				table[position].remove(current.element);

				if ( table[position].isEmpty() ) {

					table[position] = undefined;

				}
	
				return true;

			}
		}

		return false;
	};

在使用remove方法中，我们使用和get方法一样的步骤找到要找的元素。遍历LinkedList实例时，如果链表中的current元素就是要找的元素，使用remove方法将其从链表中移除。然后进行一步额外的验证：如果链表为空，就将散列表这个位置的值设为undefined。这样搜索一个元素或打印它的内容的时候，就可以跳过这位置。最后，返回true表示这个元素已经被移除或在最后返回false表示这个元素在散列表中不存在。同样，需要和get方法一样，处理元素在第一个或最后一个的情况。

重写了这三个方法，我们就拥有了一个使用了分离链表方法来处理冲突的HashMap实例。

**2.线性探查**

另一种解决冲突的方法是线性探查。当向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试index+2的位置，以此类推。

**put方法**

	this.put = function(key,value) {

		var position = loseloseHasCode(key);

		if ( table[position] == undefined ) {

			table[position] = new ValuePair(key, value);

		} else {

			var index = ++position;

			while( table[index] != undefined ) {

				index++;

			}

			table[index] = new ValuePair(key, value);
		}
	};

和之前一样，先获得由散列函数生成的位置，然后验证这个位置是否有元素存在（如果这个位置被占据了，将会通过行的验证）。如果没有元素存在，就在这个位置加入新元素。

如果这个位置已经被占据了，需要找到下一个没有被占据的位置（position的值是undefined），因此我们声明一个index变量并赋值为position+1（在变量名使用自增运算符++会先递增变量然后再将其赋值给index）。然后验证这个位置是否被占据，如果被占据了，继续将index递增，直到找到一个没有被占据的位置。然后要做的，就是将值分配到这个位置。

执行之后的结果，如下图：

![](images/vp2.png)

模拟一下散列表中的插入操作

①试着插入Gandalf。它的散列值是19，由于散列表刚刚被创建，位置19还是空的--可以在这里插入数据。

②试着在位置29插入John。它也是空的，所以可以插入这个姓名

③试着在位置16插入Tyrion，它也是空的，所以可以插入这个姓名

④试着插入Aaron，它的散列值也是16.位置16已经被Tyrion占据了，所以需要检查索引值为position+1的位置（16+1）。位置17是空的，所以可以在位置17插入Aaron

⑤接着，试着在位置13插入Donnie。它也是空的，所以可以插入

⑥想在位置13插入Ana，但是这个位置被占据了。因此在位置14进行尝试，它是空的，所以可以在这里插入姓名

⑦然后，在位置5插入Jonathan，这个位置是空的，所以可以插入

⑧试着在位置5插入Jamie，但是这个位置被占据了。所以调至位置6，这个位置也是空的，因此可以插入

⑨试着在位置5插入Sue，但是位置被占据了，跳至位置6也被占据了这个位置，接着跳至位置7，这里是空的，所以可以在这里插入姓名

以此类推

**get方法**

	this.get = function(key) {

		var position = loseloseHashCode(key);

		if ( table[position] !== undefined ) {

			if ( table[position].key === key ) {

				return table[position].value;
			} else {

				var index = ++position;

				while( table[index] === undefined || table[index].key !== key ) {

					index++;
			
				}

				if ( table[index].key === key ) {

					return table[index].value;

				}
			}
		}

		return undefined;

	};

要获得一个键对应的值，先要确定这个键存在，如果不存在说明要查找的值不在散列表中，因此可以返回undefined。如果这个键存在，需要检查我们要找的值是否就是这个位置上的值。如果是就返回这个值。

如果不是，就在散列表中的下一个位置继续查找，直到找到一个键值与我们要找的键值相同的元素。然后，验证一下当前项就是我们要找的项，并且将他的值返回。

我们无法确定要找的元素实际上在哪个位置上，这就是使用ValuePair来表示HashTable元素的原因

**remove方法**

remove方法和get方法基本相同，不同之处在于行，他们将会由下面的代码代替：

	table[index] = undefined;

要移除一个元素，只需要给其赋值为undefined，来表示这个位置不再被占据并且可以在必要时接受一个新元素。

**创建更好的散列函数**

我们实现的“loselose”散列函数并不是一个表现良好的散列函数，因为会长生太多的冲突，如果我们使用这个函数的话，会产生各种各样的冲突。一个表现良好的散列函数是有几个方面构成：插入和检索元素的时间（性能），当然也包括较低的冲突可能性。下面是个推荐，比loselose更好

	var djb2HashCode = function(key) {


		var hash = 5381;

		for ( var i = 0; i < key.length; i++ ) {

			hash = hash * 33 + key.charCodeAt(i);

		}

		return hash % 1013;
	};

它包括初始化一个hash变量并赋值为一个质数（大多数实现使用5318）。然后迭代参数key，将hash与33相乘（用来作为一个魔力数），并和当前迭代到的字符的ASCII码值相加。

最后，我们将使用相加的和与另一个随机质数（比我们认为的散列值的大小要大）相除的余数。

如果再次执行代码，下面是结果：

	798 - Gandalf

	838 - John

	624 - Tyrion

	215 - Aaron

	278 - Donnie

	925 - Ana

	288 - Johnthan

	962 - Jamie

	502 - Sue

	804 - Mindy

	54 - Paul

	223 - Nathan

没有冲突，这不是最优的散列函数，但是最被推荐的散列函数


	

