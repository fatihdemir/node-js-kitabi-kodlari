// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 47
// Resim 5.3

var events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.once('yeniOlay', function(userName) {
	console.log('yeniOlay ' + userName + ' icin tetiklendi!');
});

userName = 'ozcan';
EventEmitter.emit('yeniOlay', userName);

userName = 'mehmet';
EventEmitter.emit('yeniOlay', userName);
