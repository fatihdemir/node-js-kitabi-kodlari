// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 80
// Resim 6.1

var http = require('http');
var sunucu = http.createServer(function(request,response) {
	console.log('istek alindi');
	
	response.write('merhaba dunya!');
	response.end();
});

sunucu.listen(3000);
console.log('Sunucu http://127.0.0.1:3000/ adresinde aktif');
