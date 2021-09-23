import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import AudioView from './AudioView';

const Audio = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [audioData, setAudioData] = React.useState(null)

    const handleAudio = (e) => {
        e.preventDefault();
        setAudioData(e.target.files[0]);
    }

    const onSubmit = async data => {
        data.preventDefault();
        try {
            const formData = new FormData();
            formData.append('audio', audioData);

            const res = await axios.post(`http://localhost:8080/api/audio`, formData, {
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
                    <label htmlFor="audio" className="fst-italic mt-3">Audio*</label>
                    <input type="file" onChange={handleAudio} id="audio" className="form-control"/>

                    <button type="submit" className="btn btn-success mt-4" >Upload Audio</button>
            </form>

            <AudioView/>
        </div>
    );
};

export default Audio;