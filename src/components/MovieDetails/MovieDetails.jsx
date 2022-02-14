import { nanoid } from 'nanoid';
import {
  PictureWithInfoWrapper,
  InfoWrapper,
  MoviePoster,
  MovieTitle,
  GenreItem,
  GenreList,
  MovieText,
  SecondaryHeaders,
} from './StyledMovieDetails';
import noPoster from '../../images/no_poster.jpg';
import AdditionalInformation from 'components/AdditionalInformation';
import PropTypes from 'prop-types';

export default function MovieDetail({ movie }) {
  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <PictureWithInfoWrapper>
      {poster_path ? (
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      ) : (
        <MoviePoster src={noPoster} alt={original_title} />
      )}

      <InfoWrapper>
        <MovieTitle>{original_title}</MovieTitle>
        <MovieText>User score: {vote_average * 10}%</MovieText>
        <SecondaryHeaders>Overview</SecondaryHeaders>
        <MovieText>{overview}</MovieText>
        <SecondaryHeaders>Genres</SecondaryHeaders>
        <GenreList>
          {genres.map(genre => {
            const id = nanoid();
            return <GenreItem key={id}>{genre.name}</GenreItem>;
          })}
        </GenreList>
        <AdditionalInformation />
      </InfoWrapper>
    </PictureWithInfoWrapper>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
