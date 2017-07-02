$(function () {
	$('.main__form-submit').click(sendForm);
	
});

function sendForm(e){
	e.preventDefault();
	$.ajax({
		url: "https://formspree.io/ridikon666@gmail.com", 
		method: "POST",
		data: {
			name: $('#client-name').val(),
			tel: $('#client-phone').val(),
			tel: $('#client-phone').val(),
			text: $('#client-text').val(),
			pass: $('#client-password').val(),
			city: $('#client-city').val(),
			gender: $('#gender option').val()
		},
		dataType: "json"
	});
	.done(function(){
		$('form').html('<h1>Дякуємо!!!</h1>');
	});
}