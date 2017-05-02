var config = require('../../config/config')

module.exports = function getPODetail(req, res, next) {

    var userId = '37730' // should get from request. should be token instead of user name.  
    let poId = req.params.id
    let items = [{

        "ItemNumber": "00010",
        "PoNumber": "1409154",
        "ItemNumberFormatted": "10",
        "PoNumberFormatted": "1409154",
        "ItemCategory": "0",
        "ItemCategoryDescription": "Standard",
        "Description": "Test Product",
        "Blocked": "",
        "Unit": "EA",
        "UnitDescription": "each",
        "Quantity": "1",
        "Value": "100000.00",
        "Currency": "USD",
        "PricePerUnit": "100000.00",
        "CurrencyForPPU": "USD",
        "QuantityForPPU": "1",
        "UnitForPPU": "EA",
        "UnitForPPUDescription": "each",
        "DeliveryDate": "\/Date(1466121600000)\/",
        "DeliveryDateAlsoLater": "",
        "Incoterm": "",
        "IncotermDescription": "",
        "IncotermLocation": "",
        "NumberOfNotes": 0,
        "NumberOfAttachments": 0,
        "NumberServiceLines": 0
    }, {
        "ItemNumber": "00020",
        "PoNumber": "1409154",
        "ItemNumberFormatted": "10",
        "PoNumberFormatted": "1409154",
        "ItemCategory": "0",
        "ItemCategoryDescription": "Standard",
        "Description": "Test Product 2",
        "Blocked": "",
        "Unit": "EA",
        "UnitDescription": "each",
        "Quantity": "1",
        "Value": "1000.00",
        "Currency": "USD",
        "PricePerUnit": "1000.00",
        "CurrencyForPPU": "USD",
        "QuantityForPPU": "1",
        "UnitForPPU": "EA",
        "UnitForPPUDescription": "each",
        "DeliveryDate": "\/Date(1466121600000)\/",
        "DeliveryDateAlsoLater": "",
        "Incoterm": "",
        "IncotermDescription": "",
        "IncotermLocation": "",
        "NumberOfNotes": 0,
        "NumberOfAttachments": 0,
        "NumberServiceLines": 0
    }]
    let poDetail = {
        "AccountCategoryDescription": "Cost Center",
        "AccountNumber": "10901000",
        "AccountDescription": "Logan Manufacturing",
        "GlAccountNumber": "74000",
        "GlAccountDescription": "Legal fees - general",
        "CumulatedAccountingTypeCode": "1",
        "CumulatedAccountingTypeCodeName": "Single Assignment",
        "CostCentre": "10901000",
        "CostCentreIndicator": "1",
        "CostCentreDescription": "Logan Manufacturing",
        "WBSElement": "",
        "WBSElementIndicator": "",
        "WBSElementDescription": "",
        "Network": "",
        "NetworkIndicator": "",
        "NetworkDescription": "",
        "Order": "",
        "OrderIndicator": "",
        "OrderDescription": "",
        "SalesOrder": "",
        "SalesOrderItem": "0",
        "SalesOrderScheduleLine": "0",
        "SalesOrderIndicator": "",
        "SalesOrderDescription": "",
        "Asset": "",
        "AssetSubNumber": "",
        "AssetIndicator": "",
        "AssetDescription": "",
        "ProfitCenter": "1090FUNC",
        "ProfitCenterDescription": "Logan Functional expenses",
        "WorkitemID": "000005703167",
        "PoNumber": "1409154",
        "PoNumberFormatted": "1409154",
        "WiCreatedAt": "\/Date(1466775419000)\/",
        "ForwardedByID": "",
        "ForwardedByName": "",
        "SubstitutingForID": "",
        "SubstitutingForName": "",
        "PaymentTerm": "Z003",
        "PaymentTermDescription": "NET 10 DAYS",
        "Incoterm": "",
        "IncotermDescription": "",
        "IncotermLocation": "",
        "CompanyCode": "1000",
        "CompanyCodeDescription": "Newport Corporation",
        "CreatedByID": "RYANG",
        "CreatedByName": "Richard Yang",
        "NumberOfNotes": 0,
        "NumberOfAttachments": 1,
        "Value": "100000.00",
        "Currency": "USD",
        "SupplierID": "113419",
        "SupplierName": "MICRO PRECISION CALIBRATION INC",
        "NumberOfItems": 1,
        "Plant": "1090",
        "PlantName": "Ophir-Spiricon, LLC",
        "DeliveryDate": "\/Date(1466121600000)\/",
        "DeliveryDateAlsoLater": "",
        "OrderingAddress": "",
        "CPDVendorName": "",
        "NextAgents": "N/A",

        items: items
    }

    let items2 = [{

        "ItemNumberFormatted": "1-1",
        "PoNumberFormatted": "A431221",
        "Description": "Legal Fee",
        "Value": "1415.27",
        "Currency": "USD"

    }]
    let poDetail2 = {
        "Value": '1415.27',
        "Currency": 'USD',
        "CreatedByName": 'RYANG',
        "GlAccountNumber": "ORA1001",
        "GlAccountDescription": "Legal fees - general",
        "CostCentre": "ORA_1000",
        "CostCentreDescription": "Andover Office Administration",
        "PoNumber": "A431221",
        "PaymentTermDescription": "NET 30 DAYS",
        "SupplierName": "Tafapolsky & Smith LLP",
        "PlantName": "MKS Andover",
        items: items2
    }
    if (poId === 'A431221') {
        res.status(200).send(JSON.stringify(poDetail2))
    } else {
        res.status(200).send(JSON.stringify(poDetail))
    }

}