import { useEffect, useState, useRef } from 'react';
import { IconContext } from 'react-icons';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieById } from '../../helpers/requestsToAPI';
import { Button, CastAndReviewsWrapper } from './StyledMovieDetailsPage';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Wrapper } from '../HomePage/HomePageStyled';
import MovieDetails from 'components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
      <Button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        <IconContext.Provider value={{ size: '70px', color: '#fff' }}>
          <div>
            <IoArrowBackCircle />
          </div>
        </IconContext.Provider>
      </Button>
      {movie && <MovieDetails movie={movie} />}
      <CastAndReviewsWrapper>
        <Outlet />
      </CastAndReviewsWrapper>
    </Wrapper>
  );
}
