var eneida = require('../models/eneida');

exports.getList = function(req , res) {
	let rows = eneida.get_list();
	res.render('eneida/index', { heading: 'ЕНЕЇДА', rows: rows });
};

exports.getById = function(req , res) {
	let id = req.query.id;
  res.render(
  		'eneida/info' , 
  		{ heading: `ЕНЕЇДА ` ,
  		  remark: 'рядок ' + id ,
  		  rows: eneida.get_by_id(id),
  		  params: 'id=' + id })
 
};

exports.addNewRow = function(req , res) {
	var new_text = req.body.newrow;
	var new_row = eneida.add_new_row(new_text);
	console.info('id=' + new_row.id);
	res.redirect('/eneida');
	
	res.render(
		'eneida/index' , {
			heading: `ЕНЕЇДА ` ,
  		  	remark: `додано успішно ` ,
  		  	rows: eneida.get_list(),
  		  	params: 'id=' + new_row.id
		});

};

exports.deleteRow = function(req , res) {
	let  row_id = req.body.row_id;
	eneida.delete_row(row_id);
	res.redirect('/eneida');
	res.render('eneida/index' , {
	 heading: `ЕНЕЇДА `, 
	 remark: `the row ${row_id} deleted `, 
	 rows: eneida.get_list()
	});
};

exports.editRow = function(req , res) {
	let id = req.query.id;
	let data = eneida.edit_row(id);
	res.render('eneida/index' , {
		 heading: `ЕНЕЇДА ` ,
  		 remark: 'рядок ' + id ,
  		 rows: [],
  		  buf: data[0],
  		  params: 'id=' + id 
  		});
};
 

exports.updateRow = function(req , res ) {
	let id = req.query.id, text = req.body.buffer;
	eneida.update_row(id, text);
	res.redirect('/eneida');
	res.render(
		'eneida/index' , {
			heading: `ЕНЕЇДА ` ,
  		  	remark: `success` ,
  		  	rows: eneida.get_list()
		});



}