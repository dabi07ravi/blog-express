const docService = require('../service/doc.service');
const DocService = new docService();
class docController{
    async docDataReq(req,res){
        const reqdata = await DocService.getAllData();
        res.send(reqdata);
    }
}

module.exports = docController;