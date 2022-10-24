const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "photos" WHERE "user_id" = $1;`;
    pool.query(queryText, [req.user.id])
    .then ((result)=>{
        console.log(`SP DB working`, result);
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log('Error in GET PHOTO request', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let photos = req.body;
    console.log(`Adding photo entries`, photos);

    let queryText = `INSERT INTO "photos" ("image_url", "image_description",
                     "user_id") 
                    VALUES ($1, $2, $3);`;
    pool.query (queryText, [photos.image_url, photos.image_description,
                 req.user.id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error POST adding PHOTO into PHOTO', error);
            res.sendStatus(500)
        });
});

router.put ('/:photosid', (req,res) => {
    let photosid = req.params.photosid;
    console.log(`in PUT route /photos/edit/${photosid}`);
    let photos = req.body;
    let query = `UPDATE "photos" SET "image_url"=$1, "image_description"=$2, 
                    WHERE id=$3 RETURNING *;`;
    pool.query(query, [photos.image_url, photos.image_description, photosid])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`Error editing PHOTOS`, error);
            res.sendStatus(500);
        });
})

router.delete('/:photosid', (req,res) => {
    let photosid = req.params.contentid;
    pool.query('DELETE FROM "photos" WHERE id=$1', [req.params.photosid])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in delete PHOTO server', error);
        res.sendStatus(500);
    })
});



module.exports = router;