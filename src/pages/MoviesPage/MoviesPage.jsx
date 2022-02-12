import { RiSearchEyeFill } from 'react-icons/ri';
import { toast, Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { SearchButton, SearchInput, SearchForm } from './StyledMoviesPage';
import { IconContext } from 'react-icons';
import { Wrapper } from '../HomePage/HomePageStyled';
import { getMovieByQuery } from '../../helpers/requestsToAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import QueryMovieListPage from '../QueryMovieListPage';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const onInputChange = evt => {
    setQuery(evt.target.value);
  };

  const onFormSubmit = async evt => {
    evt.preventDefault();
    const form = evt.target;
    if (query === '') toast.error('Please, write down a movie');
    setSearchParams({ query });
    form.reset();
  };

  useEffect(() => {
    if (location.search === '') return;
    const query = searchParams.get('query');

    async function getMoviesByQuery() {
      try {
        const moviesResults = await getMovieByQuery(query);
        setMovies(moviesResults);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesByQuery();
  }, [location.search, searchParams]);

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
      <Toaster />
    </Wrapper>
  );
}
