import { StyledCastItem, CastImg, CastText } from './StyledCastItem';
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

      <CastText>{name}</CastText>
      <CastText>Character: {character}</CastText>
    </StyledCastItem>
  );
}

CastItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
