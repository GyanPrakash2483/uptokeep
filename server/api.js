function handleAPIRequest(data) {

	console.log('client sent: ' + data);
	return 'pong';
}


module.exports = {
	handleAPIRequest
}
