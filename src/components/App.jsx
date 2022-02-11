import { Routes, Route, useLocation } from 'react-router-dom';
import Cast from '../pages/CastPage';
import { Header } from '../styles/HeaderStyled';
import { HeaderLinks } from '../styles/NavLinksStyled';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MoviesListPage from '../pages/TrendingMoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import ReviewsPage from '../pages/ReviewsPage';
import QueryMovieListPage from '../pages/QueryMovieListPage';

export default function App() {
  const location = useLocation();
  console.log(location);
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
        <Route path="/movies" element={<MoviesPage />}>
          <Route path={`${location.search}`} element={<QueryMovieListPage />} />
        </Route>
      </Routes>
    </>
  );
}
