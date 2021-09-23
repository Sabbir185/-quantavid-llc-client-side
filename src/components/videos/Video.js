import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import VideoView from './VideoView';

const Video = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [videoData, setVideoData] = React.useState(null)

    const handleVideo = (e) => {
        e.preventDefault();
        setVideoData(e.target.files[0]);
    }

    const onSubmit = async data => {
        data.preventDefault();
        try {
            const formData = new FormData();
            formData.append('video', videoData);

            const res = await axios.post(`http://localhost:8080/api/video`, formData, {
                headers: {'Authorization': `Bearer ${loggedInUser.token}`} });

            if(res.data) {
                alert('Successful..')
            }
           

        } catch (error) {
            alert('Failed to update! try again..')
        }
        
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                    <label htmlFor="audio" className="fst-italic mt-3">Video*</label>
                    <input type="file" onChange={handleVideo} id="audio" className="form-control"/>

                    <button type="submit" className="btn btn-success mt-4" >Upload Video</button>
            </form>

            <VideoView />
        </div>
    );
};

export default Video;