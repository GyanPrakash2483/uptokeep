const http = require('http');
const mime = require('mime');
const fs = require('fs');
const api = require('./api');

const client = {
	path: './client/'
};

http.createServer(function(req, res) {


	if (req.url == '/api') {
		if(req.method == 'POST') {
			req.on('data', function(data) {
				res.setHeader('Content-Type', 'application/json');
				res.write(api.handleAPIrequest(data.toString()));
				res.end();
			});
		}
	} else if (req.url == '/') {
		fs.readFile(client.path + '/index.html', function(err, data){
			res.setHeader('Content-Type', 'text/html');
			res.write(data);
			res.end();
		});
	} else {
		fs.readFile(client.path + req.url, function(err, data){
			if(err) {
				res.writeHead(404, {'Content-Type': 'application/json'});
				res.write(err.toString());
				res.end();
				return;
			}
			res.setHeader('Content-Type', mime.getType(client.path + req.url));
			res.write(data);
			res.end();
		});
	}


}).listen(8080);