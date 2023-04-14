import React from 'react';

const MovieTrailer = ({ videoUrl }) => {
  return (
    <div>
      <video width="640" height="360" controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает HTML5 видео.
      </video>
    </div>
  );
};

export default MovieTrailer;
