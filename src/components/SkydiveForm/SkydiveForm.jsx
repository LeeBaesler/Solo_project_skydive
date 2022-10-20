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
            <h2>
                Skydive Logbook
            </h2>
            <form onSubmit={handleSubmit} className='addLog'>
                <input 
                required
                type="number"
                placeholder="Jump Number"
                value={jumpNumber}
                onChange={(event)=> setJumpNumber(event.target.value)}
                />
                <input 
                required 
                placeholder="Date"
                value={date}
                onChange={(event)=> setDate(event.target.value)}
                />
                <input 
                required 
                placeholder="Location"
                value={place}
                onChange={(event)=> setPlace(event.target.value)}
                />
                <input 
                required 
                placeholder="Aircraft"
                value={aircraft}
                onChange={(event)=> setAircraft(event.target.value)}
                />
                <input 
                required 
                placeholder="Equipment"
                value={equipment}
                onChange={(event)=> setEquipment(event.target.value)}
                />
                <input 
                required 
                type="number"
                placeholder="Altitude"
                value={altitude}
                onChange={(event)=> setAltitude(event.target.value)}
                />
                <input 
                required 
                type="number"
                placeholder="Freefall"
                value={freefall}
                onChange={(event)=> setFreefall(event.target.value)}
                />
                <input 
                required 
                type="number"
                placeholder="Total Freefall"
                value={totalFreefall}
                onChange={(event)=> setTotalFreefall(event.target.value)}
                />
                <input 
                required 
                placeholder="Description"
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
                />
                <button type="submit">
                    Add Log
                </button>
            </form>
        </div>
    )
}

export default SkydiveForm