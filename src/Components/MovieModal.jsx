import React from 'react'
import './MovieModal.css';


const MovieModal = ({movie, onClose}) => {
    if(!movie)
    {
        return;
    }
  return (
    <div className='modal-overlay' onClick={onClose}>
        <div className='modal-content' onClick= {(e) => e.stopPropagation()}>
            <img
            src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="modal-poster"
            title={movie.title}/>
            <div className='modal-info'>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>

    </div>
  )
}

export default MovieModal