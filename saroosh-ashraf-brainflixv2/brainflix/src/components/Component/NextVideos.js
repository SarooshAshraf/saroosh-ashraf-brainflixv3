const NextVideos = ({ remainingVideos, changeVideo }) => {
    return (
        <div className="next-videos">
            <h5>Next Videos</h5>
            {remainingVideos.map((video) => (
                <div key={video.id} className="next-video" onClick={() => changeVideo(video)}>
                    <img src={video.image} alt={video.title} />
                    <div className="next-text">
                        <h5>{video.title}</h5>
                        <p>{video.channel}</p>
                   </div>
                </div>
            ))}
        </div>
    );
};

export default NextVideos;
