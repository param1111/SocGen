const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./db.config.js');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConnect.url, {
	useNewUrlParser : true
}).then(()=>{
	console.log("Successfully connected to the database !")
}).catch((err)=>{
	console.log("Error connecting to the database", err);
	process.exit();
});

app.get('/',(req,res)=>{
	res.json({"Text":"Welcome to the Societe Generale Brainwaves-2019"})
});

require('./routes.js')(app);


app.listen(3001,()=>{
	console.log("Server started on port 3001");
});