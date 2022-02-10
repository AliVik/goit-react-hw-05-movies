import { RiSearchEyeFill } from 'react-icons/ri';
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { SearchButton, SearchInput, SearchForm } from './StyledMoviesPage';
import { IconContext } from 'react-icons';
import { Wrapper } from '../HomePage/HomePageStyled';
import { getMovieByQuery } from '../../helpers/requestsToAPI';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onInputChange = evt => {
    setQuery(evt.target.value);
  };
  const onFormSubmit = async evt => {
    evt.preventDefault();
    if (query === '') toast.error('Please, write down a movie');

    try {
      const moviesResults = await getMovieByQuery(query);
      console.log(moviesResults);
    } catch (error) {
      console.log(error);
    } finally {
      setQuery('');
    }
  };

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
      <Toaster />
    </Wrapper>
  );
}
