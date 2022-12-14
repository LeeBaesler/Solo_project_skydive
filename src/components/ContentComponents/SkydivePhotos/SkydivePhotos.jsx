import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import './SkydivePhotos.css';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkydivePhotos(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const photos = useSelector(store => store.photos);
    const userId = useSelector(store => store.user.id);


    const handleSubmit = event => {
        event.preventDefault()

        dispatch({
            type: 'ADD_PHOTOS',
            payload: { image_url: imageUrl, image_description: imageDescription }
        })

        history.push('/home')
    }

    let params = useParams();
    console.log("params", params)

    let photosid = params.photosid;

    let images = photos.find(images => images.id === Number(photosid));

    const editPhotos = {
        photosid: Number(photosid),
        image_url: imageUrl,
        image_description: imageDescription,
    }

    useEffect(() => {
        dispatch({
            type: "GET_PHOTOS"
        })
    }, [])

    console.log("photos", photos)

    return (
        <section>
            <div class="container text-center">
                <h1 className="sp"> Skydive Photos </h1>
                <form onSubmit={handleSubmit} className="addPhotos">
                    <input
                        type='text'
                        placeholder='image link'
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='image description'
                        value={imageDescription}
                        onChange={() => setImageDescription(event.target.value)}
                    />
                    <button class="btn btn-primary" type='submit'>
                        Add Photo
                    </button>
                </form>
            </div>
            <div class="container text-center">
                {photos.map((photos, index) =>
                    photos.user_id === userId &&
                    <table>
                        <tbody>
                            <tr>
                                <span class="border border-primary">
                                    <div class="card">
                                        <img src={photos.image_url} className="image" class="card-img-top" />
                                        <div class="card-body">
                                            <p class="card-text">{photos.image_description}</p>
                                            <button class="btn btn-primary" onClick={() => history.push(`/skydive/photo/edit/${photos.id}`)}> Edit</button>
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

export default SkydivePhotos