import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import './SkydivePhotos.css'
import ReactPlayer from 'react-player';

function SkydivePhotos(){
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(store => store.content);
    const userId = useSelector(store => store.user.id);

    let params = useParams();
    console.log("params", params)

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

    useEffect(() => {
        dispatch ({
            type: "GET_CONTENT"
        })
    }, [])

    console.log("content", content)

    return(
        <section>
            <h1> Skydive Photos </h1>
                {content.map((content,index) =>
                content.user_id === userId &&
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <img className="image"src={content.image_url} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {content.image_description} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button onClick={() => history.push(`/skydive/photo/edit/${content.id}`)}> Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                )}
               
        </section>
    )
}

export default SkydivePhotos