import React, { useEffect } from 'react'
import './Banner.css'

function Banner() {
  useEffect(() => {
  
    return () => {
    }
  }, [])
  
  return (    
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae, officia quis voluptate amet modi, commodi expedita, repellendus quasi </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner