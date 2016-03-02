// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 81
// Resim 6.3

var http = require('http');
var sunucu = http.createServer(function(request,response) {
	console.log('istek mesaji:');
	console.log(request.headers);
	
	response.write('merhaba dunya!');
	response.end();
});

sunucu.listen(3000);
console.log('Sunucu http://127.0.0.1:3000/ adresinde aktif');