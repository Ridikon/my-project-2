$(function () {
	$('#header__mobile').click(function() {
		$('.header__mobile').toggleClass(' header__mobile-opened');
		$('.header__mobile-nav').toggleClass(' header__mobile-nav-opened');
	});
	// $(document).click(function(event)) {
	// 	if ($(event.target).closest('#header__mobile').length) return;
	// 	$('.header__mobile-nav').removeClass('header__mobile-opened');
	// 	event.stopPropagation();
	// }
});