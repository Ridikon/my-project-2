$(function () {
	$('#header__mobile').click(function() {
		$('.header__mobile').toggleClass(' header__mobile-opened');
		$('.header__mobile-nav').toggleClass(' header__mobile-nav-opened');
	});
	$('.authorized__button').click(function(){
		$('.header__mobile-nav').removeClass(' header__mobile-nav-opened');
		$('.header__mobile').removeClass(' header__mobile-opened');
	});
});