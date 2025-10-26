import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import tmdb from './api/tmdb'; 
import MovieRow from './Components/MovieRow';
import MovieModal from './Components/MovieModal';

function App() {
  const [popularNames, setPopularNames] = useState([]);
  const [topRated, setTopRated] = useState([]);
const [upcoming, setUpcoming] = useState([]);
const [romantic, setRomantic] = useState([]);
const[selectedMovie, setSelectedMovie] = useState("");
const[query, setQuery] = useState("");
const[searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await tmdb.get("/movie/popular"); 
        const topRated = await tmdb.get("movie/top_rated");
         const upcomingRes = await tmdb.get("/movie/upcoming");
    const romanticRes = await tmdb.get("/discover/movie", {
      params: { with_genres: 10749 } // 10749 = Romance
    });
        setTopRated(topRated.data.results);
        setPopularNames(res.data.results);
            setUpcoming(upcomingRes.data.results);
    setRomantic(romanticRes.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error("❌ Error fetching movies:", error);
      }
    };

    fetchPopular();
  }, []);

  const handleSearch = async(searchText)=>
  {
    setQuery(searchText);
    if(searchText.trim()==="")
    {
      setSearchResults([]);
      return;
    }
    const res = await tmdb.get(`/search/movie`,{params: { query: searchText },
    });
    setSearchResults(res.data.results);
  }

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />
      <div className="content">
        {query? ( <MovieRow title="🔥 Popular on Netflix" movies={searchResults} onMovieClick={(movie)=>setSelectedMovie(movie)} />):        <MovieRow title="🔥 Popular on Netflix" movies={popularNames} onMovieClick={(movie)=>setSelectedMovie(movie)} />}
        <MovieRow title="⭐ Top Rated" movies={topRated} onMovieClick={(movie)=>setSelectedMovie(movie)}/>
        <MovieRow title="🆕 Upcoming" movies={upcoming} onMovieClick={(movie)=>setSelectedMovie(movie)}/>
<MovieRow title="💖 Romantic Comedy" movies={romantic} onMovieClick={(movie)=>setSelectedMovie(movie)}/>
      </div>
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default App;
