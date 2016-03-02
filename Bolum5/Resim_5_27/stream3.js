// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 70
// Resim 5.27

var fs = require("fs");
var path = require("path");
kaynak_konumu = __dirname + path.sep + "stream3_kaynak.txt";
hedef_konumu = __dirname + path.sep + "stream3_hedef.txt";

var readableStream = fs.createReadStream(kaynak_konumu);
var writableStream = fs.createWriteStream(hedef_konumu);

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
	writableStream.write(chunk);
});