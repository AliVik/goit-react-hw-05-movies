import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLinks = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
