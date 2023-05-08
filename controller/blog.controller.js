const blogService = require('../service/blog.service');
const BlogService = new blogService();
class blogController {
    async getAllReq(req, res) {
        try {
            const datas = await BlogService.getAll(req.query.size, req.query.category);
            res.json({
                success: true,
                data: datas
            })
        } catch (err) {
            console.log(err);
        }
    };

    async categoriesReq(req, res) {
        try {
            const categoriesData = await BlogService.getByCategories(req.query.size);
            res.json({
                success: true,
                data: categoriesData
            })
        } catch (err) {
            console.log(err);
        }

    };

    async categoryReq(req, res) {
        try {
            const categoryData = await BlogService.onlyCategory(req.query.category);
            res.json({
                success: true,
                data: categoryData
            })
        } catch (err) {
            console.log(err);
        }
    };

    async getSlugReq(req, res) {
        try {
            const data = await BlogService.getBySlug(req.params.slug);
            res.json({
                success: true,
                data: data
            })
        } catch (err) {
            console.log(err);
        }
    }

    async generatePostReq(req, res) {
        try {
            const generateData = await BlogService.generatePost(req.body);
            res.status(200).json({
                message: "success",
                data: generateData
            })
        } catch (err) {
            console.log(err);
        }
    }

    async delPostReq(req, res) {
        try {
            if (!req.params.id || req.params.id === undefined || req.params.id === null) {
                res.status(401).json({
                    message: "invalid Data"
                })
            } else {
                const delData = await BlogService.delPost(req.params.id)

                res.status(200).json({
                    message: "success",
                    data: delData
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    async updateDataReq(req, res) {
        try {
            if (!req.params.id || req.params.id === undefined || req.params.id === null) {
                res.status(401).json({
                    message: "invalid Data"
                })
            } else {
                const upDta = await BlogService.updatePost(req.params.id, req.body);
                res.status(200).json({
                    message: "success",
                    data: upDta
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = blogController;