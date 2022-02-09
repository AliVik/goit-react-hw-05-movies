import { nanoid } from 'nanoid';
import {
  PictureWithInfoWrapper,
  InfoWrapper,
  MoviePoster,
  MovieTitle,
  GenreItem,
  GenreList,
} from './StyledMovieDetails';

export default function MovieDetail({ movie }) {
  const { poster_path, title, original_title, vote_average, overview, genres } =
    movie;
  return (
    <PictureWithInfoWrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <InfoWrapper>
        <MovieTitle>{original_title}</MovieTitle>
        <p>User score: {vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <GenreList>
          {genres.map(genre => {
            const id = nanoid();
            return <GenreItem key={id}>{genre.name}</GenreItem>;
          })}
        </GenreList>
      </InfoWrapper>
    </PictureWithInfoWrapper>
  );
}
