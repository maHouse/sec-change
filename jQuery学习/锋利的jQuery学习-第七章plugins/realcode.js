$( function() {

	// alert( $("div").color() + " \n返回字符串，证明插件可用");

	// alert( $("div").font() + " \n返回object证明得到的是jQuery对象");
	

	alert( $("div").myPlugin( { 'color' : 'greenyellow' } ) );
} )