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

实例见代码

jQuery选择器分为基本选择器、层次选择器、过滤选择器和表单选择器，下面我们做介绍
#### 1.基本选择器 ####
组简单的选择器，通过id、class、标签名和*等来查找DOM元素

	$('#one')
		.css('background', '#bbffaa');
	
	$('*')
		.css('background', '#bbffaa');//改变所有元素的背景色

	$('span, #two')
		.css('background', '#bbffaa');
#### 2.层次选择器 ####
顾名思义通过元素之间的层次关系来获取特定的元素，例如后代、子元素、相邻元素(+)、同辈元素(~)，这些都是通过层次选择器来得到的。相邻是紧接着的下一个，同辈元素是某个元素后面的所有某个元素，看看实例。

	$('.one + div')
		.css('background', '#bbffaa');

class为one的下一个div元素的背景色，代替方案：

	$('.one').next('div')
		.css();

	$('#prev~div').css();

id为prev元素之后的所有div兄弟元素，代替方案：

	$('#prev').nextAll('div');//之后的

不同于

	$('#prev').siblings('div');//同辈无前后
#### 3.过滤选择器 ####
过滤选择器根据不同的过滤规则可分为基本过滤、内容过滤、可见性过滤、属性过滤、子元素过滤、表单对象过滤选择器。

**基本过滤选择器**


	:first :last :not(selector) :even :odd :eq(index) :gt(index) :lt(index) :header :animated

for example:

	$('input:not(.myClass)');//选取的就是class不是myClass的input元素
	
	$('div:animated')//正在执行顺序动画的div元素
	
	$(':animated').css();

**内容过滤选择器**

体现在它包含的子元素或文本内容上

	:contains(text)//选取包含文本内容为text的元素
	:empty//不包含子元素或者文本元素
	:has(selector)//选取含有所匹配元素的元素，不仅仅是文本
	:parent//选取含有子元素或文本的元素

for example:

	$('div:contains(di)').css();//文本中含有di的div
	$('div:empty').css();//无子元素的div
	$('div:has(mini)').css();//改变class含有mini的div
	$('div:parent').css();//改变含有子元素的元素

**可见性过滤选择器**

根据元素的可见和不可见状态来选择相应的元素

	:hidden//选取不可见的元素，$(':hidden')包括3中类型，input里的type为hidden，或者样式里的display为none，再有就是visibility为hidden，3中类型，如果想更有针对性，可以用$('div:hidden');

	:visible//选取可见的div元素

**属性过滤选择器**


通过元素相应的属性来获取元素。


	[attribute]  选出有此属性的元素  $('div[id])选出含有属性id的元素
	
	[attribute=value] 选出属性值为value的元素 $('div[title=test])选出含有title为test的元素
	
	[attribute!=value] 与2相反
	
	[attribute^=value] 选出属性值以value开始的元素 $('div[title^=test])选出title的属性值以test开始的div

	[attribute$=value] 选出属性值以value结束的元素 与上反

	[attribute*=value] 选出含有属性值含有value的元素

	[selector1][selector2][selectorN] 多个属性选择器合并成一个属性选择器 $('div[id][title$=test]')

**子元素过滤选择器**


	:nth-child(index/even/odd/equatio)  :first-child :last-child :only-child(某个元素是他父元素中唯一的子元素)

	$('div.one :only-child').css();

**表单对象属性过滤选择器**

	:enabled//$('#form :enabled)选取可用元素 :disabled//选取不可用的元素  :checked//$('input:checked')选取被选中的元素，单选框和复选框 :selected//$('select :selected')选取被选中的选项元素（下拉列表中的）

示例见代码

**表单选择器**


	:input   //选取所有的input textarea select button 元素
	
	:text    //所有的单行文本

	:password //所有的密码框

	:radio    //所有的单选框

	:checkbox //所有的多选框

	：submit  //所有的提交按钮

	:image    //所有的图像按钮

	:reset    //所有的重置按钮

	:button    //所有的按钮

	：file     //所有的上传区域

	:hidden    //所有的不可见元素，参看上面讲解

HTML示例代码见

### 第三章 jQuery中的DOM操作 ###
文档对象模型，一种与浏览器、平台、语言无关的接口，使用该接口可以轻松的访问页面中所有的标准组件，如获取和操作网页中的数据、脚本和表现层对象。

DOM分为3个方面，DOM Core(核心）、HTML-DOM和CSS-DOM。

DOM Core不属于JavaScript，属于DOM，任何支持DOM的程序设计都可以用，也可以处理任何一种使用标记语言编写的文档，例如XML。

getElementById()、getElementsByTagName()、getAttribute()、setAttribute()这些事DOM Core的组成部分。

HTML-DOM

	document.forms;//HTML-DOM提供了一个forms对象

	element.src;

CSS-DOM，针对CSS进行的操作

	element.style.color = 'red';