import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import OpenWeather from '../OpenWeather/OpenWeather';
import './JumpHistory.css';

function JumpHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);
    const userId = useSelector(store => store.user.id);

    useEffect(() => {
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
                        <h1 class="container text-center" className="lb">Logbook History</h1>
                        {logbook.map((logbook, index) =>
                            logbook.user_id === userId &&
                            <ul class="container text-center">
                                <p>
                                    <div>
                                        <div class="row"><div class="row-sm-3"><div class="card">Jump Number: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.jump_number}</p></div></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Date: <div class="badge bg-primary text-wrap"><p class="fs-6">{new Date(logbook.date).toDateString()}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Location: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.place}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Aircraft: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.aircraft}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Equipment: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.equipment}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Altitude: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.altitude}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Freefall: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.freefall}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Total Freefall: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.total_freefall}</p></div></div></div></div></p>
                                <p>
                                    <div>
                                        <div class="row" class="row-sm-3"><div class="card">Description: <div class="badge bg-primary text-wrap"><p class="fs-3">{logbook.description}</p></div></div></div></div></p>

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