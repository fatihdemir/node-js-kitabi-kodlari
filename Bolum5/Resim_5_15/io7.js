// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 57
// Resim 5.15

var fs = require("fs");
fs.open("io7_dosya.txt", "r+", function( err, fd ) {
	if (err) {
		return console.error(err);
	} else {
		console.log("Dosya basarili sekilde acildi.");
	}
});