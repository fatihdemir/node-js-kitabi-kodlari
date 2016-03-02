// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 56
// Resim 5.14

var fs = require("fs");
fs.readFile("fs_ilk_deneme.txt", function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log("readFile ile asenkron erisim: " + data.toString());
	}
});

var data = fs.readFileSync('fs_ilk_deneme.txt');
console.log("readFileSync ile senkron erisim: " + data.toString());

console.log("Dosya okuma tamamlandi");