const docController = require('../controller/doc.controller');
const DocController = new docController();
const express = require('express');
const router = express.Router();

router.get("/readdoc", DocController.docDataReq);

module.exports = router;
