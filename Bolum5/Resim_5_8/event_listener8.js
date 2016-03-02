// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 51
// Resim 5.8

// Kod duzeltme: kitapta listenerCount yönteminin doğrudan EventEmitter sınıfına iliştirilmesi
// gerektiği belirtildi. Bu teknik node.js tarafından "depreciated" yani kaldırılmak üzere
// olarak işaretlendi. node.js sürümünüze bağlı olarak kitaptaki örnek hata verebilir.
// alttaki örnekte emitter değişkeni bir EventEmitter nesnesi olarak tanımlanmış ve 
// listenerCount yöntemi iliştirilmiştir.

var events = require("events");
var emitter = new events.EventEmitter();

function dinleyiciFonksiyonu1() {
	console.log("yeniOlay1 icin birinci dinleyiciFonksiyonu");
}

function dinleyiciFonksiyonu2() {
	console.log("yeniOlay1 icin ikinci dinleyiciFonksiyonu");
}

function dinleyiciFonksiyonu3() {
	console.log("yeniOlay2 icin birinci dinleyiciFonksiyonu");
}

emitter.on("yeniOlay1", dinleyiciFonksiyonu1);
emitter.on("yeniOlay1", dinleyiciFonksiyonu2);
emitter.on("yeniOlay2", dinleyiciFonksiyonu3);

emitter.removeAllListeners("yeniOlay1");

emitter.emit("yeniOlay1");

emitter.emit("yeniOlay2");