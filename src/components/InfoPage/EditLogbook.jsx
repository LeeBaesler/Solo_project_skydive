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
}