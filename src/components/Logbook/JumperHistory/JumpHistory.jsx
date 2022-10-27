import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import OpenWeather from '../OpenWeather/OpenWeather';
import './JumpHistory.css';

function JumpHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);
    const userId =useSelector(store => store.user.id);

    useEffect (() => {
        dispatch({
            type: 'GET_LOG',
        })
    }, []);

    return (
        <>
        <section>
            <OpenWeather />
            <div class="border border-dark">
            <div class="container text-center">
            <h1 class="container text-center">Logbook History</h1>
            {logbook.map((logbook,index) => 
            logbook.user_id === userId && 
                        <ul class="container text-center">
                            
                        <li><div>Jump Number: {logbook.jump_number}</div> 
                        <div>Date: {logbook.date}</div>
                       <div>Location: {logbook.place}</div>
                       <div>Aircraft: {logbook.aircraft}</div>
                        <div>Equipment: {logbook.equipment}</div>
                        <div>Altitude: {logbook.altitude}</div>
                        <div>Freefall: {logbook.freefall}</div>
                        <div> Total Freefall: {logbook.total_freefall}</div>
                        <div>Description: {logbook.description}</div></li>        
            <button onClick={() => history.push(`details/edit/${logbook.id}`)}> Edit</button>
            <button onClick={() => history.push(`details/${logbook.id}`)}> View Details 2</button>
            </ul>
            
            )}
            </div>
            </div>
            </section>
    </>
            );
}

export default JumpHistory