import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment/moment';


function LogbookDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);

    let params = useParams();
    console.log(params);

    let logbookid = params.logbookid;

    let book = logbook.find(book => book.id === Number(logbookid));
    
    // const [id, setId] = useState('');
    const [jumpNumber, setJumpNumber] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [equipment, setEquipment] = useState('');
    const [altitude, setAltitude] = useState('');
    const [freefall, setFreefall] = useState('');
    const [totalFreefall, setTotalFreefall] = useState('');
    const [description, setDescription] = useState('');
    
    
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
        dispatch({
            type: 'EDIT_LOG',
            payload: editLog
        })
    }
    
    const deleteLogbook = () => {
        dispatch({
            type: 'DELETE_LOG',
            payload: editLog
        })
        history.push('/jump/history');
    }
    
    console.log('logbook:', logbook)
    
    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(book !== undefined){ 
        setJumpNumber(book.jump_number);
        
        console.log('book', book);
    }
        // if the  book is found update the local state with the books values
        //
    }, [book]); //only run this when book value changes
    
    const setLogbookDetails = (logbook) => {
        dispatch({
            type: "FETCH_LOG",
            payload: logbook,
        })
        console.log(logbook)
    }

    if (book === undefined) {
        return <h2> Sorry, no edit available for jump you are looking for</h2>
    }
    
    return (
        <>
            <h1>Jump History</h1>
            <div>
                <section>
                    <h2> Jump Number: {book.jump_number}</h2>
                    <input type="number" placeholder="Edit Jump Number" value={jumpNumber} onChange={event => setJumpNumber(event.target.value)} />

                    <h2> Most Recent Jump: {book.date}</h2>
                    <input type="text" placeholder="Edit Date" value={date} onChange={event => setDate(event.target.value)} />

                    <h2> Last Location: {book.place}</h2>
                    <input type="text" placeholder="Edit Location" value={place} onChange={event => setPlace(event.target.value)} />

                    <h2> Aircraft: {book.aircraft}</h2>
                    <input type="text" placeholder="Edit Aircraft" value={aircraft} onChange={event => setAircraft(event.target.value)} />

                    <h2> Equipment: {book.equipment}</h2>
                    <input type="text" placeholder="Edit Equipment" value={equipment} onChange={event => setEquipment(event.target.value)} />

                    <h2> Altitude: {book.altitude}</h2>
                    <input type="number" placeholder="Edit Altitude" value={altitude} onChange={event => setAltitude(event.target.value)} />

                    <h2> Freefall: {book.freefall}</h2>
                    <input type="number" placeholder="Edit Freefall" value={freefall} onChange={event => setFreefall(event.target.value)} />

                    <h2> Total Freefall: {book.total_freefall}</h2>
                    <input type="number" placeholder="Edit Total Freefall" value={totalFreefall} onChange={event => setTotalFreefall(event.target.value)} />

                    <h2> Description: {book.description}</h2>
                    <input type="text" placeholder="Edit Description" value={description} onChange={event => setDescription(event.target.value)} />
                    <button onClick={() => editLogbook()}>Save</button>
                    <button onClick={() => deleteLogbook()}> Delete </button>
                </section>
            </div>
        </>
    )
}

export default LogbookDetails;


