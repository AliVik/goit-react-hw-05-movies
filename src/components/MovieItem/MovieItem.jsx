import {
  StyledMoviesItem,
  StyledMovieName,
  MovieLink,
} from '../../pages/TrendingMoviesPage/StyledTrendingMoviesPage';

export default function MovieItem({ props }) {
  const { id, title, poster_path } = props;

  return (
    <StyledMoviesItem key={id}>
      <MovieLink to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <StyledMovieName>{title}</StyledMovieName>
      </MovieLink>
    </StyledMoviesItem>
  );
}
