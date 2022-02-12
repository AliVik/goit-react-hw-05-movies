import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'helpers/requestsToAPI';
import CastList from 'components/CastList';
import * as Scroll from 'react-scroll';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    if (!movieId) return;
    async function handleMovieCast() {
      try {
        const response = await getMovieCast(movieId);

        setCasts(
          response.map(el => ({
            name: el.name,
            id: el.id,
            img: el.profile_path,
            character: el.character,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
    handleMovieCast();
  }, [movieId]);
  if (casts) {
    scroll.scrollTo(700);
  }

  return <>{casts && <CastList casts={casts} />}</>;
}
