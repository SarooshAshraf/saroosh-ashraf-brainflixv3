const VideoPlayerCom = ({ video }) => {
    return (
        <div className='video-bg'>
            <video poster={video.image} controls>
                <source src={video.video} />
            </video>
        </div>
    )
}

export default VideoPlayerCom;
