import { NoReviewsText, NoReviewsSpan } from './StyledNoReviews';
import { ImSad } from 'react-icons/im';
import { IconContext } from 'react-icons';

export default function NoReviews() {
  return (
    <NoReviewsText>
      <NoReviewsSpan>There is no any review yet </NoReviewsSpan>
      <IconContext.Provider value={{ color: '#fff' }}>
        <ImSad />
      </IconContext.Provider>
    </NoReviewsText>
  );
}
