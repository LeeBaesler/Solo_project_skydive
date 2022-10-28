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
                            <p>
                        <div>Jump Number: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.jump_number}</p></div></div></p>
                        <p><div>Date: <div class="badge bg-primary text-wrap"><p class="fs-6">{new Date(logbook.date).toDateString()}</p></div></div></p>
                       <p><div>Location: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.place}</p></div></div></p>
                       <p><div>Aircraft: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.aircraft}</p></div></div></p>
                       <p><div>Equipment: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.equipment}</p></div></div></p>
                       <p><div>Altitude: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.altitude}</p></div></div></p>
                       <p><div>Freefall: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.freefall}</p></div></div></p>
                       <p><div> Total Freefall: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.total_freefall}</p></div></div></p>
                        <p><div>Description: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.description}</p></div></div></p>       
            
            <p><button class="btn btn-info" onClick={() => history.push(`details/edit/${logbook.id}`)}> <span class="badge badge-light">Edit</span></button></p>
            
            <p><button class="btn btn-info" onClick={() => history.push(`details/${logbook.id}`)}><span class="badge badge-light">Details</span></button></p>
            
            </ul>
            
            )}
            </div>
            </div>
            </section>
    </>
            );
}

export default JumpHistory