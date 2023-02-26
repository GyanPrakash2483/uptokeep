const http = require('http');
const fs = require('fs');
const api = require('./api');
const mime = require('mime')

const client = {
	path: __dirname + '/../client/'
};

http.createServer(function(req, res){
	if(req.url == '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(fs.readFileSync(client.path + '/index.html', 'utf-8', function(err, data){
			res.write(toString(err));
		}));
	} else if(fs.existsSync(client.path + req.url)) {
		res.writeHead(200, {'Content-Type': mime.getType(client.path + req.url)});
		res.write(fs.readFileSync(client.path + req.url));
	}else if(req.url == '/api') {
		api.handleAPIrequest(req, res);

	} else {
		res.write('<h1> Error 404 </h1> <br> The page you are looking for could not be found.')
	}
	
	res.end();

}).listen(8080);