const Archive = require('./models.js')

//Find all the distinct symbols in the archives

exports.findMatch = (req, res) => {
    Archive.find({
        '82A',
        '87A'
    }).$where('this.82A' == 'this.87A')
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving symbols"
            });
        });
}

exports.findUnmatch = (req, res) => {
	let symbol = req.params.symbol;
	Archive.find({"symbol":symbol})
	.then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving data"
            });
        });
}

exports.archiveYear = (req, res) => {
    let year = req.params.year;
    let start = year + '-' + '01' + '-' + '01';
    let end = year + '-' + '12' + '-' + '31';
    Archive.find({"date":{$gte: start, $lte: end}})
    .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving data"
            });
        });
}