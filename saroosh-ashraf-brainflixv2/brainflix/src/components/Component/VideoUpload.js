import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import publish from '../../assets/Icons/publish.svg';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import Header from '../Header';

const API_URL = 'http://localhost:5000';

function VideoUpload() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
      setTitleError('');
    } else if (name === 'description') {
      setDescription(value);
      setDescriptionError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError('');
    setDescriptionError('');

    if (!title.trim()) {
      setTitleError('Please enter a title.');
    }
    if (!description.trim()) {
      setDescriptionError('Please enter a description.');
    }

    if (title.trim() && description.trim()) {
      axios.post(`${API_URL}/videos`, { title, description })
        .then(response => {
          console.log('Video uploaded:', response.data);
          alert("Video Uploaded Successfully");
          setTitle('');
          setDescription('');
          navigate('/');
        })
        .catch(error => {
          console.error('Error uploading video:', error);
          alert("There was an error uploading the video");
        });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <hr style={{ border: '1px solid #E1E1E1' }} />
      <div className="mainSection" style={{ flexDirection: 'column' }}>
        <h1>Upload Video</h1>



        <form id="formsubmit" className='upload-main' onSubmit={handleSubmit}>
          <div className='search-div'>
            <h5> Video thumbnail</h5>
            <img src={thumbnail} alt="thumbnail" />
          </div>
          <div className='upload-data'>
            <div className='search-div'>
              <h5> title your video</h5>
              <div className='search-bar'>
                <textarea
                  rows="1"
                  placeholder='Add a title to your video'
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              {titleError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{titleError}</p>}
            </div>
            <div className='search-div'>
              <h5> add a video description</h5>
              <div className='search-bar'>
                <textarea
                  rows="4"
                  placeholder='Add a description to your video'
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
              </div>
              {descriptionError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{descriptionError}</p>}
            </div>
          </div>
        </form>
        <div className='upload-buttons'>
          <div className='cancel-btn' onClick={handleCancel}>
            <h5>Cancel</h5>
          </div>
          <div className='upload-btn' onClick={handleSubmit}>
            <img src={publish} alt="publish" />
            <h5>Publish</h5>
            <p>A</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoUpload;
