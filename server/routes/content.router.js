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
                    "video_description") 
                    VALUES ($1, $2, $3, $4);`;
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
    console.log(`in PUT route /logbook/edit/${logbookid}`);
    let skydive = req.body;
    let query = `UPDATE "log_book" SET "jump_number"=$1, "date"=$2, "place"=$3, "aircraft"=$4, 
            "equipment"=$5, "altitude"=$6, "freefall"=$7, "total_freefall"=$8, "description"=$9 
            WHERE id=$10 RETURNING *;`;
    pool.query(query, [skydive.jump_number, skydive.date, skydive.place, skydive.aircraft, skydive.equipment,
        skydive.altitude, skydive.freefall, skydive.total_freefall, skydive.description, logbookid])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`Error editing logbook`, error);
            res.sendStatus(500);
        });
})