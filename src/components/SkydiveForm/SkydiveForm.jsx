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
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`Adding Log Entry`, {altitude, freefall, description});

        dispatch({
            type: 'ADD_LOG',
            payload: {jump_number: jumpNumber, date: date, place: place, aircraft: aircraft,
                    equipment: equipment, altitude: altitude, freefall: freefall, total_freefall: totalFreeFall,
                    description: description, image: image, video: video}
        })
    }
}