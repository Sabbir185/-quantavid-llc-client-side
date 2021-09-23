import React from 'react';
import './Image.css'

const ImageCard = (props) => {
    const { image } = (props.data)
    console.log(props.data)


    return (
        <div className="pb-4 text-center">
            <img src={`http://localhost:8080/${image}`} alt="" className="img-fluid" style={{width: '100px'}}/>

            <button className="btn btn-danger ms-5">Delete</button>
        </div>
    );
};

export default ImageCard;