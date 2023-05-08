const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog.controller');
const BlogController = new blogController();
const blogMiddleware = require('../middleware/blog.validation');

router.get("/readall", BlogController.getAllReq);
router.get("/read/:slug", BlogController.getSlugReq);
router.get("/categories", BlogController.categoriesReq);
router.get('/onlyCategory',BlogController.categoryReq );
router.post('/post', blogMiddleware, BlogController.generatePostReq);
router.delete('/delete/:id', BlogController.delPostReq);
router.put('/update/:id',BlogController.updateDataReq);




module.exports = router;
