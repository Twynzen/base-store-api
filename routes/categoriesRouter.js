const express = require('express');
const CategoriesService = require('../services/categoriesService');
const router = express.Router();
const service = new CategoriesService();

router.get('/:categoryId/products/:productId', (req, res) => {
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    })

})


router.get('/:id', (req, res) => {
    const { id } = req.params
    const categories = service.findOne(id);
    res.json(categories);
})

module.exports = router;
