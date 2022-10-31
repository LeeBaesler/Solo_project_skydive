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
        <div class="container text-center">
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
            <button class="btn btn-primary"  type='submit'>
                Add Video
            </button>
        </form>
        </div>
        <div class="container text-center">
       {videos.map((videos,index) =>
       videos.user_id === userId &&
       <table>
            <tbody>
                <tr>
                <span class="border border-primary">
                    <div class="card">
                    <ReactPlayer className="video" width='600px' height='600px' controls url={videos.video_url}/> 
                       <div class = "card-body">
                       <p class="card-text"> {videos.video_description} </p>
                    <button class="btn btn-primary" type="button" onClick={() => history.push(`/skydive/video/edit/${videos.id}`)}> Edit</button>
                </div>
                </div>
                </span>
                </tr>
            </tbody>
       </table>
       )}
        </div>
    </section>
)

}

export default SkydiveVideos