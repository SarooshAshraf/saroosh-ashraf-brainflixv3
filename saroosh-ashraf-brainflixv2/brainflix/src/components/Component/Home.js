import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NextVideos from './NextVideos';
import VideoDesc from './Video-Desc';
import VideoPlayerCom from './VideoPlayerCom';

const Home = ({ apiUrl }) => {
    const { videoId } = useParams();
    const navigate = useNavigate();

    const [currentVideo, setCurrentVideo] = useState(null);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/videos`)
            .then(response => {
                setVideoList(response.data);
                if (!videoId && response.data.length > 0) {
                    navigate(`/video/${response.data[0].id}`);
                }
            })
            .catch(error => console.error('Error fetching video list:', error));
    }, [apiUrl, videoId, navigate]);

    useEffect(() => {
        if (videoId) {
            axios.get(`${apiUrl}/videos/${videoId}`)
                .then(response => setCurrentVideo(response.data))
                .catch(error => console.error('Error fetching video details:', error));
        }
    }, [apiUrl, videoId]);

    const handleLogoClick = () => {
        navigate('/');
    };

    const changeVideo = (video) => {
        navigate(`/video/${video.id}`);
    };

    const remainingVideos = videoList.filter(video => video.id !== videoId);

    return (
        <>
            <Header onLogoClick={handleLogoClick} />
            {currentVideo && <VideoPlayerCom video={currentVideo} />}

            <div className="mainSection">
                {currentVideo && <VideoDesc video={currentVideo} />}
                <NextVideos remainingVideos={remainingVideos} changeVideo={changeVideo} />
            </div>
        </>
    );
}

export default Home;
