const express = require('express');
const router = express.Router();


router.get('/:id', (req, res) => {
    const { id } = req.params
    res.json({
        id,
        firstName: 'Daniel',
        lastName: 'Castiblanco'
    })
})

module.exports = router;
