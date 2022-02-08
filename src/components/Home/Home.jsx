import { Outlet } from 'react-router-dom';
import { HomeHeader, Wrapper } from './HomeStyled';

export default function Home() {
  return (
    <Wrapper>
      <HomeHeader>Trending today</HomeHeader>
      <Outlet />
    </Wrapper>
  );
}
