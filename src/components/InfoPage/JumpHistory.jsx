import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function JumpHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);
    const userId =useSelector(store => store.user.id);
  

    const setJumpHistory = (logbook) => {
        dispatch({
            type: "SET_JUMP_DETAILS",
            payload: logbook
        });
        
    }

    console.log(logbook);


    return (
        <section>
            <h1>Logbook History</h1>
        <ul>
            {logbook.map((logbook,index) => 
            logbook.user_id === userId && 
            <li key={index}>ID:{logbook.id} Jump Number:{logbook.jump_number} Location: {logbook.place} Date: {logbook.date} Location: {logbook.place} Equipment: {logbook.equipment} Altitude: {logbook.altitude} Freefall: {logbook.freefall} Total Freefall: {logbook.total_freefall} Description: {logbook.description}
            <button onClick={() => history.push(`details/edit/${logbook.id}`)}> Edit</button>
            <button onClick={() => history.push(`details/${logbook.id}`)}> View Details 2</button>
            </li>
            )}
        </ul>
        </section>
            );
}

export default JumpHistory