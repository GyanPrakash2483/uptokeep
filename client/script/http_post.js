http = {
	postRequest: function(data, url, callback) {

		let xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(data);
		xhr.onload = function() {
			callback(this.responseText);
		}
	}
}
