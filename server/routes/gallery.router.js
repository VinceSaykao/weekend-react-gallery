const express = require('express');
const pool = require('../../../group-fs-react-shopping-list/server/modules/pool');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE


// POST Route
router.post('/', (req,res) => {
    const sqlText = `
    INSERT INTO "gallery" ("path","description","likes")
    VALUES ($1,$2,$3);    
    `
    const { path, description, likes } = req.body;

    if (path == '' || description == '' || likes == '') {
        res.sendStatus(999);
        console.log('Undefined data sent to server');
        return;
    }
    console.log( { path, description, likes } );
    const sqlOptions = [path,description,likes];

    pool.query(sqlText,sqlOptions)
    .then((response) => {
        console.log('Success from server POST Route', response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error POST', error);
        res.sendStatus(500);
    })
}); // END POST Route

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