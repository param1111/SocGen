const Archive = require('./models.js')

//Find all the distinct symbols in the archives

exports.findMatch = (req, res) => {
    var obj = {};
    let keyArr = ['77H','30T','30V','36'];
    Archive.find({})
        .then(result => {
            result.forEach((val,inx)=>{
                  const valArr = [];
                  if(val["82A"] && val["87A"]){
                        if(val["82A"]<val["87A"]){
                            valArr.push(val["82A"]);
                            valArr.push(val["87A"]);
                        }else{
                            valArr.push(val["87A"]);
                            valArr.push(val["82A"]);
                        }
                    }
                    if(val["32B"] && val["33B"]){
                        if(val["32B"]<val["33B"]){
                            valArr.push(val["32B"]);
                            valArr.push(val["33B"]);
                        }else{
                            valArr.push(val["33B"]);
                            valArr.push(val["32B"]);
                        }
                    }
                  const tc = valArr.length;
                    keyArr.forEach((key)=>{
                        if(val[key]){
                            valArr.push(val[key]);
                        }
                    });
                  if(valArr.length - tc === keyArr.length){
                        const keyStr = valArr;
                        if(obj[keyStr]){
                            obj[keyStr].push(inx);
                        }else{
                            obj[keyStr] = [inx];
                        }
                    }
                })
                res.send(obj);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving symbols"
            });
        });
}

exports.findUnmatch = (req, res) => {
    const match = {};
    const unmatch = {};
    let keyArr = ['77H','30T','30V','36'];
	Archive.find({})
	.then(result => {
        result.forEach((val,inx)=>{
            unmatch[inx] = true;
            const valArr = [];
            if(val["82A"] && val["87A"]){
                if(val["82A"]<val["87A"]){
                    valArr.push(val["82A"]);
                    valArr.push(val["87A"]);
                }else{
                    valArr.push(val["87A"]);
                    valArr.push(val["82A"]);
                }
            }
            if(val["32B"] && val["33B"]){
                if(val["32B"]<val["33B"]){
                    valArr.push(val["32B"]);
                    valArr.push(val["33B"]);
                }else{
                    valArr.push(val["33B"]);
                    valArr.push(val["32B"]);
                }
            }
            const tc = valArr.length;
            keyArr.forEach((key)=>{
                if(val[key]){
                    valArr.push(val[key]);
                }
            });
            if(valArr.length - tc === keyArr.length){
            const keyStr = JSON.stringify(valArr);
            if(match[keyStr]){
                match[keyStr].push(inx);
            }else{
                match[keyStr] = [inx];
            }
         }
        });
            Object.keys(match).forEach((key)=>{
            if(match[key].length===1){
                delete match[key]
            }
                });
                Object.values(match).forEach((sArr)=>{
                    sArr.forEach((val)=>{
                        delete unmatch[val];
                    });
                })
                res.send({
                    unmatch:  Object.keys(unmatch).map((v)=>parseInt(v))
                });
            }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving symbols"
            });
        });
}

exports.archiveData = (req, res) => {
    Archive.find({})
    .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving data"
            });
        });
}


exports.archived = (req, res) => {
    let query = req.query;
    let confirmationStatus = '';
    let keyArr = Object.keys(query);
    Archive.find({})
    .then(result => {
        result.forEach((val,inx)=>{
                  const valArr = [];
                  if(req.query["32B"] && val["33B"]){
                        if(req.query["32B"]<val["33B"]){
                            valArr.push(req.query["32B"]);
                            valArr.push(val["33B"]);
                        }else{
                            valArr.push(val["33B"]);
                            valArr.push(req.query["32B"]);
                        }
                    }
                  const tc = valArr.length;
                    keyArr.forEach((key)=>{
                        if(val[key]){
                            valArr.push(val[key]);
                        }
                    });
                  if(valArr.length - tc === keyArr.length){
                        const keyStr = valArr;
                        if(obj[keyStr]){
                            obj[keyStr].push(inx);
                        }else{
                            obj[keyStr] = [inx];
                        }
                    }
                })
                res.send(obj);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving data"
            });
        });
}

