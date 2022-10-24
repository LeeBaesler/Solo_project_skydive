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
    console.log(`Adding content entries`, photos);

    let queryText = `INSERT INTO "photos" ("image_url", "image_description",
                     "user_id") 
                    VALUES ($1, $2, $3,);`;
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
    let photosid = req.params.contentid;
    console.log(`in PUT route /content/edit/${contentid}`);
    let content = req.body;
    let query = `UPDATE "content" SET "image_url"=$1, "image_description"=$2, 
                "video_url"=$3, "video_description"=$4 WHERE id=$5 RETURNING *;`;
    pool.query(query, [content.image_url, content.image_description, content.video_url, content.video_description, contentid])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`Error editing content`, error);
            res.sendStatus(500);
        });
})