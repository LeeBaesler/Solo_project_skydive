import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

function SkydiveVideos(){
    const dispatch = useDispatch();
    const history = useHistory();
    const videos = useSelector(store => store.videos);
    const userId = useSelector(store => store.user.id);
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDescription, setVideoDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault()
        dispatch ({
            type: "ADD_VIDEOS",
            payload: {video_url: videoUrl, video_description: videoDescription}
        })
        history.push('/home')
    }
    
    useEffect(() => {
        dispatch ({
            type: "GET_VIDEOS"
        })
    }, [])
    console.log('videos', videos)

return (
    <section>
        <h1> Skydive Video </h1>
        <form onSubmit={handleSubmit} className='addVideos'>
            <input 
            type='text'
            placeholder='video link'
            value={videoUrl}
            onChange={(event) => setVideoUrl(event.target.value)}
                />
            <input 
            type="text"
            placeholder='video description'
            value={videoDescription}
            onChange={(event) => setVideoDescription(event.target.value)}
            />
            <button type='submit'>
                Add Video
            </button>
        </form>
       {videos.map((videos,index) =>
       videos.user_id === userId &&
       <table>
            <tbody>
                <tr>
                    <div class="card">
                    <ReactPlayer className="video" width='600px' height='600px' controls url={videos.video_url} /> 
                       <div class = "card-body">
                       <p class="card-text"> {videos.video_description} </p>
                    <button type="button" class="btn btn-dark" onClick={() => history.push(`/skydive/video/edit/${videos.id}`)}> Edit</button>
                </div>
                </div>
                </tr>
            </tbody>
       </table>
       
       )}
        
    </section>
)

}

export default SkydiveVideos