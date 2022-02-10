import {
  StyledMoviesItem,
  StyledMovieName,
  MovieLink,
} from '../../pages/TrendingMoviesPage/StyledTrendingMoviesPage';
import { IoRocketSharp } from 'react-icons/io5';

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
