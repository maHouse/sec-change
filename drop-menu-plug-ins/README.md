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




