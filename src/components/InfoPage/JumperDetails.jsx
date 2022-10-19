import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function LogbookDetails(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector (store => store.logbook);

    const [jumpNumber, setJumpNumber] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [equipment, setEquipment] = useState('');
    const [altitude, setAltitude] = useState('');
    const [freefall, setFreefall] = useState('');
    const [totalFreefall, setTotalFreefall] = useState('');
    const [description, setDescription] = useState(''); 

    const {logbookid} = useParams();

    const editLog = {
        logbookid: Number(logbookid),
        jump_number: jumpNumber,
        date: date,
        place: place,
        aircraft: aircraft,
        equipment: equipment,
        altitude: altitude,
        freefall: freefall,
        total_freefall: totalFreefall,
        description: description,
    }

    const editLogbook = () => {
        dispatch ({
            type: 'EDIT_LOG',
            payload: editLog
        })
        console.log('what is payload?:', payload)
    }

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
                <input type="number" placeholder="Edit Jump Number" value={jumpNumber} onChange={event => setJumpNumber(event.target.value)}/>
                
                <h2> Most Recent Jump: {logbook[logbook.length-1]?.date}</h2>
                <input type="text" placeholder="Edit Date" value={date} onChange={event => setDate(event.target.value)}/>
                
                <h2> Last Location: {logbook[logbook.length-1]?.place}</h2>
                <input type="text" placeholder="Edit Location" value={place} onChange={event => setPlace(event.target.value)}/>
                
                <h2> Aircraft: {logbook[logbook.length-1]?.aircraft}</h2>
                <input type="text" placeholder="Edit Aircraft" value={aircraft} onChange={event => setAircraft(event.target.value)}/>
                
                <h2> Equipment: {logbook[logbook.length-1]?.equipment}</h2>
                <input type="text" placeholder="Edit Equipment" value={equipment} onChange={event => setEquipment(event.target.value)}/>
                
                <h2> Altitude: {logbook[logbook.length-1]?.altitude}</h2>
                <input type="number" placeholder="Edit Altitude" value={altitude} onChange={event => setAltitude(event.target.value)}/>
                
                <h2> Freefall: {logbook[logbook.length-1]?.freefall}</h2>
                <input type="number" placeholder="Edit Freefall" value={freefall} onChange={event => setFreefall(event.target.value)}/>
                
                <h2> Total Freefall: {logbook[logbook.length-1]?.total_freefall}</h2>
                <input type="number" placeholder="Edit Total Freefall" value={totalFreefall} onChange={event => setTotalFreefall(event.target.value)}/>
                
                <h2> Description: {logbook[logbook.length-1]?.description}</h2>
                <input type="text" placeholder="Edit Description" value={description} onChange={event => setDescription(event.target.value)}/>
            <button onClick={() => editLogbook()}>Edit</button>
            </section>
        </div>
        </>
    )
}

export default LogbookDetails;


