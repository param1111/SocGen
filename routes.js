module.exports = (app) =>{
	const archives = require('./controller.js');

	app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

	//Retrieve all archives of specific symbol
	app.get('/matched',archives.findMatch)

	//Retrieve all distinct symbols
	app.get('/unmatched',archives.findUnmatch)

	//Retrieve all archives for a specific year
	app.get('/archivedata', archives.archiveData)

	//Implement Search criteria
	app.get('/archive', archives.archived)

}