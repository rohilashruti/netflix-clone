import React from 'react'
import './MovieCard.css';

 const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({movie, onClick}) => {
 
  return (
    <div className='movie-card' onClick={()=> onClick(movie)}>
      <img src={IMG_BASE + movie.backdrop_path}
      alt = {movie.title}
      className='poster'/>
    <div className='movie-title'>{movie.title}</div>
    </div>
  )
}

export default MovieCard