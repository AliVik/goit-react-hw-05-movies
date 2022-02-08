import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 15px;
`;

export const StyledMoviesItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const StyledMovieName = styled.span`
  display: inline-block;
  margin-left: 5px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    font-weight: bold;
  }
`;
