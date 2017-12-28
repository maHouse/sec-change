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

**搜索和排序**


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


