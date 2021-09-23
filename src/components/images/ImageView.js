import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ImageCard from './ImageCard';

const ImageView = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        try {
            async function fetchData(){
                const res = await axios.get('https://guarded-waters-35638.herokuapp.com/api/image');
                setImage(res.data.data)
            }
            fetchData()
        } catch (error) {
            alert(error.message)
        }
    },[])


    return (
        <div className="mt-5 display-control">
            {
                image?.map(img => <ImageCard key={img._id} data={img} />)
            }
        </div>
    );
};

export default ImageView;