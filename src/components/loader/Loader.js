import React from 'react';
import gif from '../../assets/loadergif.mp4'

import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
        <video src={gif} autoPlay loop muted></video>
    </div>
  )
}

export default Loader;