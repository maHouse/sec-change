;( function( $ ) {
	jQuery.fn.extend( {

		"color" : function( value ) {
			return this.css( "color", value );
		},

		"font" : function( value ) {
			return this.css( "fontSize", value );
		}
	} );
} )(jQuery);

