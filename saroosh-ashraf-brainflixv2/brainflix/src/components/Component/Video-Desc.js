import comment from '../../assets/Icons/add_comment.svg'
import likes from '../../assets/Icons/likes.svg'
import views from '../../assets/Icons/views.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import bg from '../../assets/Images/bg.png'

const VideoDesc = ({ video }) => {
    return (
        <div key={video.id} className='main-videos-desc'>
            <div className="video-details">
                <div className="video-text">
                    <h1>{video.title}</h1>
                </div>

                <div className="text-lower">
                    <div className="author-text">
                        <h5>{video.channel}</h5>
                        <span>{new Date(video.timestamp).toLocaleDateString()}</span>
                    </div>

                    <div className="rating-text">
                        <div>
                            <img src={views} />
                            <span>{video.views}</span>
                        </div>

                        <div>
                            <img src={likes} />
                            <span>{video.likes}</span>
                        </div>
                    </div>
                </div>
            </div>

            <p>{video.description}</p>

            <h5>{video.comments.length} Comments</h5>

            <div className='comments'>
                <img className='avatar comment-avatar' src={avatar} />
                <div className='search-div'>
                    <h5>JOIN THE CONVERSATION</h5>
                    <div className='search-bar'>
                        <textarea rows="1" placeholder='Add a new comment' />
                    </div>
                </div>
                <div className='upload-btn comment-btn'>
                    <img src={comment} />
                    <h5>Comment</h5>
                    <p>A</p>
                </div>
            </div>

            {video.comments.map((comment) => (
                <div className='comment' key={comment.id}>
                    <img className='avatar comment-image' src={bg} />
                    <div>
                        <div className='comment-h'>
                            <h5>{comment.name}</h5>
                            <span>{new Date(comment.timestamp).toLocaleDateString()}</span>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoDesc;
