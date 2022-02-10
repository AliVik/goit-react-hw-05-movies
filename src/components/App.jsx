import { Routes, Route } from 'react-router-dom';
import Cast from '../pages/CastPage';
import { Header } from '../styles/HeaderStyled';
import { HeaderLinks } from '../styles/NavLinksStyled';
import HomePage from '../pages/HomePage';
import Movies from '../pages/MoviesPage';
import MoviesListPage from '../pages/TrendingMoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import ReviewsPage from '../pages/ReviewsPage';

export default function App() {
  return (
    <>
      <Header>
        <HeaderLinks to="/">Home</HeaderLinks>
        <HeaderLinks to="movies">Movies</HeaderLinks>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MoviesListPage />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}
