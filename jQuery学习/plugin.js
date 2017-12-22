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
		this.defaults = { 'color' : 'red'};
		this.options = $.extend( {}, this.defaults, opt );
	}

	Beautifier.prototype = {

		beautify : function() {

			return this.$element.css( { 'color' : this.options.color } );
		}
	}

	$.fn.myPlugin = function( options ) {

		var beautifier = new Beautifier( this, options );

		return beautifier.beautify();
	}
} )(jQuery);

