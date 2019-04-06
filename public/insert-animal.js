$('#insert_animal').submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    var cn = $( "#insert_animal input[name='animal_name']" ).val();

	$.ajax({
		url: '/animals-insert',
		method: 'POST',
		data: {animal_name : cn}
	}).then(function(message){
		$('div').append(cn)
		getAnimals();
	});

});