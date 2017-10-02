var fs = require('fs');

var eneida = JSON.parse(fs.readFileSync('./models/data.json' , 'utf8'));

exports.get_list = function() {
	return eneida;
};

function fetchUser(id) {
	let data = eneida.filter(function(element) {

		return element.id == id ;
	});
	return data ;
};

exports.get_by_id = function(id) {
	
	return fetchUser(id);
};



function createId() {
	return Number(eneida[eneida.length-1].id) + 1 ;
}
exports.add_new_row = function(text) {
	var new_row = { id: createId(), data: text };
	eneida.push(new_row);
	fs.writeFileSync('./models/data.json', JSON.stringify(eneida), 'utf8');
	return new_row;
};

exports.delete_row = function(id) {
	eneida = eneida.filter(function(usr) {
		return usr.id != id;
	});
	fs.writeFileSync('./models/data.json', JSON.stringify(eneida), 'utf8');
};

exports.edit_row = function(id) {
	
	return fetchUser(id);
};


exports.update_row = function(id, text) {
	eneida.forEach(function(el) {
		if(el.id == id) {
			el.data = text;
		
		}
	});
	

	fs.writeFileSync('./models/data.json', JSON.stringify(eneida), 'utf8');
}







