#### 第七章 ####

这里面是包括了书的最后两章

#### 隔行变色插件 ####

表格的隔行变色是不完整的，没有继续补下去，原因：重要的是个人觉得没有搞个这样的东西，没有心情写下去了，后面如果想写下去的话，就继续

#### 封装全局函数 ####

比较与jQuery.trim()，我们要写个去除左边或右边的空格，直接把方法绑定到jQuery上就行了

#### 自定义选择器 ####

下面说说小于等于，大于等于以及between选择器的选择器制作

jQuery提供了一套可以让用户通过制作选择器插件来使用自定义选择器的方法，来完善jQuery的选择器功能

jQuery选择符解析器首先使用一组正则表达式来解析选择器，然后针对解析出的每个选择符执行一个函数，称之为选择器函数。最后根据这个选择器函数的返回值是true还是false来决定是否保留这个元素，这样就可以找到匹配的元素节点。

例子1

	$("div:gt(1)");

解释：选择器首先获取所有的div元素，然后隐式遍历这些div元素，并逐个将这些div元素作为参数，连同括号里面的“1”等一些参数一起传递给gt对应的选择器函数进行判断。如果这个函数返回true，则保留div元素，返回false，则不保留。这样得到的结果就是一个符合要求的div元素的集合。

:gt()选择器在jQuery源文件的代码是：

	gt : function( a, i, m ) {

		return i > m[3] - 0;
	}

选择器一共接受了a,i,m,共3个参数

第一个参数a，指向的是当前遍历到的DOM元素

第二个参数为i，指向的是当前遍历到的DOM元素的索引值，从0开始

第三个参数m，它是由jQuery正则解析引擎进一步解析后的产物（用match匹配出来的），是一个数组。

注：以上面的**$("div:gt(1)")**这个例子来讲

m[0]是:gt(1)这部分，是jQuery选择器进一步将要匹配的内容

m[1]选择器的引导符，匹配例子中的“:”，即冒号，用户也可以自定义其他的选择器引导符

m[2]例子中的gt，确定究竟调用哪个选择器函数

m[3]例子中的数字“1”，最重要的一个参数

m[4]不常见，如“div:l(ss(dd))”，这样的选择器，m[4]就指向了（dd）这部分，是带着括号的。m[3]指向的是ss(dd)。

下面就是看一个between选择器如何通过**$("div:between(2,5)"**来实现索引为3、4元素的功能。

构建选择器函数

	function(a, i, m) {
	
		var tmp = m[3].split(",");//将传递进来的m[3]以逗号分开，转换为一个数组
		return tmp[0] - 0 < i && i < tmp[1] - 0;//i > 2 && i < 5
	}

函数解释：

第一行m[3]的值为"2,5"，是一个字符串，经过分割成为了一个数组

第二行2和5与i进行比较，tmp[0] - 0将本来的“2”这个字符串转换为了数字2，然后在进行比较

完整代码：

	;(function($) {
		
		$.extend( $.expr[":"], {

			between : function(a, i, m) {
				var tmp = m[3].split(",");
				var return tmp[0] - 0 < i && i < tmp[ 1 ] - 0;
			}
 
		} );

	} )(jQuery);

就可以使用了，下面看代码[锋利的jQuery学习-第七章-4.html](锋利的jQuery学习-第七章-4.html)





	