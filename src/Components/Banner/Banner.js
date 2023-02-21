import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      let moviesDetails= response.data.results
      let randomMovie=Math.floor(Math.random()*moviesDetails.length)
      setMovie(moviesDetails[randomMovie])
    })
    
  }, [])
  
  return (    
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:'null'}</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:'null'}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner