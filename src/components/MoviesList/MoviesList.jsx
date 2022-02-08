import {
  StyledMoviesList,
  StyledMoviesItem,
  StyledMovieName,
  MovieLink,
} from './MoviesListStyled';
import { IoRocketSharp } from 'react-icons/io5';

export default function MoviesList({ movies }) {
  return (
    <StyledMoviesList>
      {movies.map(movie => {
        const { id, title } = movie;
        return (
          <StyledMoviesItem key={id}>
            <MovieLink to="/movies">
              <IoRocketSharp />
              <StyledMovieName>{title}</StyledMovieName>
            </MovieLink>
          </StyledMoviesItem>
        );
      })}
    </StyledMoviesList>
  );
}
