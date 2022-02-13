import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc((100% - 20px) / 4);
  /* justify-content: center; */
  max-width: 1480px;
  margin: auto;
  margin-top: 30px;
  padding-left: 0;
`;
