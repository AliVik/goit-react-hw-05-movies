import { getTrendingMoviesFromAPI } from 'helpers/requestsToAPI';
import { useEffect, useState } from 'react';
import { StyledMoviesList } from './StyledTrendingMoviesPage';
import MovieItem from 'components/MovieItem';

export default function MoviesListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    async function handleAPIResponse() {
      try {
        const response = await getTrendingMoviesFromAPI();
        console.log(response);
        setMovies(
          response.map(movie => ({
            title: movie.original_title,
            id: movie.id,
            poster_path: movie.poster_path,
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
