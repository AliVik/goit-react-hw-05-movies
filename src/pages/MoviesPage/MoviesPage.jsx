import { RiSearchEyeFill } from 'react-icons/ri';
import { toast, Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { SearchButton, SearchInput, SearchForm } from './StyledMoviesPage';
import { IconContext } from 'react-icons';
import { Wrapper } from '../HomePage/HomePageStyled';
import { getMovieByQuery } from '../../helpers/requestsToAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import QueryMovieListPage from '../QueryMovieListPage';
import LoadMoreBtn from 'components/LoadMoreBtn';
import * as Scroll from 'react-scroll';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const scroll = Scroll.animateScroll;

  const onInputChange = evt => {
    setQuery(evt.target.value);
  };

  const onFormSubmit = async evt => {
    evt.preventDefault();
    const form = evt.target;
    if (query === '') toast.error('Please, write down a movie');
    setSearchParams({ query });
    setPage(1);
    setMovies([]);
    form.reset();
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
    scroll.scrollToBottom();
  };
  useEffect(() => {
    if (location.search === '') return;
    const query = searchParams.get('query');

    async function getMoviesByQuery() {
      try {
        const moviesResults = await getMovieByQuery(query, page);
        if (moviesResults.results.length === 0) {
          toast.error(`Sorry, there is no films with ${query}`);
          setSearchParams('');
        }
        setMovies(movies => [...movies, ...moviesResults.results]);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesByQuery();
  }, [location.search, searchParams, page]);

  return (
    <Wrapper>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onInputChange}
        />
        <SearchButton type="submit">
          <IconContext.Provider value={{ size: '40px' }}>
            <div>
              <RiSearchEyeFill />
            </div>
          </IconContext.Provider>
        </SearchButton>
      </SearchForm>
      <QueryMovieListPage movies={movies} />
      {movies.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
      <Toaster />
    </Wrapper>
  );
}
