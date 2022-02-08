import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from '../styles/HeaderStyled';
import { HeaderLinks } from '../styles/NavLinksStyled';
import Home from './Home';
import Movies from './Movies';
import MoviesList from './MoviesList/MoviesList';
import getTrendingMoviesFromAPI from 'helpers/requestsToAPI';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    async function handleAPIResponse() {
      try {
        const response = await getTrendingMoviesFromAPI();
        setMovies(
          response.map(movie => ({
            title: movie.original_title ?? movie.name,
            id: movie.id,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
    handleAPIResponse();
  }, [movies]);

  return (
    <>
      <Header>
        <HeaderLinks to="/">Home</HeaderLinks>
        <HeaderLinks to="movies">Movies</HeaderLinks>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<MoviesList movies={movies} />} />
        </Route>
        <Route path="movies" element={<Movies />} />
      </Routes>
    </>
  );
}
