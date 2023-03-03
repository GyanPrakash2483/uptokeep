function handleRequest(data) {

	console.log('client sent: ' + data);
	return 'pong';
}


module.exports = {
	handleRequest
}
