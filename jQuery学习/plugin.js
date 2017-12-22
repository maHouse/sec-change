;( function( $ ) {
	jQuery.fn.extend( {

	// 	"color" : function( value ) {
	// 		return this.css( "color", value );
	// 	},

	// 	"font" : function( value ) {
	// 		return this.css( "fontSize", value );
	// 	}
	// } );

	var Beautifier = function( ele, opt ) {

		this.$element = ele;
		this.defaults = { 'color' : 'red'};
		this.options = $.extend( {}, defaults, opt );
	}

	Beautifier.prototype = {

		beautify : function() {

			return this.$element.css( { 'color' : this.options.color } );
		}
	}
} )(jQuery);

