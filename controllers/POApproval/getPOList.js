var config = require('../../config/config')

module.exports = function getPOCounts(req, res, next) {

    var userId = '37730' // should get from request. should be token instead of user name.  
    // count is used based. 

    let list = []

    list.push({
        "PoNumber": "1409154",
        "PoNumberFormatted": "1409154",
        "WiCreatedAt": "\/Date(1467855074000)\/",
        "ForwardedByID": "",
        "ForwardedByName": "",
        "SubstitutingForID": "",
        "SubstitutingForName": "",
        "CreatedByID": "RYANG",
        "CreatedByName": "Richard Yang",
        "Value": "100000.00",
        "Currency": "USD",
        "SupplierID": "113419",
        "SupplierName": "MICRO PRECISION CALIBRATION INC",
        "ItemDescriptions": "Test Product",
        "SearchForText": ""
    })

    list.push({
        "WorkitemID": "000005703167",
        "TaskType": "TS90600009",
        "PoNumber": "1409154",
        "PoNumberFormatted": "1409154",
        "WiCreatedAt": "\/Date(1466750219000)\/",
        "ForwardedByID": "",
        "ForwardedByName": "",
        "SubstitutingForID": "",
        "SubstitutingForName": "",
        "CreatedByID": "RYANG",
        "CreatedByName": "Richard Yang",
        "Value": "100000.00",
        "Currency": "USD",
        "SupplierID": "113419",
        "SupplierName": "MICRO PRECISION CALIBRATION INC",
        "ItemDescriptions": "Test Product",
        "SearchForText": ""
    })

    res.status(200).send(JSON.stringify(list))
}