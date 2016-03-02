// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 55
// Resim 5.13

var path = require("path");
var dosya = "/home/ozcan/Documents/nodejs/Bolum5/path_bilgi.txt";

var dosyaAdi = path.basename(dosya);
console.log("Dosya Adi: " + dosyaAdi);

var dosyaUzantisi = path.extname(dosya);
console.log("Dosya Uzantisi: " + dosyaUzantisi);

var dosyaKlasorAdi = path.dirname(dosya);
console.log("Dosyanin bulundugu klasorun konumu: " + dosyaKlasorAdi);
