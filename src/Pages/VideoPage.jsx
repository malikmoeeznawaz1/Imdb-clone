import React from 'react'
import { useLocation } from 'react-router-dom';

const VideoPage = () => {
    const location = useLocation();
    const { videoData } = location.state || {};

  return (
    <div className='text-white'>
      <h1>{videoData?.title}</h1>
      <p>{videoData?.description}</p>
      <video controls>
        <source src={videoData?.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPage