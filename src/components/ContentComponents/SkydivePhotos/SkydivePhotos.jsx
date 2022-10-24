import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import './SkydivePhotos.css'
import ReactPlayer from 'react-player';

function SkydivePhotos(props){
    const [image, setImage] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const photos = useSelector(store => store.photos);
    const userId = useSelector(store => store.user.id);

    const handleSubmit = event => {
        event.preventDefault()

        dispatch({
            type: 'ADD_PHOTOS',
            payload: { image_url: image, image_description: imageDescription}
        })

        history.push('/info')
    }
    
    let params = useParams();
    console.log("params", params)

    let photosid = params.photosid;

    let images = photos.find(images => images.id === Number(photosid));

    const [imageUrl, setImageUrl] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const editPhotos = {
        photosid: Number(photosid),
        image_url: imageUrl,
        image_description: imageDescription,
    }

    useEffect(() => {
        dispatch ({
            type: "GET_PHOTOS"
        })
    }, [])

    console.log("photos", photos)

    return(
        <section>
            <h1> Skydive Photos </h1>
                {photos.map((photos,index) =>
                photos.user_id === userId &&
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <img className="image"src={photos.image_url} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {photos.image_description} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button onClick={() => history.push(`/skydive/photo/edit/${photos.id}`)}> Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                )}
               
        </section>
    )
}

export default SkydivePhotos