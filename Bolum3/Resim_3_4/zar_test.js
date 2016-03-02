// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 24
// Resim 3.4

rastgele = Math.floor((Math.random() * 6) + 1);
console.log('Atilan zar: ' + rastgele);

if (rastgele == 6) {
	mesaj = require('./kutlama.js');
	mesaj();
}