// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 64
// Resim 5.21


var fs = require("fs");
var path = require("path");
konum = __dirname + path.sep + "io13_dosya.txt";

fs.unlink(konum, function(err) {
	if (err) {
		console.error("silme hatasi: " + err.message);
	} else {
		console.log("silme basarili");
		}
});