// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 68
// Resim 5.25

var fs = require("fs");
var path = require("path");
dosya_konumu = __dirname + path.sep + "stream1_dosya.txt";
var readableStream = fs.createReadStream(dosya_konumu);
var okunan_veri = "";

readableStream.on('data', function(chunk) {
	okunan_veri += chunk;
});
readableStream.on('end', function() {
	console.log(okunan_veri);
});