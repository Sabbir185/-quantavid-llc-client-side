import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Image.css'

const ImageCard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { image, _id } = (props.data)
    
    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8080/api/image/${id}`, {
            headers: {'Authorization': `Bearer ${loggedInUser.token}`}
        })

        if(res.data) {
            alert('Delete Success!')
        }
    }


    return (
        <div className="pb-4 text-center">
            <img src={`http://localhost:8080/${image}`} alt="" className="img-fluid" style={{width: '100px'}}/>

            <button className="btn btn-danger ms-5" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default ImageCard;