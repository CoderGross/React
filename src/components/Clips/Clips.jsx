import React from 'react';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clips.css';

const Clips = () => {
  const videos = [
    {
      id: 1,
      title: 'Evemple Highlights',
      src: 'https://www.youtube.com/embed/iRWofl5HuB4',
    },
    {
      id: 2,
      title: 'Video 2',
      src: '',
    },
    {
      id: 3,
      title: 'Video 3',
      src: '',
    },
  ];

  return (
    <div>
      <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={video.id}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={videos.src}
                  title={video.title}
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>{video.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Clips;
