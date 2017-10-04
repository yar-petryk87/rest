var eneida = require('../models/eneida');

exports.getList = function(req, res) {
	
	let rows = eneida.get_list();
		res.json(rows);
	
};

exports.getById = function(req , res) {
	let id = req.query.id;
	let row = eneida.get_by_id(id);

		res.json(row);
};

exports.addNewRow = function(req , res) {
	var new_text = req.body.newrow;
	var new_row = eneida.add_new_row(new_text);
	//res.redirect('/eneida');
		res.json(new_row); 

};

exports.deleteRow = function(req , res) {
	let  row_id = req.body.row_id;
	eneida.delete_row(row_id);
	//res.redirect('/eneida');

		res.json(eneida.get_list());
	
};

exports.editRow = function(req , res) {
	let id = req.query.id;
	let data = eneida.edit_row(id);
		res.json(data);
};
 

exports.updateRow = function(req , res ) {
	let id = req.query.id ;
	let text = req.body.buffer;
	let update = eneida.update_row(id, text);

		res.json(update);	
};

