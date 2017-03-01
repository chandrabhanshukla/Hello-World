var express = require('express');
var app = express();
var fs = require('fs');


app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       console.log( data );
     res.end( data );
   });
});

var server = app.listen(8043, function () {
var host = server.address().address;
var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});


//10.206.65.208
	
/*	
	'use strict';
	console.log('Loading event');

	exports.handler = function(event, context, callback) {
	  console.log('"Hello":"World"');
	  callback(null, {"Hello":"World"});  // SUCCESS with message
	};
*/