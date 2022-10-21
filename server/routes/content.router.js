const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "content" WHERE "user_id" = $1;`;
    pool.query(queryText, [req.user.id])
    .then ((result)=>{
        console.log(`SP DB working`, result);
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log('Error in GET request', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let content = req.body;
    console.log(`Adding content entries`, content);

    let queryText = `INSERT INTO "content" ("image_url", "image_description", "video_url", 
                    "video_description", "user_id") 
                    VALUES ($1, $2, $3, $4, $5);`;
    pool.query (queryText, [content.image_url, content.image_description, content.video_url,
                 content.video_description, req.user.id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error POST adding content into content', error);
            res.sendStatus(500)
        });
});

router.put ('/:contentid', (req,res) => {
    let contentid = req.params.contentid;
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

router.delete('/:contentid', (req,res) => {
    let contentid = req.params.contentid;
    pool.query('DELETE FROM "content" WHERE id=$1', [req.params.contentid])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in DELETE content', error);
        res.sendStatus(500);
    })
});



module.exports = router;