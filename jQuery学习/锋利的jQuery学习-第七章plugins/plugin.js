;( function( $ ) {
	// jQuery.fn.extend( {

	// 	"color" : function( value ) {
	// 		return this.css( "color", value );
	// 	},

	// 	"font" : function( value ) {
	// 		return this.css( "fontSize", value );
	// 	}
	// } );

	// 面向对象解决上述两个方法合并的问题
	

	var Beautifier = function( ele, opt ) {

		this.$element = ele;
		this.defaults = { 'color' : 'blue'};
		this.options = $.extend( {}, this.defaults, opt );
	}

	Beautifier.prototype = {

		beautify : function() {

			// 一个是我们需要得到元素，再有就是样式设置
			return this.$element.css( { 'color' : this.options.color } );
		}
	}

	//把options作为参数传到实例里面，把方法绑定到了扩展插件的方法上,options是个对象，就是用来代替this.options
	$.fn.myPlugin = function( options ) {

		var beautifier = new Beautifier( this, options );

		return beautifier.beautify();
	}
} )(jQuery);

