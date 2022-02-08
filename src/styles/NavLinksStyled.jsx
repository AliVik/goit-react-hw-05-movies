import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLinks = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  &.active {
    color: #e65c00;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
