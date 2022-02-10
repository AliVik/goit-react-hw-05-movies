import { NoReviewsText, NoReviewsSpan } from './StyledNoReviews';
import { ImSad } from 'react-icons/im';

export default function NoReviews() {
  return (
    <NoReviewsText>
      <NoReviewsSpan>There is no any review yet </NoReviewsSpan>
      <ImSad />
    </NoReviewsText>
  );
}
