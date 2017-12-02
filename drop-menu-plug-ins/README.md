### jQuery插件开发教程 ###
1.jQuery插件开发模式共有3种

①、通过$.extend()来扩展

②、通过$.fn向jQuery添加新的方法

③、通过$.widget()应用jQueryUI的部件工厂方式创建

通常用第二种方式来创建插件，这种方式难度是适中的，比下不足，比上有余的难度。

第一种方式：$.extend()

仅仅是在jQuery命名空间，也可以说是jQuery身上加了个静态方法。给jQuery扩展了一个方法，我们直接调用就可以了。通过$.函数（方法）的方式，直接调用。
不用选中DOM元素。

	$.extend(sayHello:function( name ) {
		console.log( Hello + ( name ? name : Dude ) + '!' ); }})
	$.sayHello();

调用$.sayHello();带参调用

以上就是个简单的插件了。下面看看第二种方式的jQuery插件的开发。

**基本格式**

	$.fn.pluginName = function() { //插件代码 }
一般是往**$.fn**上加个方法，名字就是我们的插件的名称。我们的插件代码就在方法里面展开。

例如我们将页面上所有链接颜色转换为红色，则可以这么写：
 
	$.fn.myPlugin = function() {
		
		this.css(color,'red');
	}

在插件名字定义的这个函数的内部，this指代的是我们在调用该插件时，用jQuery选择器选中的元素，一般是一个jQuery类型的集合。比如$('a')返回的就是页面上所有a标签的集合，且这个集合已经是jQuery包装类型。可以直接调用jQuery的其他方法不需要再用$包装。

不同的是有时候，我们需要经过包装才能使用的。

我们已经知道this指代的是jQuery选择器返回的集合，那么通过jQuery的.each()方法就可以处理集合中的每个元素了，不过在each中用的是DOM元素，就必须用$来包装一下了。

比如，我们要在每个链接后面显示真实的地址，首先通过each遍历所有a标签，然后获取href属性的值并添加到链接文本的后面。

更改后的插件：

	$.fn.myPlugin


