import React from 'react';


const AudioCard = (props) => {
    const { audio } = (props.data)
    console.log(props.data)


    return (
        <div className="pb-4 text-center">
            <audio src={`http://localhost:8080/${audio}`} controls></audio>

            <button className="btn btn-danger ms-5">Delete</button>
        </div>
    );
};

export default AudioCard;