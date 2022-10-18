const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();


router.get('/', (req,res) => {
    const queryText = `SELECT "image", "description", "date" FROM "log_book";`;
    pool.query(queryText)
    .then ((result)=>{
        console.log(`SP DB working`, result);
        res.send(result.rows);
    })
    .catch((error)=> {
        console.log('Error in GET request', error);
        res.sendStatus(500);
    })
})

module.exports = router;