// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 66
// Resim 5.24

var fs = require("fs");
var path = require("path");
konum = __dirname + path.sep + "io16";

fs.rmdir(konum,function(err) {
	if (err) {
		console.error(err);
	} else {
		console.log("klasor silme basarili");
	}
});