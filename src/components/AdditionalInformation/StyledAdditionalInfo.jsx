import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddInfoWrapper = styled.div`
  padding-left: 20px;
`;

export const AddInfoLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    font-weight: bold;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AddInfoPointsText = styled.span`
  display: block;
  margin-left: 5px;
`;
