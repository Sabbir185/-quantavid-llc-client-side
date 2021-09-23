import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';


const AudioCard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { audio, _id } = (props.data)
    
    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8080/api/audio/${id}`, {
            headers: {'Authorization': `Bearer ${loggedInUser.token}`}
        })

        if(res.data) {
            alert('Delete Success!')
        }
    }


    return (
        <div className="pb-4 text-center d-flex align-items-center justify-content-center">
            <audio src={`http://localhost:8080/${audio}`} controls></audio>

            <button className="btn btn-danger ms-5" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default AudioCard;