const mysql = require('mysql');
var pool = mysql.createPool({
	user:'root',
	password:'',
	host:'127.0.0.1',
	port:'3306',
	database:'ds',
	connectionLimit:15
});
module.exports=pool;