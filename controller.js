const Archive = require('./models.js')

//Find all the distinct symbols in the archives

exports.findMatch = (req, res) => {
    var data = [];
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
                            obj[keyStr].push((result[inx])["20"]);
                        }else{
                            obj[keyStr] = [((result[inx])["20"])];
                        }
                    }
                    data.push(obj);
                })
                res.send(data);
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
            const keyStr = valArr;
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
                    unmatch:  Object.keys(unmatch).map((v)=>(result[v]))
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
    const valArr = [];
    let obj = {};
    let confirmationStatus = '';
    let keyArr = Object.keys(query);
    let index = keyArr.indexOf('32B');
    keyArr.splice(index,1);
    keyArr.push('30V');
    Archive.find({})
    .then(result => {
        result.forEach((val,inx)=>{
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
                            obj[keyStr].push((result[inx])["20"]);

                        }else{
                            obj[keyStr] = [((result[inx])["20"])];
                        }
                        confirmationStatus = 'Matched';
                    }else{
                        confirmationStatus = 'Unmatched';
                    }
                })
                res.send(confirmationStatus);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving symbols"
            });
        });
}

exports.closeFit = (req,res) => {
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
                            obj[keyStr].push((result[inx])["20"]);
                        }else{
                            obj[keyStr] = [((result[inx])["20"])];
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

