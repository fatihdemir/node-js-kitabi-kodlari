// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 49
// Resim 5.5

// Kod duzeltme: kitapta listenerCount yönteminin doğrudan EventEmitter sınıfına iliştirilmesi
// gerektiği belirtildi. Bu teknik node.js tarafından "depreciated" yani kaldırılmak üzere
// olarak işaretlendi. node.js sürümünüze bağlı olarak kitaptaki örnek hata verebilir.
// alttaki örnekte emitter değişkeni bir EventEmitter nesnesi olarak tanımlanmış ve 
// listenerCount yöntemi iliştirilmiştir.

var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("yeniOlay", function(userName) {
	console.log("yeniOlay " + userName + " icin tetiklendi!");
});

emitter.on("yeniOlay", function(userName) {
	console.log("yeniOlay " + userName + " icin tekrar tetiklendi!");
});

emitter.listeners("yeniOlay").forEach(function(dinleyiciFonksiyonu) {
	userName = "ozcan";
	dinleyiciFonksiyonu(userName);
});
