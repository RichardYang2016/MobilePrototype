const express = require('express');
const router = express.Router();

const getInvoices = require("../controllers/InvoiceApproval/GetInvoices.js")
const getPOCounts = require("../controllers/POApproval/getPOCounts.js")
const getPRCounts = require("../controllers/PRApproval/getPRCounts.js")
const getVIMCounts = require("../controllers/VIM/getVIMCounts.js")
const getPOList = require("../controllers/POApproval/getPOList.js")
const getPODetail = require("../controllers/POApproval/getPODetail.js")

router.get('/invoices', function (req, res, next) {
    getInvoices(req, res, next)
});

router.get('/pocounts', function (req, res, next) {
    getPOCounts(req, res, next)
});
router.get('/polist', function (req, res, next) {
    getPOList(req, res, next)
});
router.get('/podetail/:id', function (req, res, next) {
    getPODetail(req, res, next)
});


router.get('/vimcounts', function (req, res, next) {
    getVIMCounts(req, res, next)
});

router.get('/prcounts', function (req, res, next) {
    getPRCounts(req, res, next)
});

router.all('/:pageCalled', function (req, res, next) {
    res.status(404).send('API Not Availale: ' + req.param("pageCalled"));
});

module.exports = router;