// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 63
// Resim 5.20

var fs = require("fs");
var path = require("path");

var eski_konum = __dirname + path.sep + "io12" + path.sep + "eski" + path.sep + "io12_dosya.txt";

var yeni_konum = __dirname + path.sep + "io12" + path.sep + "yeni" + path.sep + "io12_yeni_ad_dosya.txt";

fs.rename(eski_konum, yeni_konum, function(err) {
	if (err) {
		console.log("Konum degistirme hatasi: " + err.message);
	} else {
		console.log("Konum degistirme basarili");
	}
});