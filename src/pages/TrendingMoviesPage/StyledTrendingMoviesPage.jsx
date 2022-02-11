import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc((100% - 20px)/4)
  margin: auto;
  margin: 0;
  padding: 0;
  margin-top: 15px;
`;

export const StyledMoviesItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const StyledMovieName = styled.span`
  display: block;
  margin-left: 5px;
`;

export const MovieLink = styled(Link)`
  color: #000;
  text-decoration: none;
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    font-weight: bold;
  }
`;
