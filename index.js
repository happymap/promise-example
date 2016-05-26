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

// nested callback functions
var readFile2 = function (filePath1, filePath2) { 
	return new Promise(function(resolve, reject) {
		fs.readFile(filePath1, 'utf8', function(error1, result1) {
			if (error1) {
				reject(error1);
			} else {
				fs.readFile(filePath2, 'utf8', function(error2, result2) {
					if (error2) {
						reject(error2);
					} else {
						resolve(result1 + ', ' + result2);
					}
				});
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

// readFile2('./hello.txt', './hello1.txt').then(function(result) {
// 	console.log(result);
// 	return readFile2('./hello1.txt', './hello2.txt');
// }).then(function(result) {
// 	console.log(result);
// });

