const fs = require('fs');
var path = require('path');
var jsonData = [];
let parseData = [];
var mongoose = require('mongoose');
var assert = require('assert');
var async = require('async');
var dirname = '/Users/psi/Downloads/fullstack/Sample data/OneToOneMatchingSampleData/SgOneToOneMatchingSampleData/';

function readFiles(dirname,onContentLoaded){
	let files = fs.readdir(dirname, function(err, filenames) {
	    if (err) {
	      onError(err);
	      return;
	    }
	//     filenames.forEach(function(filename){
	// 		    fs.readFile(path.resolve(dirname, filename), "utf8", (err, data) => {
	// 		  if(err){console.log(err);}else{
	// 		    data = data.split("\n");
	// 		    for (var i = 1; i< data.length-1; i++){
	// 		   	 jsonData.push(data[i]);
	// 		    }
	// 		  }
	// 		  jsonData.forEach(async function(data){
	// 		  	let [,key,val] = data1.match(/:([a-zA-Z0-9]+):([a-zA-Z0-9 ./]+)/);
	// 			let obj = { [key]: val };
	// 			parseData.push(obj);
	// 		  });
	// 		  console.log(parseData);
	// 		});
	// 	});	
	});
}

// function onContentLoaded(filename,content){

// }

readFiles(dirname);
//console.log(parseData);

// fs.readFile(dirname + '1_message.txt', "utf8", (err, data) => {
//   if(err){console.log(err);}else{
//     data = data.split("\n");
//     for (var i = 1; i< data.length-1; i++){
//    		jsonData.push(data[i]);
//     }
//   }
//   jsonData.forEach(function(data){
//   	const [,key,val] = data.match(/:([a-zA-Z0-9]+):([a-zA-Z0-9 ./]+)/);
// 	let obj = { [key]: val };
// 	parseData.push(obj);
//   });
//   console.log(parseData);
// });

// mongoose.connect('mongodb://localhost/brainwave');

// var Schema = mongoose.Schema;

// var oneToOne = new Schema({
// 	'20': String, 
//    	'22A': String ,
//   	'22C': String ,
//    '30T': String ,
//    '52A': String ,
//    '82A': String ,
//    '82D': String,
//    '82J': String,
//    '87A': String,
//    '77H': String ,
//    '30V': String ,
//    '36':  String ,
//    '32B': String ,
//    '57A': String ,
//    '33B': String ,
//    '53A': String ,
//    '57D': String,
//    '58A': String,
//    '24D': String 
// },{collection : 'myCollection'});

// var archive = mongoose.model('archive',oneToOne);

// archive.collection.insertMany(parseData,function(err,res){
// 	if (err){ 
//           return console.error(err);
//       } else {
//         console.log("Multiple documents inserted to Collection");
//     }
//     mongoose.connection.close()

// });







