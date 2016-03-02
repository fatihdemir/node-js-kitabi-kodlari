// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 66
// Resim 5.23

var fs = require("fs");
var path = require("path");
konum = __dirname + path.sep + "io15";

fs.readdir(konum,function(err,dosyalar) {
	if (err) {
		console.error(err);
	} else {
	dosyalar.forEach ( function (dosya) {
		console.log(dosya);
	});
	}
});