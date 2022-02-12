import { CastListStyled } from './StyledCastList';
import CastItem from 'components/CastItem';
import PropTypes from 'prop-types';

export default function CastList({ casts }) {
  return (
    <CastListStyled>
      {casts.map(cast => {
        const { name, character, id, img } = cast;
        return (
          <CastItem key={id} name={name} character={character} img={img} />
        );
      })}
    </CastListStyled>
  );
}

CastList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
