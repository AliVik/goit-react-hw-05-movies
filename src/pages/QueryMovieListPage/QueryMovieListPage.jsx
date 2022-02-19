import { StyledMoviesList } from '../TrendingMoviesPage/StyledTrendingMoviesPage';

import MovieItem from '../../components/MovieItem';

export default function QueryMovieListPage({ movies, location }) {
  return (
    <StyledMoviesList>
      {movies.map(movie => {
        return (
          <MovieItem key={movie.id} props={movie} pageLocation={location} />
        );
      })}
    </StyledMoviesList>
  );
}
