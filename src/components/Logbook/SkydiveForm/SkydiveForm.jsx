import React, {useEffect, useState} from "react";
import{ useDispatch, useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom';
import './SkydiveForm.css';


function SkydiveForm(props) {
   
    const [jumpNumber, setJumpNumber] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [equipment, setEquipment] = useState('');
    const [altitude, setAltitude] = useState('');
    const [freefall, setFreefall] = useState('');
    const [totalFreefall, setTotalFreefall] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`Adding Log Entry`, {altitude, freefall, description});

        dispatch({
            type: 'ADD_LOG',
            payload: {jump_number: jumpNumber, date: date, place: place, aircraft: aircraft,
                    equipment: equipment, altitude: altitude, freefall: freefall, total_freefall: totalFreefall,
                    description: description}
        })

        history.push('/info')
    
    }

    return (
        <div>
            <h2 className ="header">
                Enter Recent Jump 
            </h2>
        
            <form onSubmit={handleSubmit} className='addLog'>
                <div class="container text-center">
                <input 
                className="onetop-row"
                required
                type="number"
                placeholder="Jump Number"
                value={jumpNumber}
                onChange={(event)=> setJumpNumber(event.target.value)}
                />
                <input 
                className="twotop-row"
                required 
                placeholder="Date"
                value={date}
                onChange={(event)=> setDate(event.target.value)}
                />
                <input 
                className="threetop-row"
                required 
                placeholder="Location"
                value={place}
                onChange={(event)=> setPlace(event.target.value)}
                />
                <input 
                className="fourtop-row"
                required 
                placeholder="Aircraft"
                value={aircraft}
                onChange={(event)=> setAircraft(event.target.value)}
                />
                <input 
                className="fivetop-row"
                required 
                placeholder="Equipment"
                value={equipment}
                onChange={(event)=> setEquipment(event.target.value)}
                />
                </div>
                <div class="container text-center">
                <input 
                className="onemid-row"
                required 
                type="number"
                placeholder="Altitude"
                value={altitude}
                onChange={(event)=> setAltitude(event.target.value)}
                />
                <input 
                required 
                className="twomid-row"
                type="number"
                placeholder="Freefall/Seconds"
                value={freefall}
                onChange={(event)=> setFreefall(event.target.value)}
                />
                <input 
                required 
                className="threemid-row"
                type="number"
                placeholder="Total Freefall/Seconds"
                value={totalFreefall}
                onChange={(event)=> setTotalFreefall(event.target.value)}
                />
                </div>
                <div class="container text-center">
                <input 
                className="bot-row"
                required 
                placeholder="Description"
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
                />
                </div>
                <div class="container text-center">
                <button type="submit" class="btn btn-primary">
                    Add Log
                </button>
                </div>
            </form>
        </div>
    )
}

export default SkydiveForm