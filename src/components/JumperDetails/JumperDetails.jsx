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
                {logbook.map(user => <h2> Jump Number: {user.jump_number}</h2> )}
            
            </section>
        </div>
        </>
    )
}

export default LogbookDetails;


