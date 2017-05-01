var config = require('../../config/config')

module.exports = function getInvoices(req, res, next) {
    
    var resp = {}
    var newUser = req.body;
    var result = {}
    var userId = '37730'  // should get from request. should be token instead of user name.  
    //config.tempPwd

    var userSystems = ["SAP","Oracle"]  // need to think how to implement this mechanism. 

    if (userSystems.indexOf("SAP") != -1) {   // get SAP data. 
        axios.get('http://services.odata.org/V3/Northwind/Northwind.svc/Invoices?$format=json&$top=10')
        .then(function (response) {
         
          res.status(200).send(JSON.stringify(response.data.value))
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }
    
}