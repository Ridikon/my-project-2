$(function () {
	$('.authorized__button').click(function() {
		$('.header__authorized-hidden').addClass(' header__authorized-opened');
	});
	$('.header__authorized-close-icon').click(function() {
		$('.header__authorized-hidden').removeClass(' header__authorized-opened');
	});
});