// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 83
// Resim 6.4

var http = require('http');
var fs = require('fs');

function hata404(response) {
	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('Hata 404: Kaynak bulunamadi.');
	response.end();
}

var sunucu = http.createServer(function (request, response) {
	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200, { 'Content-Type': 'text/html' });
fs.createReadStream('./6_4_ornek.html').pipe(response);
	}
	else {
		hata404(response);
	}
});
sunucu.listen(3000);
console.log('sunucu 3000 numarali port uzerinde aktif');