
var mongoose = require('mongoose');

module.exports = function () {
	mongoose.connect('mongodb://localhost/cervajs');
}