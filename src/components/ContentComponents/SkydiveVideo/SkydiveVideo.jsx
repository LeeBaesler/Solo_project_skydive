import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

function SkydiveVideo(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    useEffect(() => {
        dispatch ({
            type: "GET_CONTENT"
        })
    }, [])
    console.log('content', content)

return (
    <section>
        <h1> Skydive Video </h1>
       {content.map((content,index) =>
       content.user_id === userId &&
       <table>
            <tbody>
                <tr>
                    <td>
                    <ReactPlayer className="video" width='300px' height='150px' controls url={content.video_url} /> 
                    </td>
                </tr>
                <tr>
                    <td>
                        {content.video_description}
                    </td>
                </tr>
                <tr>
                    <td>
                    <button onClick={() => history.push(`/skydive/edit/${content.id}`)}> Edit</button>
                    </td>
                </tr>
            </tbody>
       </table>
       
       )}
        
    </section>
)

}

export default SkydiveVideo