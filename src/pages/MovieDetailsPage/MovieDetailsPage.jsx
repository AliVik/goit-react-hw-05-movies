import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieById } from '../../helpers/requestsToAPI';
import { Button, GoBackLink } from './StyledMovieDetailsPage';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Wrapper } from '../HomePage/HomePageStyled';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import AdditionalInformation from '../../components/AdditionalInformation/AdditionalInformation';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieData() {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieData();
  }, [movieId]);

  return (
    <Wrapper>
      <Button type="button">
        <GoBackLink to="/">
          <IconContext.Provider value={{ size: '70px', fill: '#330066' }}>
            <div>
              <IoArrowBackCircle />
            </div>
          </IconContext.Provider>
        </GoBackLink>
      </Button>
      {movie && (
        <>
          <MovieDetails movie={movie} />
          <AdditionalInformation />
          <Outlet />
        </>
      )}
    </Wrapper>
  );
}
