import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactPlayer from 'react-player';
import { useHistory, useParams } from 'react-router-dom';

function EditVideo(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params);

    let contentid = params.contentid;

    let media = content.find(media => media.id === Number(contentid));


    const [ videoUrl, setVideoUrl] = useState ('');
    const [ videoDescription, setVideoDescription] = useState('');
    
    const editVideo = {
        contentid: Number(contentid),
        video_url: videoUrl,
        video_description: videoDescription,
    }

    const deleteContent = () => {
        dispatch({
            type: 'DELETE_CONTENT',
            payload: editVideo
        })
        history.push('/content/form');
    }

    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(media !== undefined){ 
        setVideoUrl(media.video_url);
        setVideoDescription(media.video_description);
        console.log('media', media);
    }
    }, [media]);

    return(
    <section>
        <h1>Delete Video</h1>
        <div>
        <ReactPlayer url={media.video_url} />
        <h1> {media.video_description}</h1>
        <button onClick={() => deleteContent()}> Delete </button>
        </div>
        </section>
    )

}

export default EditVideo;

