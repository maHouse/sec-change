### 锋利的jQuery学习 ###

**第一章**
#### 1.window.onload与$(ready).reday(function() {})的区别 ####
#### 2.$与jQuery的关系 ####
#### 3.更多的值得学习的框架 ####
mootools、YUI这两个框架好好学习一下，

①、end()，jQuery的遍历方法，意思是结束当前链条中的最近的筛选操作，并将元素还原为之前的状态。

②、为代码添加注释
	
	//在一个id为table的表格里的tbody中，每行的最后一列中的checkbox如果
	//没有被禁用，则把他的背景颜色调味红色
	$("#table > tbody > tr:has( td:last:has(:checkbox:enabled) )" ).css('background', 'red');

③、jQuery对象和DOM对象

jQuery对象通过jQuery选择器获取的对象，这个对象是jQuery独有的，可以享受jQuery的方法，而DOM对象是文档对象，想要表达同样的意思，两者也不能用一样的方式。

④、jQuery对象和DOM对象的两种转换方法

jQuery对象是一个数组对象，可以用[index]和get[index]的方法得到相应的DOM对象。

jQuery对象转化为DOM对象

	a、	var $cr = $('#cr');//jQuery对象
		var cr = $cr[0];//DOM对象
		alert(cr.checked);

	
	b、	var $cr = $('#cr');//jQuery对象
		var cr = $cr.get(0);//DOM对象
		alert(cr.checked);//检测

DOM对象转化为jQuery对象

	var cr = document.getElementById('cr');//DOM对象
	var $cr = $(cr);//jQuery对象

⑤、实例研究

	<input type="checkbox" id="cr"/><label for="cr">我已经阅读了上面制度</label>

验证方式

a、DOM验证方式

	$(document).ready(function() {
	
		var $cr = $('#cr');
		var cr = $cr[0];
		$cr.click(function() {
			if (cr.checked) {//DOM的判断方式
				alert("感谢您的支持！！！");
			} 
		});
	})

b、jQuery的验证方式

	$(function() {
		var $cr = $('cr');
			//cr = $cr.get(0);

		$cr.click(function() {
			if ( $cr.is('checked') ) {
				alert("感谢您的支持与厚爱！！")
			}
		})
	})

⑥、解决jQuery和其他库冲突问题

一种是jQuery库在其他库之后引用，我们能要用jQuery.noConflict()函数把$的控制权交给其他的JavaScript库，以jQuery库和prototype库为例子

	<script>
		jQuery.noConflict();//把$的控制权移交给prototype.js
		jQuery( function() {//使用jQuery
			jQuery('p').click( function() {
				alert( jQuery( this ).text() );
			} );
	 	} )

		$('pp').style.display = 'none';//使用prototype
	</script>
jQuery函数作为jQuery对象的制造工厂，自定义一个快捷方式，可以进行如下操作

	var $j = jQuery.noConflict();
	$j( function() {//使用jQuery
			jQuery('p').click( function() {
				alert( jQuery( this ).text() );
			} );
	 	} )

	$('pp').style.display = 'none';//使用prototype

$j就是我们自定义的名字，也可以用其他的名字，如果想用$还不用管其他库的$()方法，还不用自定义名称
，当然不会与其他库冲突，可用

first

	jQuery.noConflict();
	jQuery( function ( $ ) {
		$('p').click( function() {
			alert( $( this ).text() );
		 } );
	} )

	$('pp').style.display = 'none';

sec

	jQuery.noConflict();
	( function ( $ ) {//定义匿名函数并设置形参为$,匿名函数内部的$均为jQuery
		$('p').click( function() {//继续使用$()方法
			alert( $( this ).text() );
		 } );
	} )(jQuery);//执行匿名函数且传递实参jQuery

	$('pp').style.display = 'none';//使用prototype

二种是jQuery库在其他库之前导入

	jQuery( function() {
		jQuery('p').click(...);
	} );

	$('pp').style.display = 'none';

$的控制权交出来，这是在jQuery库后导入，如果前面导入的话，就不用了

### 第二章 ###

选择器是jQuery的根基，在对事件处理、遍历DOM和Ajax操作都依赖于此，熟练使用大有裨益。

选择器就是使用某种方式找到HTML元素，是指表现为某种样式。选择器有以下几种

标签选择器、ID选择器、类选择器、后代选择器(E F)、群组选择器(E1,F,E2)、通配符(*)，这几种所有浏览都支持的，还有几种部分浏览器支持的如：伪类选择器(E:Pseudo-Elements)、子选择器(E > F)、临近选择器(E + F)、和属性选择器(E[attr])。

