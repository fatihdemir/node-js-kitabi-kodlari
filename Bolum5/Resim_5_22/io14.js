// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 65
// Resim 5.22

var fs = require("fs");
var path = require("path");
konum = __dirname + path.sep + "io14";

fs.mkdir(konum,function(err) {
	if (err) {
		console.error(err);
	}
});