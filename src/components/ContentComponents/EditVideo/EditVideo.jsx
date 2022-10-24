import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ReactPlayer from 'react-player';
import { useHistory, useParams } from 'react-router-dom';

function EditVideo(){
    const dispatch = useDispatch();
    const history = useHistory();
    const videos = useSelector(store => store.videos);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params);

    let videosid = params.videosid;

    let video = videos.find(video => video.id === Number(videosid));


    const [ videoUrl, setVideoUrl] = useState ('');
    const [ videoDescription, setVideoDescription] = useState('');
    
    const editVideos = {
        videosid: Number(videosid),
        video_url: videoUrl,
        video_description: videoDescription,
    }

    const deleteVideos = () => {
        dispatch({
            type: 'DELETE_VIDEOS',
            payload: editVideos
        })
        history.push('/content/form');
    }

    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(video !== undefined){ 
        setVideoUrl(video.video_url);
        setVideoDescription(video.video_description);
        console.log('video', video);
    }
    }, [video]);

    return(
    <section>
        <h1>Delete Video</h1>
        <div>
        <ReactPlayer url={video.video_url} />
        <h1> {video.video_description}</h1>
        <button onClick={() => deleteVideos()}> Delete </button>
        </div>
        </section>
    )

}

export default EditVideo;

