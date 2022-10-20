const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();



router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "log_book";`;
    pool.query(queryText)
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
    let logbook = req.body;
    console.log(`Adding logbook entries`, logbook);

    let queryText = `INSERT INTO "log_book" ("jump_number", "date", "place", 
                    "aircraft", "equipment", "altitude", "freefall", "total_freefall", 
                    "description") 
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
    pool.query (queryText, [logbook.jump_number, logbook.date, logbook.place, logbook.aircraft,
        logbook.equipment, logbook.altitude, logbook.freefall, logbook.total_freefall,
        logbook.description])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error POST adding entries into logbook, error');
            res.sendStatus(500)
        });
});

router.put ('/:logbookid', (req,res) => {
    let logbookid = req.params.logbookid;
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





module.exports = router;