import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {  API_KEY, imageUrl } from '../../constants/constant'
import YouTube from 'react-youtube'

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    autoplay: 1,
    },
  };
  const {isSmall,title,url}=props
  const [movie,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setMovie(response.data.results)
    });  
  },[])
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('trailor not available..');
      }
    })
  }
  return (
    <div className='row' >
        <h2>{title}</h2>
          <div className='posters'>
        {movie.map((obj)=><img key={obj.id} onClick={()=>handleMovie(obj.id)} className={isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
        </div>
       { urlId &&  <YouTube  opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost