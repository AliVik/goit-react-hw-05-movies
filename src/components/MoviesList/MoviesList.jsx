import { getTrendingMoviesFromAPI } from 'helpers/requestsToAPI';
import { useEffect, useState } from 'react';
import { StyledMoviesList } from './MoviesListStyled';
import MovieItem from 'components/MovieItem/MovieItem';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    async function handleAPIResponse() {
      try {
        const response = await getTrendingMoviesFromAPI();
        setMovies(
          response.map(movie => ({
            title: movie.original_title,
            id: movie.id,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
    handleAPIResponse();
  }, [movies]);

  return (
    <>
      <StyledMoviesList>
        {movies.map(movie => {
          return <MovieItem key={movie.id} props={movie} />;
        })}
      </StyledMoviesList>
    </>
  );
}
