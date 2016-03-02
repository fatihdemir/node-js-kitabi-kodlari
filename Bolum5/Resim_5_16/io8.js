// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 58
// Resim 5.16

var fs = require("fs");

fs.stat("fs_ilk_deneme.txt", function(err, stats) {
	if (err) {
		return console.error(err);
	} else {
		console.log(stats);
		console.log("Dosya bilgileri basarili sekilde goruntulendi");
		console.log("Konum dosya mi?: " + stats.isFile());
		console.log("Konum klasor mu?: " + stats.isDirectory());
	}
});