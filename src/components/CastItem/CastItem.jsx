import { StyledCastItem, CastImg } from './StyledCastItem';
import noPhoto from '../../images/no-photoImg.png';
import PropTypes from 'prop-types';

export default function CastItem({ img, name, character }) {
  return (
    <StyledCastItem>
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

CastItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
