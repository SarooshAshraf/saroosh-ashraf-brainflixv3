import { Link } from 'react-router-dom';
import searchIcon from '../assets/Icons/search.svg';
import upload from '../assets/Icons/upload.svg';
import avatar from '../assets/Images/Mohan-muruge.jpg';
import logo from '../assets/Logo/BrainFlix-logo.svg';

const Header = ({ onLogoClick }) => {
  return (
      <div className='header'>
          <div className='logo'>
              <Link to="/" onClick={onLogoClick}>
                  <img src={logo} alt='logo' />
              </Link>
          </div>

          <div className='left-sec-header'>
              <div className='search-bar'>
                  <img src={searchIcon} alt="search" />
                  <input type='text' placeholder='Search' />
              </div>

              <Link to="/upload" style={{ textDecoration: 'none' }}>
                  <div className='upload-btn'>
                      <img src={upload} alt="upload" />
                      <h5>Upload</h5>
                      <p>A</p>
                  </div>
              </Link>

              <img className='avatar' src={avatar} alt="avatar" />
          </div>
      </div>
  )
}

export default Header;
