
const { application } = require('express');
const express = require('express');
const router = express.Router();
const contactContrtoller = require('../controller/contact.controller');
const ContactController = new contactContrtoller();
const contactMiddleware = require('../middleware/contact.validation');

router.post("/create",contactMiddleware,ContactController.contactPostReq);

module.exports = router;