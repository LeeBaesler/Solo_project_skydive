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

    const handleSubmit = event => {
        event.preventDefault()
        dispatch ({
            type: "ADD_VIDEOS",
            payload: {video_url: videoUrl}
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
            <button type='submit'>
                Add Video
            </button>
        </form>
       {videos.map((videos,index) =>
       videos.user_id === userId &&
       <table>
            <tbody>
                <tr>
                    <td>
                    <ReactPlayer className="video" width='300px' height='150px' controls url={videos.video_url} /> 
                    </td>
                </tr>
                <tr>
                    <td>
                        {videos.video_description}
                    </td>
                </tr>
                <tr>
                    <td>
                    <button onClick={() => history.push(`/skydive/video/edit/${videos.id}`)}> Edit</button>
                    </td>
                </tr>
            </tbody>
       </table>
       
       )}
        
    </section>
)

}

export default SkydiveVideos