const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "videos" WHERE "user_id" = $1;`;
    pool.query(queryText, [req.user.id])
    .then ((result)=>{
        console.log(`SP DB working`, result);
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log('Error in GET VIDEO request', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let videos = req.body;
    console.log(`Adding content entries`, videos);

    let queryText = `INSERT INTO "videos" ("video_url", 
                    "video_description", "user_id") 
                    VALUES ($1, $2, $3);`;
    pool.query (queryText, [videos.video_url,
                 videos.video_description, req.user.id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error POST adding VIDEO into VIDEO', error);
            res.sendStatus(500)
        });
});

router.put ('/:videosid', (req,res) => {
    let videosid = req.params.videosid;
    console.log(`in PUT route /content/edit/${videosid}`);
    let videos = req.body;
    let query = `UPDATE "videos" SET "video_url"=$1, 
        "video_description"=$2 WHERE id=$3 RETURNING *;`;
    pool.query(query, [videos.video_url, videos.video_description, videosid])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`Error editing content`, error);
            res.sendStatus(500);
        });
})

router.delete('/:videosid', (req,res) => {
    let videosid = req.params.videosid;
    pool.query('DELETE FROM "videos" WHERE id=$1', [req.params.videosid])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in delete VIDEOS server', error);
        res.sendStatus(500);
    })
});



module.exports = router;