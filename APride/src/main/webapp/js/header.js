$(function(){
	
	// make menu drop automatically: hover
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();
	}, function(){
		$('.dropdown-menu', this).fadeOut('fast');
	}); //hover
	
}); // loads JQuery