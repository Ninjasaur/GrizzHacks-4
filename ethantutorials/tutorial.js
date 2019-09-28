var http = require('http');
var dt = require('./myfirstmodule');
//if we want to use the filesystem, we need this:
var fs = require('fs');

http.createServer(function (req, res){
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//res.end('Hello World!');
	//res.write("The date and time are currently: " + dt.myDateTime());
	
	fs.readFile('demo.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	//res.end();
}).listen(8080);
