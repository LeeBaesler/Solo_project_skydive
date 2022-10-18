import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SkydiveForm(props) {
    const [jumpNumber, setJumpNumber] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [equipment, setEquipment] = useState('');
    const [altitude, setAltitude] = useState('');
    const [freefall, setFreefall] = useState('');
    const [totalFreeFall, setTotalFreefall] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`Adding Log Entry`, {altitude, freefall, description});

        dispatch({
            type: 'ADD_LOG',
            payload: {jump_number: jumpNumber, date: date, place: place, aircraft: aircraft,
                    equipment: equipment, altitude: altitude, freefall: freefall, total_freefall: totalFreeFall,
                    description: description}
        })
    }

    return (
        <section>
            <h2>
                Skydive Logbook
            </h2>
            <form onSubmit={handleSubmit} className='addLog'>
                <input 
                required 
                placeholder="Jump Number"
                value={jumpNumber}
                onchange={(event)=> setJumpNumber(event.target.value)}
                />
                <input 
                required 
                placeholder="Date"
                value={date}
                onchange={(event)=> setDate(event.target.value)}
                />
                <input 
                required 
                placeholder="Location"
                value={place}
                onchange={(event)=> setPlace(event.target.value)}
                />
                <input 
                required 
                placeholder="Aircraft"
                value={aircraft}
                onchange={(event)=> setAircraft(event.target.value)}
                />
                <input 
                required 
                placeholder="Equipment"
                value={equipment}
                onchange={(event)=> setEquipment(event.target.value)}
                />
                <input 
                required 
                placeholder="Altitude"
                value={altitude}
                onchange={(event)=> setAltitude(event.target.value)}
                />
                <input 
                required 
                placeholder="Freefall"
                value={freefall}
                onchange={(event)=> setFreefall(event.target.value)}
                />
                <input 
                required 
                placeholder="Total Freefall"
                value={totalFreefall}
                onchange={(event)=> setTotalFreefall(event.target.value)}
                />
                <input 
                required 
                placeholder="Description"
                value={description}
                onchange={(event)=> setDescription(event.target.value)}
                />
            </form>
        </section>
    )
}

export default SkydiveForm``