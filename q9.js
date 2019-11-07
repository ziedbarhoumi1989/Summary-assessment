$('#create').on('click', function() {
	if($("#c1").prop('checked') && $("#c2").prop('checked') && $("#c3").prop('checked'){
		$('ul').append('<li class="black">black<li>')
	}
	else if(($("#c1").prop('checked') && $("#c3").prop('checked')) ||($("#c3").prop('checked') && $("#c2").prop('checked')) || ($("#c3").prop('checked') && $("#c2").prop('checked')) ) {
		$('ul').append('<li class="black">black<li>')
	}
}
)