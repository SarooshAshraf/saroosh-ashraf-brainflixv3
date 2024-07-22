const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true  
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

const VIDEO_DATA_PATH = './data/videos.json';

const readVideoData = () => {
  const data = fs.readFileSync(VIDEO_DATA_PATH);
  return JSON.parse(data);
};

const writeVideoData = (data) => {
  fs.writeFileSync(VIDEO_DATA_PATH, JSON.stringify(data, null, 2));
};

app.get('/videos', (req, res) => {
  const videos = readVideoData();
  const videoSummaries = videos.map(video => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  }));
  res.json(videoSummaries);
});

app.get('/videos/:id', (req, res) => {
  const videos = readVideoData();
  const video = videos.find(v => v.id === req.params.id);
  if (video) {
    res.json(video);
  } else {
    res.status(404).json({ message: 'No video with that id exists' });
  }
});

app.post('/videos', (req, res) => {
  const videos = readVideoData();
  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "New Channel",
    image: `http://localhost:${PORT}/images/thumbnail.jpg`,
    description: req.body.description,
    views: "2310",
    likes: "1023",
    duration: "30:18",
    video: "/stream",
    timestamp: Date.now(),
    comments: [
      {
        "id": uuidv4(),
        "name": "Mr King",
        "comment": "While the cinematography is stunning, I'd appreciate more information on the conservation efforts featured in the video. Highlighting the challenges these incredible species face and the initiatives taken to protect them would add depth to the narrative and inspire viewers to contribute to conservation causes.",
        "likes": 3,
        "timestamp": Date.now(),
      }
    ],
  };
  videos.push(newVideo);
  writeVideoData(videos);
  res.status(201).json(newVideo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
