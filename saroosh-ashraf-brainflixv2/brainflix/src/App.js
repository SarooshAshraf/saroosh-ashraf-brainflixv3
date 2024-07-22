import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Component/Home';
import VideoUpload from './components/Component/VideoUpload';

const API_URL = 'http://localhost:5000'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home apiUrl={API_URL} />} />
        <Route path="/upload" element={<VideoUpload apiUrl={API_URL} />} />
        <Route path="/video/:videoId" element={<Home apiUrl={API_URL} />} />
      </Routes>
    </Router>
  );
}

export default App;
