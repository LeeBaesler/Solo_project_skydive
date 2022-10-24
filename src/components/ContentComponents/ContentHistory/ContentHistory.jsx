import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import './ContentHistory.css'
import ReactPlayer from 'react-player';

function ContentHistory(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params)

    let contentid = params.contentid;

    let media = content.find(media => media.id === Number(contentid));

    const [imageUrl, setImageUrl] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [ videoUrl, setVideoUrl] = useState ('');
    const [ videoDescription, setVideoDescription] = useState('');

    const editContent = {
        contentid: Number(contentid),
        image_url: imageUrl,
        image_description: imageDescription,
        video_url: videoUrl,
        video_description: videoDescription,
    }

    const deleteContent = () => {
        dispatch({
            type: 'DELETE_CONTENT',
            payload: editContent
        })
    }


    useEffect(() => {
        dispatch ({
            type: "GET_CONTENT"
        })
    }, [])

    console.log("content", content)

    return(
        <section>
            <h1> Skydive Content </h1>
        
            <ul>
                {content.map((content,index) =>
                content.user_id === userId &&
                <li> <img className="image"src={content.image_url}/> 
                   <div className="imageDescription"> Description: {content.image_description} </div>
                   <ReactPlayer className="video" width='300px' height='150px' controls url={content.video_url} /> 
                   <div className="videoDescription"> Video Description: {content.video_description} </div>
                    <button onClick={() => history.push(`/content/edit/${content.id}`)}> Edit</button>
                    </li>
                )}
               
               
            </ul>
        </section>
    )
}

export default ContentHistory