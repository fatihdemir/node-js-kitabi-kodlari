// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 61
// Resim 5.18

var fs = require("fs");
var path = require("path");

fs.readFile(__dirname + path.sep + "io10_dosya.txt", "utf8", function(err,data) {
	if (err) {
		console.log("okuma hatasi: " + err.message);
	} else {
		console.log(data);
	}
});