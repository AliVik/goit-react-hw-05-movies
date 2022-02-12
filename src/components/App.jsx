import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from '../styles/HeaderStyled';
import { HeaderLinks } from '../styles/NavLinksStyled';

const CastPage = lazy(() => import('../pages/CastPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const TrendingMoviesPage = lazy(() => import('../pages/TrendingMoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));
const QueryMovieListPage = lazy(() => import('../pages/QueryMovieListPage'));

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header>
        <HeaderLinks to="/">Home</HeaderLinks>
        <HeaderLinks to="movies">Movies</HeaderLinks>
      </Header>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<TrendingMoviesPage />} />
          </Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}>
            <Route
              path={`${location.search}`}
              element={<QueryMovieListPage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
