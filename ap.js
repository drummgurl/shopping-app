$(document).ready(function() {
	$('form').on('submit', function(event)) {
		event.preventDefault();
	$('#input').keyup(function(e){
        if(e.which == 13) {//Enter key pressed
        event.preventDefault();
        post();
  		}
	});


	function post() {
        var value = $('#input').val();
		$('.list').prepend('<li class="todo"><button class="remove"></button>' + value + '<button class="bought"></button></li>');
		 $('#input').val('');
		}

	$(document).on('click', '.remove', function(event) {
		var el = $(event.target);
		el.parent().fadeOut(300);
	});

	$(document).on('click', '.bought', function(event) {
		var el = $(event.target);
		el.parent().toggleClass('.done');
	});


;}) 


