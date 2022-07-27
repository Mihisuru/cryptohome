import React from 'react';
import './content.css';
import video1 from "./video-2.mkv";
import "./btn.css";
import {Link} from "react-router-dom";

function hpcontent() {
    
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>BlueChip Trading Platform</h1>
      <p>select the Platform here</p>
      <div className='hero-btns'>
      
      <Link to="/Swapex">
      <button className='btns'>
          swapex
      </button>
      </Link>
      <Link to="/test">
      <button className='btns'>
          swapex
      </button>
      </Link>
      <button className='btns'>
      swapex
    </button>
    <button className='btns'>
    swapex
    </button>
      
      </div>
    </div>
  );
}

export default hpcontent;