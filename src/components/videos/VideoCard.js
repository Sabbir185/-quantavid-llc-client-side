import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';


const VideoCard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { video, _id } = (props.data)
   
    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8080/api/video/${id}`, {
            headers: {'Authorization': `Bearer ${loggedInUser.token}`}
        })

        if(res.data) {
            alert('Delete Success!')
        }
    }

    return (
        <div className="pb-4 text-center d-flex align-items-center justify-content-center">
            <video src={`http://localhost:8080/${video}`} controls className="w-25"></video>

            <button className="btn btn-danger ms-5" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default VideoCard;