import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Trending today</h1>
      <Outlet />
    </>
  );
}