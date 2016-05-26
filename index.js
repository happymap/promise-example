var fs = require('fs');
var Promise = require('promise');

var readFile = function (filePath) { 
	return new Promise(function(resolve, reject) {
		fs.readFile(filePath, 'utf8', function(error, result) {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

readFile('./hello.txt').then(function(result) {
	console.log(result);
	return readFile('./hello1.txt');
}).then (function(result) {
	console.log(result);
	return readFile('./hello2.txt');
}).then (function(result) {
	console.log(result);
});

