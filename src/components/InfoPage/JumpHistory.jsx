import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function JumpHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const logbook = useSelector(store => store.logbook);

    const setJumpHistory = (logbook) => {
        dispatch({
            type: "FETCH_LOG",
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
        <div>
            {logbook.map((logbook,index => <p>{logbook[i]}</p>)}
        </div>
        </section>
    )
}

export default JumpHistory