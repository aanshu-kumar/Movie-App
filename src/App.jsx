
import { useState } from 'react'
import './App.css'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'

function App() {
const [movieList, setMovieList] = useState([]);

  return (<div className='container-section'>
    <h1>Top 15 Movies of All Time</h1>
    <GenreFilter setMovieList={setMovieList}/>
    <MovieList movieList={movieList}/>
  </div>)
}

export default App
