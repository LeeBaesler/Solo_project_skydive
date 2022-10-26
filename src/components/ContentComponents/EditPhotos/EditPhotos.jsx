import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

function EditPhotos(){
    const dispatch = useDispatch();
    const history = useHistory();
    const photos = useSelector(store => store.photos);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params);

    let photosid = params.photosid;

    let photo = photos.find(photo => photo.id === Number(photosid));

    const [imageUrl, setImageUrl] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const editPhotos = {
        photosid: Number(photosid),
        image_url: imageUrl,
        image_description: imageDescription,
    }

    const editPhoto = () => {
        dispatch({
            type: 'EDIT_PHOTOS',
            payload: editPhotos
        })
        history.push('home');
    }

    const deletePhotos = () => {
        dispatch({
            type: 'DELETE_PHOTOS',
            payload: editPhotos
        })
        history.push('/home');
    }

    useEffect(() => {
        //find the logbook in redux using the parameter id
       if(photo !== undefined){ 
        setImageUrl(photo.image_url);
        setImageDescription(photo.image_description);
    }
    }, [photo]);

    return(
        <section>
            <h1>Delete Photos</h1>
            <div>
                <img src={photo.image_url} />
            <button onClick={() => deletePhotos()}> Delete </button>
            </div>
            </section>
        )
    

}

export default EditPhotos