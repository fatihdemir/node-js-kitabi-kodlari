// Özcan Kasal
// Node.js | DikeyEksen Yayınları
// Sayfa 50
// Resim 5.7

// Kod duzeltme: kitapta listenerCount yönteminin doğrudan EventEmitter sınıfına iliştirilmesi
// gerektiği belirtildi. Bu teknik node.js tarafından "depreciated" yani kaldırılmak üzere
// olarak işaretlendi. node.js sürümünüze bağlı olarak kitaptaki örnek hata verebilir.
// alttaki örnekte emitter değişkeni bir EventEmitter nesnesi olarak tanımlanmış ve 
// listenerCount yöntemi iliştirilmiştir.

var events = require("events");
var emitter = new events.EventEmitter();

function dinleyiciFonksiyonu1() {
	console.log("yeniOlay icin birinci dinleyiciFonksiyonu");
}

function dinleyiciFonksiyonu2() {
	console.log("yeniOlay icin ikinci dinleyiciFonksiyonu");
}

emitter.on("yeniOlay", dinleyiciFonksiyonu1);
emitter.on("yeniOlay", dinleyiciFonksiyonu2);

emitter.removeListener("yeniOlay", dinleyiciFonksiyonu1);

emitter.emit("yeniOlay");