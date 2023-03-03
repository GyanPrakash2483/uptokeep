const http = require('http');
const mime = require('mime');
const fs = require('fs');

const client = {
	path: './client/'
};

http.createServer(function(req, res) {

	let response = null;

	if (req.url == '/api') {
		if(req.method == 'POST') {
			req.on('data', function(data) {
				res.setHeader('Content-Type', 'application/json');
				res.write('API request');
				res.end();
			});
		}
	}
	else if (req.url == '/') {
		fs.readFile(client.path + '/index.html', function(err, data){
			res.setHeader('Content-Type', 'text/html');
			res.write(data);
			res.end();
		});
	}
	else {
		fs.readFile(client.path + req.url, function(err, data){
			if(err) {
				res.writeHead(err.code);
				res.write(err.code);
				res.end();
				return;
			}
			res.setHeader('Content-Type', mime.getType(client.path + req.url));
			res.write(data);
			res.end();
		});
	}

/*	req.on('end', function(){
		res.end();
	});
*/

}).listen(8080);