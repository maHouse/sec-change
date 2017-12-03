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

	$.fn.myPlugin = function() { 
		
		this.css( 'color', 'red' );
		this.each( function() {
			$( this ).append( '' + $( this).attr( 'href' ));
		});
	}
		
#### 支持链式调用 ####

要让插件支持链式调用，只需要return一下就可以了。

	$.fn.myPlugin = function() { 
		
		this.css( 'color', 'red' );
		return this.each( function() {
			$( this ).append( '' + $( this).attr( 'href' ));
		});
	}

#### 让插件接收参数 ####

使用的时候传递什么参数，就会得到什么结果，这才是我们想要的结果。

在使用者不传递参数时，有个默认参数值，在处理插件参数的接收上，通常用jQuery的extend方法，之前提到的是给extend传递单个对象，这个对象会合并到jQuery身上，我们就可以在jQuery上调用新合并对象里包含的方法了。当给extend传递不止一个参数时，他会将所有参数合并到第一个参数里。同理，如果有同名属性时，合并的时候后面的会覆盖掉前面的。

利用这点，我们先定义一个保存插件参数默认值得对象，同时将接收来的参数对象合并到默认对象上来，最后就实现了用户指定了值得参数被使用，未指定的参数使用插件默认值。

为演示方便，再加一个参数fontSize，允许调用插件的时候设置字体的大小。

	$.fn.myPlugin = function( options ) { 

		var defaults = { 'color' : 'red', 'fontSize' : '12px' },//这是一个对象
			settings = $.extend( defaults, options );
		return this.css( { 'color' : settings.color, 'fontSize' : settings.fontSize } );
	}

现在开始使用

	$('a').myPlugin( { 'color' : '#58a'});//字体颜色变化，而大小是默认的

	$('a').myPlugin( { 'color' : '#58a', 'fontSize' : '18px' } );

#### 保护默认参数 ####
后面的参数改变了默认的参数，因为插件中有些要维持原来的样子，使用默认值，一个不错的做法是将一个新的空的对象作为$.extend的第一个参数，defaults和用户传递的参数紧随其后，好处是所有值将被合并到这个空对象上，保护了插件的默认值。

	$.fn.myPlugin = function( options ) {
	
		var defaults = { 'color' : 'red', 'fontSize' : '12px' },
			settings = $.extend( {}, defaults, options );
		//将第一个空对象作为第一个参数return
		
		return this.css( { 'color' : settings.color, 'fontSize' : settings.fontSize } );
	}

到此，插件能接受和处理参数，代码量多的时候，将所有方法包装到一个对象上，用面向对象的思维将使工作更轻松。

#### 面向对象的插件开发 ####
为便于管理也为了不影响外部命名空间，我们需要把这个插件给抽象成一个对象，一个美化页面的对象，这样我们的代码就能放到一块来了，代码规模大的时候的考虑。将需要的重要变量定义到对象的属性上，重要的函数称为对象的方法。

我们新建一个对象命名为Beautifier，在这个插件里进行编码

	//定义Beautifier的构造函数

	var Beautifier = function( ele, opt ) {
	
		this.$element = ele,
		this.defaults = { 'color' : 'red', 'fontSize' : '12px', 'textDecration' : 'none' },
		this.options = $.extend( { {}, this.defaults, opt } );//定义Beautifier的方法
	}

	Beautifier.prototype = {
		beautify : function() {
			return this.$element.css( { 'color' : this.options.color, 'fontSize' : this.options.fontSize, 'textDecration' : this.options.textDecration } );
		}
	}

	$.fn.myPlugin = function( options ) {
		//创建实例
		var beautifier = new Beautifier( this, options );
		//调用方法
		return beautifier.beautify();
	}

目前，我们的代码更加面向对象了，便于理解和维护，要添加新的方法，只要向对象添加新变量及新方法就可以了，然后在插件里实例化后就可以调用新添加的东西了。

我们将代码的组织结构改动了，看看插件的调用

	$( function() { $('a').myplugin( { 'color' : '#58a', 'fontSize' : '18px' } );});
	//下划线是默认没有，要带下划线的话，直接加上去就可以了

#### 改进之命名空间 ####
名字会冲突，也可能污染全局变量，处理方法就是用自调用匿名函数包裹插件代码，既可以安全放在任何地方还没有冲突。

我们知道我们可以通过函数创建一个作用域，如果我们创建一个Beautifier全局变量，它就属于window对象了，为防止这样的事情发生。我们一般的做法是用自调用匿名函数包裹。

	(function() {
		var Beautifier = function( ele, opt) {
			this.$element = ele,
			this.defaults = { 'color' : 'red', 'fontSize' : '12px', 'textDecration' : 'none'},
			this.options = $.extend( {}, this.defaults, opt );
		}
		
		Beautifier.prototype = {
			beautify : function() {
				return this.$element.css( { 'color' : this.options.color, 'fontSize' : this.options.fontSize, 'textDecration' : this.options.textDecration } );
			}
		}

		$.fn.myPlugin = function( options ) {
			//创建实例
			var beautifier = new Beautifier( this, options );
			//调用方法
			return beautifier.beautify();
		}
	})();

还有好处是代码会在页面准备好后第一时间执行，还有要考虑的事情，如果其他人写的代码没有结束符号“;”，这个时候我们的代码房子他之后是会出错的，我们要在自调用函数前加上“;”,还有一些系统变量或关键字，比如window、undefined等，他们之前被修改掉了，如果我们再用的话，后果也是很可怕的，改进方案如下：

		;(function( $, window, document, undefined ) {
		var Beautifier = function( ele, opt) {
			this.$element = ele,
			this.defaults = { 'color' : 'red', 'fontSize' : '12px', 'textDecration' : 'none'},
			this.options = $.extend( {}, this.defaults, opt );
		}
		
		Beautifier.prototype = {
			beautify : function() {
				return this.$element.css( { 'color' : this.options.color, 'fontSize' : this.options.fontSize, 'textDecration' : this.options.textDecration } );
			}
		}

		$.fn.myPlugin = function( options ) {
			//创建实例
			var beautifier = new Beautifier( this, options );
			//调用方法
			return beautifier.beautify();
		}
	})( jQuery, window, document );

OK，完整的安全的结构良好的组织有序的插件到此完成了。下面就说说一些其他的话题了。

