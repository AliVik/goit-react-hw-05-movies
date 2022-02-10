import { StyledCastItem, CastImg } from './StyledCastItem';
import noPhoto from '../../images/no-photoImg.png';
// import PropTypes from 'prop-types';

export default function CastItem({ id, img, name, character }) {
  return (
    <StyledCastItem key={id}>
      {img ? (
        <CastImg src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} />
      ) : (
        <CastImg src={noPhoto} alt={name} />
      )}

      <p>{name}</p>
      <p>Character: {character}</p>
    </StyledCastItem>
  );
}
