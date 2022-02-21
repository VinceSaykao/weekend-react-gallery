const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
    const sqlText = 'SELECT * FROM gallery'
    pool.query(sqlText)
    .then((response) => {
        res.send(result.rows)
    .catch((error) => {
        console.log('CATCH GET' , error);
    })
    })
}); // END GET Route

module.exports = router;