/*jshint esversion: 6 */

// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

//TODO Lägg till ett datum för senaste inloggning
var UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);
