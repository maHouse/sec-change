$(function() {
	$('.has_children').click(function() {

		// 使代码更加易读
		$( this ).addClass('highlight')
			.children('a').show().end()
		.siblings().removeClass('highlight')
			.children('a').hide();
	});

	// 第二部分
	
	// first method
	
	// var $cr = $('#cr');
	// var cr = $cr.get(0);
	// $cr.click( function() {
	// 	if ( cr.checked ) {
	// 		alert("Thanks for you support!!");
	// 	}
	// } );

	// sec method
	
	var $cr = $('#cr');
	$cr.click( function() {
		if ( $cr.is(':checked') ) {
			alert('pretty!!');
		}
	} );
});