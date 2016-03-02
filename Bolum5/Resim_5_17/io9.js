// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 59
// Resim 5.17

var fs = require("fs");
var path = require("path");
var data = "Bu dosyaya yazilan ilk veri!";

fs.writeFile(__dirname + path.sep + "io9_dosya.txt", data, function (err) {
	if (err) {
		console.error("yazma hatasi: " + err.message);
	} else {
		console.log("Dosyaya yazma islemi basarili!");
	}
});