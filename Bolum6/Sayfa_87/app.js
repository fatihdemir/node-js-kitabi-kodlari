// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 87
// 

var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var server = http.createServer(function(req,res){
	if (req.method == 'GET' && req.url == '/') {
		displayForm(res);
	} else if (req.method == 'POST'){
		body = '';
		req.on('data', function(chunk) {
      		body += chunk;
	    });
	   	req.on('end', function() {
	     	var data = qs.parse(body);

	     	res.writeHead(200);
	     	res.end(JSON.stringify(data));
	    });
	}
	
});

function displayForm(res) {
	fs.readFile('form.html', function(err, data) {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Content-Length': data.length
		});
		res.write(data);
		res.end();
	});
}

server.listen(3000);
console.log("server listening on 3000");
