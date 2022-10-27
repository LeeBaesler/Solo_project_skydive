import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import OpenWeather from '../OpenWeather/OpenWeather';

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
            <h1>Logbook History</h1>
            {logbook.map((logbook,index) => 
            logbook.user_id === userId && 
            <table>
                <tbody>
                    <tr>
                        <td>
                         Jump Number: {logbook.jump_number} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Date: {logbook.date} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Location: {logbook.place} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Aircraft: {logbook.aircraft}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Equipment: {logbook.equipment} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Altitude: {logbook.altitude} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Freefall: {logbook.freefall} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Total Freefall: {logbook.total_freefall}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Description: {logbook.description}
                        </td>
                    </tr>
                </tbody>
            <button onClick={() => history.push(`details/edit/${logbook.id}`)}> Edit</button>
            <button onClick={() => history.push(`details/${logbook.id}`)}> View Details 2</button>
            </table>
            )}
            </section>
    </>
            );
}

export default JumpHistory