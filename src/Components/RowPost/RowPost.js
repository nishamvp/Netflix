import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constant'

function RowPost(props) {
  const {isSmall,title}=props
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
      

    })

  },[])
  return (
    <div className='row' >
        <h2>{title}</h2>
          <div className='posters'>
        {movie.map((obj)=><img className={isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
    </div>
  )
}

export default RowPost