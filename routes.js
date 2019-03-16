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
	app.get('/archive/:symbol',archives.findDataSymbols);

	//Retrieve all distinct symbols
	app.get('/archives/symbols',archives.findSymbols)

	//Retrieve all archives for a specific year
	app.get('/archive/year/:year', archives.archiveYear)
}