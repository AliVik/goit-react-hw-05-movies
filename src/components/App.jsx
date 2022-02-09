import { Routes, Route } from 'react-router-dom';

import { Header } from '../styles/HeaderStyled';
import { HeaderLinks } from '../styles/NavLinksStyled';
import HomePage from '../pages/HomePage';
import Movies from './Movies';
import MoviesList from './MoviesList/MoviesList';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Header>
        <HeaderLinks to="/">Home</HeaderLinks>
        <HeaderLinks to="movies">Movies</HeaderLinks>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MoviesList />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" />
          <Route path="reviews" />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}
