var mongoose = require('mongoose');

mongoose.connect( 
	'mongodb://127.0.0.1:27017/ornek-uygulama'
);

var Schema = mongoose.Schema;
var userSchema = new Schema({
	ad: String,
	soyad: String,
	dogumTarihi: String,
	email: String
});

mongoose.model('User', userSchema);
