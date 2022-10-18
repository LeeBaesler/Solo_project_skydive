import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function LogbookDetails(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector (store => store.logbook);

    console.log('logbook:', logbook)

    useEffect(()=> {
        dispatch ({type: 'GET_LOG'});
    }, []);

    const setLogbookDetails = (logbook) => {
        dispatch({
            type: "FETCH_LOG",
            payload: logbook,
        })
        console.log(logbook)
    }

    return (
        <>
        <h1>Jump History</h1>
        <div>
            <section>
                <h2> Jump Number: {logbook[logbook.length-1]?.jump_number}</h2>
                <h2> Most Recent Jump: {logbook[logbook.length-1]?.date}</h2>
                <h2> Last Location: {logbook[logbook.length-1]?.place}</h2>
                <h2> Aircraft: {logbook[logbook.length-1]?.aircraft}</h2>
                <h2> Equipment: {logbook[logbook.length-1]?.equipment}</h2>
                <h2> Altitude: {logbook[logbook.length-1]?.altitude}</h2>
                <h2> Freefall: {logbook[logbook.length-1]?.freefall}</h2>
                <h2> Total Freefall: {logbook[logbook.length-1]?.total_freefall}</h2>
                <h2> Description: {logbook[logbook.length-1]?.description}</h2>
            </section>
        </div>
        </>
    )
}

export default LogbookDetails;


