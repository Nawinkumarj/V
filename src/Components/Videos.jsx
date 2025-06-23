import React from 'react'
import { assets } from '../assets/assets'

const Videos = () => {
  return (
    <div className='video-container'>
      <video src={assets.video} autoPlay loop muted></video>
    </div>
  )
}
export default Videos
