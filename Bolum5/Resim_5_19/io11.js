// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 62
// Resim 5.19

var fs = require("fs");
fs.open("io11_dosya.txt", "r+", function( err, fd) {
	if (err) {
		return console.error(err);
	} 
	
	console.log("Dosya basarili sekilde acildi.");
	fs.close(fd, function(err) {
		if (err) {
			return console.error(err);
		} else {
			console.log("Dosya basarili sekilde kapatildi.");
		}
	});
});