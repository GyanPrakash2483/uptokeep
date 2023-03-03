function handleAPIrequest(data) {

	console.log('client sent: ' + data);
	return 'pong';
}


module.exports = {
	handleAPIrequest
}
