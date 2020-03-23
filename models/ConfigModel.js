var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var configSchema = new Schema({
    title: String,
    description: String,
    cardLeft: [{title: String, description: String, img: String}],
    cardRight: [{title: String, description: String, img: String}]
});

var Configs = mongoose.model('Config', configSchema);
module.exports = Configs;