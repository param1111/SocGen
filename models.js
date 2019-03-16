const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var oneToOne = new Schema({
	'20': String, 
   	'22A': String ,
  	'22C': String ,
   '30T': String ,
   '52A': String ,
   '82A': String ,
   '82D': String,
   '82J': String,
   '87A': String,
   '77H': String ,
   '30V': String ,
   '36':  String ,
   '32B': String ,
   '57A': String ,
   '33B': String ,
   '53A': String ,
   '57D': String,
   '58A': String,
   '24D': String 
},{collection : 'myCollection'});

module.exports = mongoose.model('Archive',oneToOne);