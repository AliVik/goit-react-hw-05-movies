import styled from 'styled-components';

export const PictureWithInfoWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
`;

export const InfoWrapper = styled.div`
  margin-left: 80px;
`;

export const MoviePoster = styled.img`
  width: 700px;
  height: 700px;
`;

export const MovieTitle = styled.h1`
  margin: 0;
  color: #fff;
`;

export const GenreItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 5px;
  }
  color: #fff;
`;

export const GenreList = styled.ul`
  display: flex;
  padding: 0;
`;

export const MovieText = styled.p`
  color: #fff;
`;

export const SecondaryHeaders = styled.h2`
  color: #fff;
`;
