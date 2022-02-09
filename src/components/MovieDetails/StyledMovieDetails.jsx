import styled from 'styled-components';

export const PictureWithInfoWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  max-width: 800px;
`;

export const InfoWrapper = styled.div`
  margin-left: 30px;
`;

export const MoviePoster = styled.img`
  width: 350px;
  height: 500px;
`;

export const MovieTitle = styled.h1`
  margin: 0;
`;

export const GenreItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const GenreList = styled.ul`
  display: flex;
  padding: 0;
`;
