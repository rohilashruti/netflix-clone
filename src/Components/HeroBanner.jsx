import './HeroBanner.css';

import React from 'react'

const HeroBanner = ({movie}) => {
 if(!movie)
 {
    return null;
 }
  return (
    <div className='hero-banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
     <div className='hero-content'>
        <h1> {movie.title || movie.name}</h1>
        <p>{movie.overview?.slice(0, 150)}...</p>
        <div className='hero-buttons'>
            <button className='play-btn'>▶ Play</button>
            <button className='info-btn'>ℹ More Info</button>
        </div>
     </div>
     <div className='overlay'></div>
    </div>
  )
}

export default HeroBanner