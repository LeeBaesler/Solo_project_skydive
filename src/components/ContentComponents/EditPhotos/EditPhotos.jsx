import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

function EditPhotos(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params);

    let contentid = params.contentid;

    let media = content.find(media => media.id === Number(contentid));

    const [imageUrl, setImageUrl] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const editContent = {
        contentid: Number(contentid),
        image_url: imageUrl,
        image_description: imageDescription,
    }

    const deleteContent = () => {
        dispatch({
            type: 'DELETE_CONTENT',
            payload: editContent
        })
        history.push('/content/form');
    }

    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(media !== undefined){ 
        setImageUrl(media.image_url);
        setImageDescription(media.image_description);
    }
    }, [media]);

    return(
        <section>
            <h1>Delete Photos</h1>
            <div>
                <img src={media.image_url} />
            <button onClick={() => deleteContent()}> Delete </button>
            </div>
            </section>
        )
    

}

export default EditPhotos