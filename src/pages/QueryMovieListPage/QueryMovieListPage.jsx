import { Link } from 'react-router-dom';
import { StyledMoviesList } from '../TrendingMoviesPage/StyledTrendingMoviesPage';

import MovieItem from '../../components/MovieItem';

export default function QueryMovieListPage({ movies }) {
  return (
    <StyledMoviesList>
      {movies.map(movie => {
        return <MovieItem key={movie.id} props={movie} />;
      })}
    </StyledMoviesList>
  );
}
