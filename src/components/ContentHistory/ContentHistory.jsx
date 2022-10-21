import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './ContentHistory.css'

function ContentHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    useEffect(() => {
        dispatch({
            type: "GET_CONTENT",
        })
    }, [])

    console.log("content", content)

    return(
        <section>
            <h1> Skydive Content </h1>
        
            <ul>
                {content.map((content,index) =>
                content.user_id === userId &&
                <li> ID: {content.id} Skydive Image: <img className="image"src={content.image_url}/> Description: {content.image_description} </li>
                
                )}
               
            </ul>
        </section>
    )
}

export default ContentHistory