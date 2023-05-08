
const express = require('express');
const router = express.Router();
const emailContrtoller = require('../controller/email.controller');
const emailController = new emailContrtoller();
const subscribeMiddleware = require('../middleware/email.validation');





router.post("/create", subscribeMiddleware, emailController.emailPostReq);

module.exports = router;