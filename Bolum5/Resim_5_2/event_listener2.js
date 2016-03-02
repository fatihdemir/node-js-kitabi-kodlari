// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 46
// Resim 5.2

var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('yeniOlay', function(userName) {
	console.log('yeniOlay ' + userName + ' icin tetiklendi!');
});

userName = 'ozcan';
EventEmitter.emit('yeniOlay',userName);