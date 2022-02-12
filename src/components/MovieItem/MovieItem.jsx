import {
  StyledMoviesItem,
  StyledMovieName,
  MovieLink,
  Image,
} from './StyledMovieItem';
import noPoster from '../../images/no_poster.jpg';
import PropTypes from 'prop-types';

export default function MovieItem({ props }) {
  const { id, title, poster_path } = props;

  return (
    <StyledMoviesItem key={id}>
      <MovieLink to={`/movies/${id}`}>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <Image src={noPoster} alt={title} />
        )}

        <StyledMovieName>{title}</StyledMovieName>
      </MovieLink>
    </StyledMoviesItem>
  );
}

MovieItem.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
