import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';


const AudioCard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { audio, _id } = (props.data)
    
    const handleDelete = async (id) => {
        const res = await axios.delete(`https://guarded-waters-35638.herokuapp.com/api/audio/${id}`, {
            headers: {'Authorization': `Bearer ${loggedInUser.token}`}
        })

        if(res.data) {
            alert('Delete Success!')
        }
    }


    return (
        <div className="pb-4 text-center d-flex align-items-center justify-content-center">
            <audio src={`https://guarded-waters-35638.herokuapp.com/${audio}`} controls></audio>

            <button className="btn btn-danger ms-5" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default AudioCard;