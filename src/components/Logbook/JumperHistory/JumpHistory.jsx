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
                            
                        <li><div>Jump Number: <div class="badge bg-primary text-wrap">{logbook.jump_number}</div></div> 
                        <div>Date: <div class="badge bg-primary text-wrap">{logbook.date}</div></div>
                       <div>Location: <div class="badge bg-primary text-wrap">{logbook.place}</div></div>
                       <div>Aircraft: <div class="badge bg-primary text-wrap">{logbook.aircraft}</div></div>
                        <div>Equipment: <div class="badge bg-primary text-wrap">{logbook.equipment}</div></div>
                        <div>Altitude: <div class="badge bg-primary text-wrap">{logbook.altitude}</div></div>
                        <div>Freefall: <div class="badge bg-primary text-wrap">{logbook.freefall}</div></div>
                        <div> Total Freefall: <div class="badge bg-primary text-wrap">{logbook.total_freefall}</div></div>
                        <div>Description: <div class="badge bg-primary text-wrap">{logbook.description}</div></div></li>        
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