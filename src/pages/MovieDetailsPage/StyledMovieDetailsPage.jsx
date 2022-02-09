import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 0;

  margin-bottom: 10px;
  border: none;
  background-color: transparent;
`;

export const GoBackText = styled.span`
  display: block;
  margin-left: 3px;
  color: #330066;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;
