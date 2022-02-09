import { Outlet } from 'react-router-dom';
import { HomeHeader, Wrapper } from './HomePageStyled';

export default function HomePage() {
  return (
    <Wrapper>
      <HomeHeader>Trending today</HomeHeader>
      <Outlet />
    </Wrapper>
  );
}
