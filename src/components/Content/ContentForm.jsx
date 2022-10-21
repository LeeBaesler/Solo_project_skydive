import { useEffect } from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ContentForm(props) {
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()
        console.log(`Adding content entry`, {imageDescription, videoDescription});

        dispatch ({
            type: 'ADD_CONTENT',
            payload: {image_url: image, image_description: imageDescription, 
                    video_url: video, video_description: videoDescription}
        })
    }

    return(
        <div>
            <h2>
                Skydive Content
            </h2>
            <form onSubmit={handleSubmit} className="addcontent">
                <input
                required
                type="text"
                placeholder='image link'
                value={image}
                onChange={(event) => setImage(event.target.value)}
                />

                <input 
                required
                placeholder='image description'
                value={imageDescription}
                onChange={(event) => setImageDescription(event.target.value)}
                />

                <input 
                required
                placeholder='video link'
                value={video}
                onChange={(event) => setVideo(event.target.value)}
                />

                <input
                required
                placeholder='video description'
                value={videoDescription}
                onChange={(event) => setVideoDescription(event.target.value)}
                />
                <button type="submit">
                    Add Content
                </button>
            </form>
        </div>
    )
}

export default ContentForm