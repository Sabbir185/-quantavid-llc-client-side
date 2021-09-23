import React, { useEffect, useState } from 'react';
import axios from 'axios'
import VideoCard from './VideoCard';

const VideoView = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        try {
            async function fetchData(){
                const res = await axios.get('http://localhost:8080/api/video');
                setVideo(res.data.data)
            }
            fetchData()
        } catch (error) {
            alert(error.message)
        }
    },[])


    return (
        <div className="mt-5 display-control">
            {
                video?.map(vid => <VideoCard key={vid._id} data={vid} />)
            }
        </div>
    );
};

export default VideoView;