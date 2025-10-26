import MovieCard from "./MovieCard";
import "./MovieRow.css";

function MovieRow({ title, movies, onMovieClick }) {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))
        ) : (
          <p className="no-movies">No movies available</p>
        )}
      </div>
    </div>
  );
}

export default MovieRow;
