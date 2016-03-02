// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 45
// Resim 5.1

var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('yeniOlay', function() {
	console.log('yeniOlay tetiklendi!');
});

EventEmitter.emit('yeniOlay');
