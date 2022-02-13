import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  width: 350px;
  height: 500px;
`;

export const StyledMoviesItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  margin-right: 20px;
  max-width: 350px;
`;

export const StyledMovieName = styled.span`
  display: block;
  margin-top: 10px;
  text-align: center;
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
