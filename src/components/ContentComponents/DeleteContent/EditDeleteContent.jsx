import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

function EditContent(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);

    let params = useParams();
    console.log("params", params);

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

    const editContents = () => {
        dispatch({
            type: 'EDIT_CONTENT',
            payload: editContent
        })
        history.push('/content/history');
    }

    const deleteContent = () => {
        dispatch({
            type: 'DELETE_CONTENT',
            payload: editContent
        })
        history.push('/content/history');
    }

    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(media !== undefined){ 
        setImageUrl(media.image_url);
        setImageDescription(media.image_description);
        setVideoUrl(media.video_url);
        setVideoDescription(media.video_description);
        console.log('media', media);
    }
    }, [media]);

    return (
        <>
        <h1> Edit Uploads</h1>
        <div>
            <h1>Image </h1>
            <img src={media.image_url} />
           <h1> {media.image_description} </h1>
            <h1>Video</h1>
            <ReactPlayer url={media.video_url} />
            <h1> {media.video_description}</h1>
            <button onClick={() => deleteContent()}> Delete </button>

        </div>
        </>
    )

}

export default EditContent