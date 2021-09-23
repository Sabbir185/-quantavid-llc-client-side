import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import ImageView from './ImageView';

const Image = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageData, setImageData] = React.useState(null)

    const handleImage = (e) => {
        e.preventDefault();
        setImageData(e.target.files[0]);
    }

    const onSubmit = async data => {
        data.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', imageData);

            const res = await axios.post(`http://localhost:8080/api/image`, formData, {
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
                    <label htmlFor="image" className="fst-italic mt-3">Image*</label>
                    <input type="file" onChange={handleImage} id="image" className="form-control"/>

                    <button type="submit" className="btn btn-success mt-4" >Upload Image</button>
            </form>

            <ImageView/>
        </div>
    );
};

export default Image;