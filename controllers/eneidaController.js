var eneida = require('../models/eneida');

exports.getList = function(req, res) {
	let accept_type = req.headers['accept'];
	let rows = eneida.get_list();
	if( isHTMLRequest(accept_type) ){
		res.render('eneida/index', { heading: 'ЕНЕЇДА', rows: rows });
	} else if ( isJSONRequest(accept_type) ){
		res.json(rows);
	}
};

exports.getById = function(req , res) {
	let id = req.query.id;
	let accept_type = req.headers['accept'];
	let row = eneida.get_by_id(id);

	if( isHTMLRequest(accept_type) ){
		res.render('eneida/info' , 
  		{ heading: `ЕНЕЇДА ` ,
  		  remark: 'рядок ' + id ,
  		  rows: row,
  		  params: 'id=' + id });
	} else if ( isJSONRequest(accept_type) ){
		res.json(row);
	}
 
 
};

exports.addNewRow = function(req , res) {
	var new_text = req.body.newrow;
	let accept_type = req.headers['accept'];
	var new_row = eneida.add_new_row(new_text);
	//res.redirect('/eneida');
	if( isHTMLRequest(accept_type) ){
		res.render('eneida/index' , {
			heading: `ЕНЕЇДА ` ,
  		  	remark: `додано успішно ` ,
  		  	rows: eneida.get_list(),
  		  	params: 'id=' + new_row.id
		});
	} else if ( isJSONRequest(accept_type) ){
		res.json(new_row); 
	}

};

exports.deleteRow = function(req , res) {
	let  row_id = req.body.row_id;
	let accept_type = req.headers['accept'];
	eneida.delete_row(row_id);
	//res.redirect('/eneida');

	if( isHTMLRequest(accept_type) ){
		res.render('eneida/index' , {
	 heading: `ЕНЕЇДА `, 
	 remark: `the row ${row_id} deleted `, 
	 rows: eneida.get_list()
	});
	} else if ( isJSONRequest(accept_type) ){
		res.json(eneida.get_list());
	}

	
};

exports.editRow = function(req , res) {
	let id = req.query.id;
	let data = eneida.edit_row(id);
	let accept_type = req.headers['accept'];
	if( isHTMLRequest(accept_type) ){
		res.render('eneida/index' , {
		 heading: `ЕНЕЇДА ` ,
  		 remark: 'рядок ' + id ,
  		 rows: [],
  		  buf: data[0],
  		  params: 'id=' + id 
  		});
	} else if ( isJSONRequest(accept_type) ){
		res.json(data);
	}
	
};
 

exports.updateRow = function(req , res ) {
	let id = req.query.id ;
	let text = req.body.buffer;
	let update = eneida.update_row(id, text);
	let accept_type = req.headers['accept'];
	//res.redirect('/eneida');

	if( isHTMLRequest(accept_type) ){
		res.render(
		'eneida/index' , {
			heading: `ЕНЕЇДА ` ,
  		  	remark: `success` ,
  		  	rows: eneida.get_list()
		});
	} else if ( isJSONRequest(accept_type) ){
		res.json(update);
	}
	
};

isHTMLRequest = function(accept_type) {
	return accept_type.includes('text/html');
};

isJSONRequest = function(accept_type) {
	return accept_type.includes('application/json');
};