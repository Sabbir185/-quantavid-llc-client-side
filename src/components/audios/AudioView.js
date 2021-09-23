import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AudioCard from './AudioCard';

const AudioView = () => {
    const [audio, setAudio] = useState([])

    useEffect(() => {
        try {
            async function fetchData(){
                const res = await axios.get('http://localhost:8080/api/audio');
                setAudio(res.data.data)
            }
            fetchData()
        } catch (error) {
            alert(error.message)
        }
    },[])


    return (
        <div className="mt-5 display-control">
            {
                audio?.map(aud => <AudioCard key={aud._id} data={aud} />)
            }
        </div>
    );
};

export default AudioView;