import {
  StyledMoviesItem,
  StyledMovieName,
  MovieLink,
} from '../MoviesList/MoviesListStyled';
import { IoRocketSharp } from 'react-icons/io5';
import {
  useMatch,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export default function MovieItem({ props }) {
  const { id, title } = props;

  return (
    <StyledMoviesItem key={id}>
      <MovieLink to={`/movies/${id}`}>
        <IoRocketSharp />
        <StyledMovieName>{title}</StyledMovieName>
      </MovieLink>
    </StyledMoviesItem>
  );
}
