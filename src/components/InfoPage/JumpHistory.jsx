import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function JumpHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);

    const setJumpHistory = (logbook) => {
        dispatch({
            type: "SET_JUMP_DETAILS",
            payload: logbook
        });
    }

    console.log(logbook);

    useEffect(() => {
        dispatch({type: "GET_LOG"});
    }, []);

    return (
        <section>
            <h1>Logbook History</h1>
        <ul>
            {logbook.map((logbook,index) => 
            <li key={index}>Jump Number:{logbook.jump_number} Location: {logbook.place} Date: {logbook.date} Location: {logbook.place} Equipment: {logbook.equipment} Altitude: {logbook.altitude} Freefall: {logbook.freefall} Total Freefall: {logbook.total_freefall} Description: {logbook.description}
            <button onClick={() => setJumpHistory(logbook)}> View Details 1</button>
            <button onClick={() => history.push(`jump/${logbook.id}`)}> View Details 2</button>
            </li>
            )}
        </ul>
        </section>
            );
}

export default JumpHistory