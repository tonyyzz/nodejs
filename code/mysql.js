var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
connection.connect();
connection.query('select * from tb1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    console.log(fields)
});
connection.end();