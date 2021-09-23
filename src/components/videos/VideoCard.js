import React from 'react';


const VideoCard = (props) => {
    const { video } = (props.data)
    console.log(props.data)


    return (
        <div className="pb-4 text-center d-flex align-items-center justify-content-center">
            <video src={`http://localhost:8080/${video}`} controls className="w-25"></video>

            <button className="btn btn-danger ms-5">Delete</button>
        </div>
    );
};

export default VideoCard;