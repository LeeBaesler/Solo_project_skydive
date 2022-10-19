import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EditLogbook(){
    const logbook = useSelector (store => store.logbook);
    const dispatch = useDispatch();
    const history = useHistory();

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

useEffect (() => {
    dispatch ({
        type: 'GET_LOG',
        payload: Number(logbookid)
    })
})

return (
    <section>
        <h1> Fix Your Logbook</h1>
        <input type="number" placeholder="Jump Number" 
    </section>
)

}